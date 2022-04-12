/* eslint-disable no-restricted-globals */
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  InputChangeEventDetail,
  IonApp,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { itemUpdated, TeethType } from "./features/teeth/teethSlice";
import { useEffect, useState } from "react";
import { Modal, ModalClose } from "./styles/App";
import { TeethList } from "./features/teeth/TeethList";
import {
  catalogConeMorse,
  catalogHexExt,
  catalogHexInt,
} from "./mock/manualSpecifications";

setupIonicReact();

const Edit = ({ match }: { match: { id: number } } | any) => {
  const { id } = match.params;
  const data = useSelector((state: RootState) =>
    state.teeth.items.find((item: TeethType) => String(item.id) === String(id))
  );

  const [catalog, setCatalog] = useState(data.catalog);
  const [toothNumber] = useState(data.toothNumber);
  const [brand, setBrand] = useState(data.brand);
  const [specification, setSpecification] = useState(data.specification);
  const [implant, setImplant] = useState(data.implant);
  const [platform, setPlatform] = useState(data.platform);
  const [smp, setSmp] = useState(data.smp);
  const [unionImplant, setUnionImplant] = useState(data.unionImplant);
  const [position, setPosition] = useState(data.position);
  const [isSelected] = useState(data.isSelected);

  const dispatch = useDispatch();
  const history = useHistory();

  const onCatalogChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setCatalog(field.value);
  };

  const onBrandChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setBrand(field.value);
  };

  const onPlatformChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setPlatform(field.value);
  };

  const onSmpChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setSmp(field.value);
  };

  const onPositionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setPosition(field.value);
  };

  const onUnionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.detail as HTMLIonCheckboxElement;
    setUnionImplant(field.checked);
  };

  const onSpecificationChanged = (
    event: CustomEvent<InputChangeEventDetail>
  ) => {
    const field = event.target as HTMLSelectElement;
    setSpecification(field.value);
  };

  const onImplantChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setImplant(field.value);
  };

  const onSaveEdit = () => {
    if (brand) {
      dispatch(
        itemUpdated({
          id: id,
          catalog,
          toothNumber,
          brand,
          specification,
          implant,
          smp,
          platform,
          unionImplant,
          position,
          isSelected: true,
        })
      );
      history.push(`/`);
    }
  };

  const onRemove = () => {
    dispatch(
      itemUpdated({
        ...data,
        catalog: "",
        brand: "",
        specification: "",
        implant: "",
        smp: "",
        platform: "",
        unionImplant: false,
        position: "",
        isSelected: false,
      })
    );
    history.push(`/`);
  };

  const onRemoveSpecialCharacters = (char: string) => {
    const noSpecialCharacters = char.replace(/[^a-zA-Z0-9 ]/g, "");
    return noSpecialCharacters;
  };

  useEffect(() => {}, [catalog]);

  return (
    <Modal>
      <div className="container">
        <ModalClose>
          <Link
            to={{
              pathname: `/`,
            }}
          ></Link>
        </ModalClose>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Catálogo</IonLabel>
            <IonSelect
              value={catalog}
              placeholder="Selecione"
              onIonChange={onCatalogChanged}
            >
              <IonSelectOption value="Cone Morse">Cone Morse</IonSelectOption>
              <IonSelectOption value="Hexagono Externo">
                Hexágono Externo
              </IonSelectOption>
              <IonSelectOption value="Hexagono Interno">
                Hexágono Interno
              </IonSelectOption>
            </IonSelect>
          </IonItem>

          {catalog === "Cone Morse" && (
            <>
              <IonItem>
                <IonLabel position="floating">Marca do Implante</IonLabel>
                <IonSelect
                  value={brand}
                  placeholder="Selecione"
                  onIonChange={onBrandChanged}
                >
                  {catalogConeMorse.map((item: any) => (
                    <IonSelectOption key={item.id} value={item.id}>
                      {item.brandName}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              {brand && (
                <IonItem>
                  <IonLabel position="floating">Especificação</IonLabel>
                  <IonSelect
                    value={specification}
                    placeholder="Selecione"
                    onIonChange={onSpecificationChanged}
                  >
                    {catalogConeMorse
                      .filter((brandName: any) => {
                        if (brandName.id === onRemoveSpecialCharacters(brand)) {
                          return true;
                        }
                        return false;
                      })
                      .map((items: any) => {
                        return items.manual.map((value: any) =>
                          value.specification !== "Undefined" ? (
                            <IonSelectOption
                              key={value.id}
                              value={value.specification}
                            >
                              {value.specification}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.id}
                              value={value.specification}
                            >
                              Não possui
                            </IonSelectOption>
                          )
                        );
                      })}
                  </IonSelect>
                </IonItem>
              )}

              {catalogConeMorse.map((items: any) => {
                if (items.id === brand) {
                  const implantValues = items.manual
                    .filter((value: any) => {
                      if (value.specification === specification) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">Implante</IonLabel>
                        <IonSelect
                          value={implant}
                          placeholder="Selecione"
                          onIonChange={onImplantChanged}
                        >
                          {value.implant !== "Undefined" ? (
                            <IonSelectOption
                              key={value.implant}
                              value={value.implant}
                            >
                              {value.implant}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.implant}
                              value={value.implant}
                            >
                              Não possui
                            </IonSelectOption>
                          )}
                        </IonSelect>
                      </IonItem>
                    ));
                  return implantValues;
                }
                return null;
              })}

              {catalogConeMorse.map((items: any) => {
                if (items.id === brand) {
                  const platformValues = items.manual
                    .filter((value: any) => {
                      if (
                        value.specification === specification &&
                        value.implant === implant
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">
                          Plataforma Protética
                        </IonLabel>
                        <IonSelect
                          value={platform}
                          placeholder="Selecione"
                          onIonChange={onPlatformChanged}
                        >
                          {value.platform !== "Undefined" ? (
                            <IonSelectOption
                              key={value.platform}
                              value={value.platform}
                            >
                              {value.platform}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.platform}
                              value={value.platform}
                            >
                              Não possui
                            </IonSelectOption>
                          )}
                        </IonSelect>
                      </IonItem>
                    ));
                  return platformValues;
                }
                return null;
              })}

              {catalogConeMorse.map((items: any) => {
                if (items.id === brand) {
                  const smpValues = items.manual
                    .filter((value: any) => {
                      if (
                        value.specification === specification &&
                        value.implant === implant &&
                        value.platform === platform
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">Família EFF</IonLabel>
                        <IonSelect
                          value={smp}
                          placeholder="Selecione"
                          onIonChange={onSmpChanged}
                        >
                          <IonSelectOption value={value.smp}>
                            {value.smp}
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    ));
                  return smpValues;
                }
                return null;
              })}
            </>
          )}

          {catalog === "Hexagono Externo" && (
            <>
              <IonItem>
                <IonLabel position="floating">Marca do Implante</IonLabel>
                <IonSelect
                  value={brand}
                  placeholder="Selecione"
                  onIonChange={onBrandChanged}
                >
                  {catalogHexExt.map((item: any) => (
                    <IonSelectOption key={item.id} value={item.id}>
                      {item.brandName}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              {brand && (
                <IonItem>
                  <IonLabel position="floating">Especificação</IonLabel>
                  <IonSelect
                    value={specification}
                    placeholder="Selecione"
                    onIonChange={onSpecificationChanged}
                  >
                    {catalogHexExt
                      .filter((brandName: any) => {
                        if (brandName.id === onRemoveSpecialCharacters(brand)) {
                          return true;
                        }
                        return false;
                      })
                      .map((items: any) => {
                        return items.manual.map((value: any) =>
                          value.specification !== "Undefined" ? (
                            <IonSelectOption
                              key={value.id}
                              value={value.specification}
                            >
                              {value.specification}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.id}
                              value={value.specification}
                            >
                              Não possui
                            </IonSelectOption>
                          )
                        );
                      })}
                  </IonSelect>
                </IonItem>
              )}

              {catalogHexExt.map((items: any) => {
                if (items.id === brand) {
                  const implantValues = items.manual
                    .filter((value: any) => {
                      if (value.specification === specification) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">Implante</IonLabel>
                        <IonSelect
                          value={implant}
                          placeholder="Selecione"
                          onIonChange={onImplantChanged}
                        >
                          {value.implant !== "Undefined" ? (
                            <IonSelectOption
                              key={value.implant}
                              value={value.implant}
                            >
                              {value.implant}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.implant}
                              value={value.implant}
                            >
                              Não possui
                            </IonSelectOption>
                          )}
                        </IonSelect>
                      </IonItem>
                    ));
                  return implantValues;
                }
                return null;
              })}

              {catalogHexExt.map((items: any) => {
                if (items.id === brand) {
                  const platformValues = items.manual
                    .filter((value: any) => {
                      if (
                        value.specification === specification &&
                        value.implant === implant
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">
                          Plataforma Protética
                        </IonLabel>
                        <IonSelect
                          value={platform}
                          placeholder="Selecione"
                          onIonChange={onPlatformChanged}
                        >
                          {value.platform !== "Undefined" ? (
                            <IonSelectOption
                              key={value.platform}
                              value={value.platform}
                            >
                              {value.platform}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.platform}
                              value={value.platform}
                            >
                              Não possui
                            </IonSelectOption>
                          )}
                        </IonSelect>
                      </IonItem>
                    ));
                  return platformValues;
                }
                return null;
              })}

              {catalogHexExt.map((items: any) => {
                if (items.id === brand) {
                  const smpValues = items.manual
                    .filter((value: any) => {
                      if (
                        value.specification === specification &&
                        value.implant === implant &&
                        value.platform === platform
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">Família EFF</IonLabel>
                        <IonSelect
                          value={smp}
                          placeholder="Selecione"
                          onIonChange={onSmpChanged}
                        >
                          <IonSelectOption value={value.smp}>
                            {value.smp}
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    ));
                  return smpValues;
                }
                return null;
              })}
            </>
          )}

          {catalog === "Hexagono Interno" && (
            <>
              <IonItem>
                <IonLabel position="floating">Marca do Implante</IonLabel>
                <IonSelect
                  value={brand}
                  placeholder="Selecione"
                  onIonChange={onBrandChanged}
                >
                  {catalogHexInt.map((item: any) => (
                    <IonSelectOption key={item.id} value={item.id}>
                      {item.brandName}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              {brand && (
                <IonItem>
                  <IonLabel position="floating">Especificação</IonLabel>
                  <IonSelect
                    value={specification}
                    placeholder="Selecione"
                    onIonChange={onSpecificationChanged}
                  >
                    {catalogHexInt
                      .filter((brandName: any) => {
                        if (brandName.id === onRemoveSpecialCharacters(brand)) {
                          return true;
                        }
                        return false;
                      })
                      .map((items: any) => {
                        return items.manual.map((value: any) =>
                          value.specification !== "Undefined" ? (
                            <IonSelectOption
                              key={value.id}
                              value={value.specification}
                            >
                              {value.specification}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.id}
                              value={value.specification}
                            >
                              Não possui
                            </IonSelectOption>
                          )
                        );
                      })}
                  </IonSelect>
                </IonItem>
              )}

              {catalogHexInt.map((items: any) => {
                if (items.id === brand) {
                  const implantValues = items.manual
                    .filter((value: any) => {
                      if (value.specification === specification) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">Implante</IonLabel>
                        <IonSelect
                          value={implant}
                          placeholder="Selecione"
                          onIonChange={onImplantChanged}
                        >
                          {value.implant !== "Undefined" ? (
                            <IonSelectOption
                              key={value.implant}
                              value={value.implant}
                            >
                              {value.implant}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.implant}
                              value={value.implant}
                            >
                              Não possui
                            </IonSelectOption>
                          )}
                        </IonSelect>
                      </IonItem>
                    ));
                  return implantValues;
                }
                return null;
              })}

              {catalogHexInt.map((items: any) => {
                if (items.id === brand) {
                  const platformValues = items.manual
                    .filter((value: any) => {
                      if (
                        value.specification === specification &&
                        value.implant === implant
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">
                          Plataforma Protética
                        </IonLabel>
                        <IonSelect
                          value={platform}
                          placeholder="Selecione"
                          onIonChange={onPlatformChanged}
                        >
                          {value.platform !== "Undefined" ? (
                            <IonSelectOption
                              key={value.platform}
                              value={value.platform}
                            >
                              {value.platform}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.platform}
                              value={value.platform}
                            >
                              Não possui
                            </IonSelectOption>
                          )}
                        </IonSelect>
                      </IonItem>
                    ));
                  return platformValues;
                }
                return null;
              })}

              {catalogHexInt.map((items: any) => {
                if (items.id === brand) {
                  const smpValues = items.manual
                    .filter((value: any) => {
                      if (
                        value.specification === specification &&
                        value.implant === implant &&
                        value.platform === platform
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((value: any) => (
                      <IonItem key={value.id}>
                        <IonLabel position="floating">Família EFF</IonLabel>
                        <IonSelect
                          value={smp}
                          placeholder="Selecione"
                          onIonChange={onSmpChanged}
                        >
                          <IonSelectOption value={value.smp}>
                            {value.smp}
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    ));
                  return smpValues;
                }
                return null;
              })}
            </>
          )}
        </IonList>

        {!isSelected ? (
          <IonButton
            expand="block"
            size="large"
            shape="round"
            type="button"
            onClick={onSaveEdit}
          >
            Selecionar
          </IonButton>
        ) : (
          <div className="container__buttons">
            <IonButton
              expand="block"
              shape="round"
              color="light"
              type="button"
              onClick={onSaveEdit}
            >
              Salvar
            </IonButton>
            <IonButton
              expand="block"
              shape="round"
              color="warning"
              type="button"
              onClick={onRemove}
            >
              Remover
            </IonButton>
          </div>
        )}
      </div>
    </Modal>
  );
};

const App: React.FC = () => {
  const postStatus = useSelector((state: RootState) => state.teeth.status);

  return (
    <IonApp>
      <IonReactRouter>
        <>
          {postStatus !== "loading" ? (
            <TeethList />
          ) : (
            <IonSpinner className="loading" name="crescent" color="primary" />
          )}
        </>
        <Switch>
          <Route path="/edit/:id" component={Edit} />
          <Redirect to="/" />
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
