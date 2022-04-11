/* eslint-disable no-restricted-globals */
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  InputChangeEventDetail,
  IonApp,
  IonButton,
  IonCheckbox,
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
import { coneMorseBrands } from "./mock/manualSpecifications";
import { current } from "@reduxjs/toolkit";

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
                  {coneMorseBrands.map((item: any) => (
                    <IonSelectOption key={item.id} value={item.id}>
                      {item.name}
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
                    {coneMorseBrands
                      .filter((application: any) => {
                        if (
                          application.id === onRemoveSpecialCharacters(brand)
                        ) {
                          return true;
                        }
                        return false;
                      })
                      .map((sub: any) => {
                        return sub.specifications.map((value: any) =>
                          value.name !== "Undefined" ? (
                            <IonSelectOption
                              key={value.name}
                              value={value.name}
                            >
                              {value.name}
                            </IonSelectOption>
                          ) : (
                            <IonSelectOption
                              key={value.name}
                              value={value.name}
                            >
                              Não possui
                            </IonSelectOption>
                          )
                        );
                      })}
                  </IonSelect>
                </IonItem>
              )}

              {coneMorseBrands.map((sub: any) => {
                const implantsList = sub.specifications.filter(
                  (values: any) => {
                    if (values.name === specification) {
                      return true;
                    }
                    return false;
                  }
                );

                return implantsList.map((item: any) => (
                  <IonItem key={item.id}>
                    <IonLabel position="floating">Implante</IonLabel>
                    <IonSelect
                      value={implant}
                      placeholder="Selecione"
                      onIonChange={onImplantChanged}
                    >
                      {item.implant !== "Undefined" ? (
                        <IonSelectOption
                          key={item.implant}
                          value={item.implant}
                        >
                          {item.implant}
                        </IonSelectOption>
                      ) : (
                        <IonSelectOption
                          key={item.implant}
                          value={item.implant}
                        >
                          Não possui
                        </IonSelectOption>
                      )}
                    </IonSelect>
                  </IonItem>
                ));
              })}

              {coneMorseBrands.map((sub: any) => {
                const platformsList = sub.specifications.filter(
                  (values: any) => {
                    if (
                      values.implant === implant &&
                      values.name === specification
                    ) {
                      return true;
                    }
                    return false;
                  }
                );

                return platformsList.map((item: any) => (
                  <IonItem key={item.id}>
                    <IonLabel position="floating">
                      Plataforma Protética
                    </IonLabel>
                    <IonSelect
                      value={platform}
                      placeholder="Selecione"
                      onIonChange={onPlatformChanged}
                    >
                      {item.platform !== "Undefined" ? (
                        <IonSelectOption
                          key={item.platform}
                          value={item.platform}
                        >
                          {item.platform}
                        </IonSelectOption>
                      ) : (
                        <IonSelectOption
                          key={item.platform}
                          value={item.platform}
                        >
                          Não possui
                        </IonSelectOption>
                      )}
                    </IonSelect>
                  </IonItem>
                ));
              })}

              {coneMorseBrands.map((sub: any) => {
                if (sub.id === brand) {
                  return sub.specifications
                    .filter((item: any) => {
                      if (
                        item.name === specification &&
                        item.platform === platform &&
                        item.implant === implant
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((i: any) => (
                      <IonItem key={i.id}>
                        <IonLabel position="floating">Família EFF</IonLabel>
                        <IonSelect
                          value={smp}
                          placeholder="Selecione"
                          onIonChange={onSmpChanged}
                        >
                          <IonSelectOption value={i.smp}>
                            {i.smp}
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    ));
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
