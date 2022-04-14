/* eslint-disable no-restricted-globals */
import {
  Link,
  Redirect,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  InputChangeEventDetail,
  IonApp,
  IonButton,
  IonCheckbox,
  IonContent,
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
import {
  itemUpdated,
  fetchPosts,
  selectAllItems,
  TeethType,
} from "./features/teeth/teethSlice";
import { useEffect, useRef, useState } from "react";
import { Modal, ModalClose } from "./styles/App";
import { TeethList } from "./features/teeth/TeethList";
import {
  catalogConeMorse,
  catalogHexExt,
  catalogHexInt,
} from "./mock/manualSpecifications";
import ToothScheme from "./components/ToothScheme";

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
  const dataRef = useRef(null) as any;
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

    if (dataRef.current) {
      setSmp(dataRef.current.innerText);
    }
  };

  const onPositionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.detail as HTMLIonCheckboxElement;
    setPosition(field.checked);
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
        implant: "Undefined",
        smp: "",
        platform: "",
        unionImplant: false,
        position: false,
        isSelected: false,
      })
    );
    history.push(`/`);
  };

  const onRemoveSpecialCharacters = (char: string) => {
    const noSpecialCharacters = char.replace(/[^a-zA-Z0-9 ]/g, "");
    return noSpecialCharacters;
  };

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

        <div className="container__columns">
          <ToothScheme
            tooth={toothNumber}
            implant={implant}
            position={position}
            isSelected={isSelected}
            unionImplant={unionImplant}
          />
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
                          if (
                            brandName.id === onRemoveSpecialCharacters(brand)
                          ) {
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
                    const implantValues = items.manual.filter((value: any) => {
                      if (value.implant !== "Undefined") {
                        if (
                          value.specification === specification &&
                          value.implant === implant
                        ) {
                          return true;
                        }
                      }
                      return false;
                    });

                    if (implantValues.length > 0) {
                      return (
                        <IonItem key={items.id}>
                          <IonLabel>Desfavorável?</IonLabel>
                          <IonCheckbox
                            value={position}
                            checked={position}
                            onIonChange={onPositionChanged}
                            slot="end"
                            color="primary"
                          />
                        </IonItem>
                      );
                    }
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
                    const platformValues = items.manual.filter((value: any) => {
                      if (value.platform === platform) {
                        return true;
                      }
                      return false;
                    });

                    if (platformValues.length > 0) {
                      return (
                        <IonItem key={items.id}>
                          <IonLabel>Múltipla?</IonLabel>
                          <IonCheckbox
                            value={unionImplant}
                            checked={unionImplant}
                            onIonChange={onUnionChanged}
                            slot="end"
                            color="primary"
                          />
                        </IonItem>
                      );
                    }
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
                      .map((value: any) => {
                        return (
                          <h2 className="smp-name" key={value.id} ref={dataRef}>
                            {value.smp}
                          </h2>
                        );
                      });
                    return smpValues;
                  }
                  return null;
                })}
              </>
            )}
          </IonList>
        </div>

        {!isSelected ? (
          <IonButton
            className="button-add ion-no-shadow"
            color="dark"
            expand="block"
            size="large"
            shape="round"
            type="button"
            onClick={onSaveEdit}
          >
            <strong>Adicionar</strong>
          </IonButton>
        ) : (
          <div className="container__buttons">
            <IonButton
              className="button-save"
              expand="block"
              shape="round"
              color="dark"
              type="button"
              onClick={onSaveEdit}
            >
              Salvar
            </IonButton>
            <IonButton
              className="button-remove"
              expand="block"
              shape="round"
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

const List = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector(selectAllItems);
  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const error = useSelector((state: RootState) => state.teeth.error);

  console.log(data);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <IonContent>
      <>
        <IonButton onClick={history.goBack}>VOLTAR</IonButton>

        {postStatus === "loading" && (
          <IonSpinner className="loading" name="crescent" color="primary" />
        )}

        {postStatus === "succeeded" &&
          data.map(
            (item: any) =>
              item.isSelected && (
                <>
                  <div key={item.id}>
                    <p>
                      <strong>Marca:</strong> {item.brand}
                    </p>
                    <p>
                      <strong>Catálogo:</strong> {item.catalog}
                    </p>
                    <p>
                      <strong>Implante:</strong>{" "}
                      {item.implant !== "Undefined"
                        ? item.implant
                        : "Não possui"}
                    </p>
                    <p>
                      <strong>Plataforma:</strong>{" "}
                      {item.platform !== "Undefined"
                        ? item.platform
                        : "Não possui"}
                    </p>
                    <p>
                      <strong>Especificação:</strong>{" "}
                      {item.specification !== "Undefined"
                        ? item.specification
                        : "Não possui"}
                    </p>
                    <p>
                      <strong>Múltiplos:</strong>{" "}
                      {item.unionImplant ? "Sim" : "Não"}
                    </p>
                    <p>
                      <strong>Família:</strong> {item.smp}
                    </p>
                  </div>
                </>
              )
          )}

        {postStatus === "error" && error}
      </>
    </IonContent>
  );
};

const App: React.FC = () => {
  const postStatus = useSelector((state: RootState) => state.teeth.status);

  return (
    <IonApp>
      <IonReactRouter>
        <>
          {postStatus !== "loading" ? (
            <Route exact path="/" component={TeethList} />
          ) : (
            <IonSpinner className="loading" name="crescent" color="primary" />
          )}
        </>
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/list" component={List} />
        <Redirect to="/" />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
