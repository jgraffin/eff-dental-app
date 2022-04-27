import {
  InputChangeEventDetail,
  IonContent,
  IonButton,
  IonSpinner,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../app/store";
import {
  selectAllItems,
  fetchPosts,
  TeethType,
} from "../features/teeth/teethSlice";
import { SistemaMultiplataforma, SmpType } from "../mock/manualSpecifications";
import { WrapperComponents } from "../styles/App";

const List = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector(selectAllItems);
  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const error = useSelector((state: RootState) => state.teeth.error);

  const [content, setContent] = useState<any>(null);
  const [newSmp, setNewSmp] = useState<string | undefined>("");

  const [size, setSize] = useState<any>("");
  const [quantity, setQuantity] = useState<any>("");

  const onSizeChanged = (name: any, current: any) => {
    console.log("onSizeChanged", name);
    console.log("current", current);
  };

  const onQuantityChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setQuantity(field.value);
    console.log(field.value);
  };

  const onToothSelectComponents = (familia: string | undefined) => {
    let content = SistemaMultiplataforma.filter(
      (item: SmpType) => item.familia === familia ?? true
    ).map((item) =>
      item.componentes.map((item) => (
        <div className="component-content__container" key={item.nome}>
          <div className="component-dropdown">
            <div className="component-dropdown__image">
              <img
                src={`./assets/images/prosthesis/${item.imagem}.png`}
                alt={item.nome}
              />
            </div>
            <div className="component-dropdown__name">
              <h2>{item.nome}</h2>
              <p>
                {item.perfil && <span>{item.perfil}</span>}
                {item.torque && <span>{item.torque}</span>}
              </p>
            </div>
            <IonItem className="component-dropdown__size" key={item.nome}>
              <IonSelect
                value={size}
                placeholder="Selecione"
                onIonChange={() => onSizeChanged(item.nome, item)}
              >
                <IonLabel position="floating">Tamanho</IonLabel>
                {item.caracteristicas.map((item) => (
                  <IonSelectOption key={item.tamanho} value={item.tamanho}>
                    {item.perfil ? (
                      <>
                        {item.perfil} - {item.tamanho}
                      </>
                    ) : (
                      <>{item.tamanho}</>
                    )}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <IonItem className="component-dropdown__quantity">
              <IonLabel position="floating">Quantidade</IonLabel>
              <IonInput
                type="number"
                onIonChange={onQuantityChanged}
              ></IonInput>
            </IonItem>
          </div>
        </div>
      ))
    );

    setNewSmp(familia);
    setContent(content);
  };

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <IonContent>
      <IonButton onClick={history.goBack}>VOLTAR</IonButton>
      <WrapperComponents>
        {postStatus === "loading" && (
          <IonSpinner className="loading" name="crescent" color="primary" />
        )}

        <IonGrid>
          <IonRow className="table-head">
            <IonCol className="ion-no-padding" size="1">
              Nº Dente
            </IonCol>
            <IonCol className="ion-no-padding" size="2">
              Família
            </IonCol>
            <IonCol className="ion-no-padding">&nbsp;</IonCol>
          </IonRow>
          {postStatus === "succeeded" &&
            data.map(
              (item: TeethType) =>
                item.selecionado && (
                  <>
                    <IonRow className="table-row" key={item.id}>
                      <IonCol className="ion-no-padding" size="1">
                        {item.dente}
                      </IonCol>
                      <IonCol className="ion-no-padding" size="2">
                        {item.familia}
                      </IonCol>
                      <IonCol className="ion-no-padding">
                        <IonButton
                          onClick={() => onToothSelectComponents(item.familia)}
                        >
                          Selecionar
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow className="table-row">
                      <IonCol className="ion-no-padding">
                        <div className="component-content">
                          {item.familia === newSmp && content}
                        </div>
                      </IonCol>
                    </IonRow>
                  </>
                )
            )}
        </IonGrid>

        {postStatus === "error" && error}
      </WrapperComponents>
    </IonContent>
  );
};

export default List;
