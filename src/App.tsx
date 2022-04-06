import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  InputChangeEventDetail,
  IonApp,
  IonButton,
  IonCheckbox,
  IonInput,
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
import { useState } from "react";
import { Modal, ModalClose } from "./styles/App";
import { TeethList } from "./features/teeth/TeethList";
import { platformConeMorse, platformLorem } from "./mock/platforms";

setupIonicReact();

const Edit = ({ match }: { match: { id: number } } | any) => {
  const { id } = match.params;
  const data = useSelector((state: RootState) =>
    state.teeth.items.find((item: TeethType) => String(item.id) === String(id))
  );

  const [toothNumber] = useState(data.toothNumber);
  const [brand, setBrand] = useState(data.brand);
  const [connectionName, setConnectionName] = useState(data.connectionName);
  const [platform, setPlatform] = useState(data.platform);
  const [unionImplant, setUnionImplant] = useState(data.unionImplant);
  const [position, setPosition] = useState(data.position);
  const [isSelected] = useState(data.isSelected);

  const dispatch = useDispatch();
  const history = useHistory();

  const onBrandChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setBrand(field.value);
  };

  const onUnionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.detail as HTMLIonCheckboxElement;
    setUnionImplant(field.checked);
  };

  const onConnectionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setConnectionName(field.value);
  };

  const onPlatformChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setPlatform(field.value);
  };

  const onPositionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setPosition(field.value);
  };

  const onSaveEdit = () => {
    if (brand) {
      dispatch(
        itemUpdated({
          id: id,
          toothNumber,
          brand,
          connectionName,
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
        brand: "",
        connectionName,
        platform,
        unionImplant: false,
        position: "",
        isSelected: false,
      })
    );
    history.push(`/`);
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
            <IonLabel position="floating">Marca do Implante</IonLabel>
            <IonInput
              value={brand}
              onIonChange={onBrandChanged}
              type="text"
              autocapitalize="true"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Conexão</IonLabel>
            <IonSelect
              value={connectionName}
              placeholder="Selecione"
              onIonChange={onConnectionChanged}
            >
              <IonSelectOption value="Cone Morse">Cone Morse</IonSelectOption>
              <IonSelectOption value="Lorem Ipsum">Lorem Ipsum</IonSelectOption>
              <IonSelectOption value="Whatever">Whatever</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Plataforma</IonLabel>
            <IonSelect
              value={platform}
              placeholder="Selecione"
              onIonChange={onPlatformChanged}
            >
              {connectionName === "Cone Morse" &&
                platformConeMorse.map((item: any) => (
                  <IonSelectOption key={item.code} value={item.code}>
                    {item.code}
                  </IonSelectOption>
                ))}

              {connectionName === "Lorem Ipsum" &&
                platformLorem.map((item: any) => (
                  <IonSelectOption key={item.code} value={item.code}>
                    {item.code}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Posicionamento</IonLabel>
            <IonSelect
              value={position}
              placeholder="Selecione"
              onIonChange={onPositionChanged}
            >
              <IonSelectOption value="well-positioned">
                Favorável
              </IonSelectOption>
              <IonSelectOption value="bad-positioned">
                Desfavorável
              </IonSelectOption>
              <IonSelectOption value="">Nenhum</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Múltiplas?</IonLabel>
            <IonCheckbox checked={unionImplant} onIonChange={onUnionChanged} />
          </IonItem>
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
