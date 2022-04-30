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
  IonItemGroup,
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
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState<number>();

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
            </div>
            <div className="component-dropdown__fields">
              {item.caracteristicas.length > 0 &&
                item.caracteristicas.map(
                  (item) =>
                    item.tipo === "SKU" && (
                      <>
                        <IonItemGroup>
                          <IonItem
                            className="component-dropdown__sku"
                            key={item.tipo}
                          >
                            <IonLabel position="floating">{item.tipo}</IonLabel>
                            <IonSelect value={size} placeholder="Selecione">
                              {item.opcoes.map((item) => (
                                <IonSelectOption
                                  key={item.sku}
                                  value={item.sku}
                                >
                                  {item.sku}
                                </IonSelectOption>
                              ))}
                            </IonSelect>
                          </IonItem>

                          <IonItem
                            className="component-dropdown__quantity"
                            key={item.tipo}
                          >
                            <IonLabel position="stacked">Quantidade</IonLabel>
                            <IonInput
                              type="number"
                              value={number}
                              placeholder="0"
                              onIonChange={(e) =>
                                setNumber(parseInt(e.detail.value!, 10))
                              }
                            ></IonInput>
                          </IonItem>
                        </IonItemGroup>
                      </>
                    )
                )}

              {item.caracteristicas.length > 0 &&
                item.caracteristicas.map(
                  (item) =>
                    item.tipo === "Perfil Reto Ø3.50mm" && (
                      <>
                        <h3 className="component-dropdown__sku__title">
                          {item.tipo}
                        </h3>
                        <IonItemGroup>
                          <IonItem
                            className="component-dropdown__sku"
                            key={item.tipo}
                          >
                            <IonLabel position="floating">
                              Altura Gengival
                            </IonLabel>
                            <IonSelect value={size} placeholder="Selecione">
                              {item.opcoes.map((item) => (
                                <IonSelectOption
                                  key={item.sku}
                                  value={item.sku}
                                >
                                  {item.alturaGengival}
                                </IonSelectOption>
                              ))}
                            </IonSelect>
                          </IonItem>

                          <IonItem
                            className="component-dropdown__quantity"
                            key={item.tipo}
                          >
                            <IonLabel position="stacked">Quantidade</IonLabel>
                            <IonInput
                              type="number"
                              value={number}
                              placeholder="0"
                              onIonChange={(e) =>
                                setNumber(parseInt(e.detail.value!, 10))
                              }
                            ></IonInput>
                          </IonItem>
                        </IonItemGroup>
                      </>
                    )
                )}

              {item.caracteristicas.length > 0 &&
                item.caracteristicas.map(
                  (item) =>
                    item.tipo === "Perfil Divergente Ø5.0mm" && (
                      <>
                        <h3 className="component-dropdown__sku__title">
                          {item.tipo}
                        </h3>
                        <IonItemGroup>
                          <IonItem
                            className="component-dropdown__sku"
                            key={item.tipo}
                          >
                            <IonLabel position="floating">
                              Altura Gengival
                            </IonLabel>
                            <IonSelect value={size} placeholder="Selecione">
                              {item.opcoes.map((item) => (
                                <IonSelectOption
                                  key={item.sku}
                                  value={item.sku}
                                >
                                  {item.alturaGengival}
                                </IonSelectOption>
                              ))}
                            </IonSelect>
                          </IonItem>

                          <IonItem
                            className="component-dropdown__quantity"
                            key={item.tipo}
                          >
                            <IonLabel position="stacked">Quantidade</IonLabel>
                            <IonInput
                              type="number"
                              value={number}
                              placeholder="0"
                              onIonChange={(e) =>
                                setNumber(parseInt(e.detail.value!, 10))
                              }
                            ></IonInput>
                          </IonItem>
                        </IonItemGroup>
                      </>
                    )
                )}

              {item.caracteristicas.length > 0 &&
                item.caracteristicas.map(
                  (item) =>
                    item.tipo === "Rotacional" && (
                      <IonItemGroup>
                        <IonItem
                          className="component-dropdown__sku"
                          key={item.tipo}
                        >
                          <IonLabel position="floating">{item.tipo}</IonLabel>
                          <IonSelect value={size} placeholder="Selecione">
                            {item.opcoes.map((item) => (
                              <IonSelectOption key={item.sku} value={item.sku}>
                                {item.sku}
                              </IonSelectOption>
                            ))}
                          </IonSelect>
                        </IonItem>

                        <IonItem
                          className="component-dropdown__quantity"
                          key={item.tipo}
                        >
                          <IonLabel position="stacked">Quantidade</IonLabel>
                          <IonInput
                            type="number"
                            value={number}
                            placeholder="0"
                            onIonChange={(e) =>
                              setNumber(parseInt(e.detail.value!, 10))
                            }
                          ></IonInput>
                        </IonItem>
                      </IonItemGroup>
                    )
                )}

              {item.caracteristicas.length > 0 &&
                item.caracteristicas.map(
                  (item) =>
                    item.tipo === "Anti Rotacional" && (
                      <IonItemGroup>
                        <IonItem
                          className="component-dropdown__sku"
                          key={item.tipo}
                        >
                          <IonLabel position="floating">{item.tipo}</IonLabel>
                          <IonSelect value={size} placeholder="Selecione">
                            {item.opcoes.map((item) => (
                              <IonSelectOption key={item.sku} value={item.sku}>
                                {item.sku}
                              </IonSelectOption>
                            ))}
                          </IonSelect>
                        </IonItem>

                        <IonItem
                          className="component-dropdown__quantity"
                          key={item.tipo}
                        >
                          <IonLabel position="stacked">Quantidade</IonLabel>
                          <IonInput
                            type="number"
                            value={number}
                            placeholder="0"
                            onIonChange={(e) =>
                              setNumber(parseInt(e.detail.value!, 10))
                            }
                          ></IonInput>
                        </IonItem>
                      </IonItemGroup>
                    )
                )}
            </div>
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
            <IonCol className="ion-no-padding" size="2">
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
                      <IonCol className="ion-no-padding" size="2">
                        {item.dente}
                      </IonCol>
                      <IonCol className="ion-no-padding" size="2">
                        {item.familia}
                      </IonCol>
                      <IonCol className="ion-no-padding">
                        <IonButton
                          color="dark"
                          onClick={() => onToothSelectComponents(item.familia)}
                        >
                          Selecionar
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    {item.familia === newSmp && (
                      <IonRow className="table-row">
                        <IonCol className="ion-no-padding hg">
                          <div className="component-content">{content}</div>
                        </IonCol>
                      </IonRow>
                    )}
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
