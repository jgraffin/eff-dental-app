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
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

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

setupIonicReact();

const Edit = ({ match }: { match: { params: { id: string } } }) => {
  const { id } = match.params;
  const data = useSelector((state: RootState) =>
    state.teeth.items.find((item: TeethType) => item.id === id)
  );

  console.log('Edit', match);
  console.log('Data', data);

  const [brand, setBrand] = useState(data.brand);
  const [toothNumber] = useState(data.toothNumber);
  const [unionImplant, setUnionImplant] = useState(data.unionImplant);
  const [connection, setConnection] = useState(data.connection);
  const [platform, setPlatform] = useState(data.platform);
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
    setConnection(field.value);
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
          connection,
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
        connection: "",
        platform: "",
        unionImplant: false,
        position: "well-positioned",
        isSelected: false,
      })
    );
    history.push(`/`);
  }

  const onDismiss = () => {
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
              placeholder="Name"
              onIonChange={onBrandChanged}
              type="text"
              autocapitalize="true"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Conexão</IonLabel>
            <IonSelect
              value={connection}
              placeholder="Selecione"
              onIonChange={onConnectionChanged}
            >
              <IonSelectOption value="Cone Morse">Cone Morse</IonSelectOption>
              <IonSelectOption value="Lorem Ipsum">Lorem Ipsum</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Plataforma</IonLabel>
            <IonSelect
              value={platform}
              placeholder="Selecione"
              onIonChange={onPlatformChanged}
            >
              <IonSelectOption value="4.1">4.1</IonSelectOption>
              <IonSelectOption value="3.5">3.5</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Posicionamento</IonLabel>
            <IonSelect
              value={position}
              placeholder="Selecione"
              onIonChange={onPositionChanged}
            >
              <IonSelectOption value="Bem Posicionado">
                Bem Posicionado
              </IonSelectOption>
              <IonSelectOption value="Mal Posicionado">
                Mal Posicionado
              </IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Unir?</IonLabel>
            <IonCheckbox
              checked={unionImplant}
              onIonChange={onUnionChanged}
            />
          </IonItem>
        </IonList>
        {!isSelected ? (
          <IonButton
            expand="block"
            shape="round"
            color="warning"
            type="button"
            onClick={onSaveEdit}
          >
            Selecionar
          </IonButton>
        ):(
          <div className="container__buttons">
            <IonButton
              expand="block"
              shape="round"
              color="warning"
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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <TeethList />
      <Switch>
        <Route exact path="/edit/:id" component={Edit} />
        <Redirect to="/" />
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;
