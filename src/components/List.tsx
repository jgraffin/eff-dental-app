import {
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
  IonToggle,
} from "@ionic/react";
import { useState, useEffect } from "react";
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

  const [cimentado, setCimentado] = useState(false);

  const onScrewToggle = () => {
    if (cimentado) {
      setCimentado(false);
    } else {
      setCimentado(true);
    }
  };

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <IonContent>
      <IonButton onClick={history.goBack}>Voltar</IonButton>
      <WrapperComponents>
        {postStatus === "loading" && (
          <IonSpinner className="loading" name="crescent" color="primary" />
        )}

        <IonGrid>
          <IonRow className="table-head">
            <IonCol className="ion-no-padding" size="2">
              Dente
            </IonCol>
            <IonCol className="ion-no-padding" size="2">
              Família
            </IonCol>
            <IonCol className="ion-no-padding">
              <div className="filter-button">
                <IonLabel color={cimentado ? "dark" : "light"}>
                  {cimentado ? "cimentado" : "parafusado"}
                </IonLabel>
                <IonToggle
                  color="dark"
                  value={cimentado ? "cimentado" : "parafusado"}
                  onIonChange={onScrewToggle}
                />
              </div>
            </IonCol>
          </IonRow>

          {postStatus === "succeeded" &&
            data.map((item: TeethType) => (
              <>
                {item.selecionado && (
                  <>
                    <IonRow className="table-row" key={item.id}>
                      <IonCol className="ion-no-padding" size="2">
                        {item.dente}
                      </IonCol>
                      <IonCol className="ion-no-padding" size="2">
                        {item.familia}
                      </IonCol>
                      <IonCol className="ion-no-padding">
                        <IonButton color="dark">Selecionar</IonButton>
                      </IonCol>
                    </IonRow>

                    {item.posicao
                      ? SistemaMultiplataforma.filter(
                          (val) => val.familia === item.familia ?? true
                        ).map((item: SmpType) => (
                          <IonRow className="table-row">
                            <IonCol className="ion-no-padding">
                              <div className="component-content">
                                <div className="component-content__container">
                                  <div className="component-dropdown">
                                    {item.componentes
                                      .filter(
                                        (val) =>
                                          val.cimentado === cimentado ?? true
                                      )
                                      .map((item) => (
                                        <div className="component-dropdown__fields">
                                          <div className="component-dropdown__wrapper__product">
                                            <div>
                                              <div className="component-dropdown__image">
                                                <img
                                                  src={`./assets/images/proteses/${item.nome}.png`}
                                                  alt={item.nome}
                                                />
                                              </div>
                                              <div>
                                                <h2>{item.nome}</h2>
                                              </div>
                                            </div>
                                            <div className="component-dropdown__name">
                                              {item.caracteristicas.map(
                                                (item) =>
                                                  item.tipo === "SKU" && (
                                                    <IonItemGroup>
                                                      <IonItem
                                                        className="component-dropdown__sku"
                                                        key={item.id}
                                                      >
                                                        <IonLabel position="floating">
                                                          {item.tipo}
                                                        </IonLabel>
                                                        <IonSelect
                                                          value="0"
                                                          placeholder="Selecione"
                                                        >
                                                          {item.opcoes.map(
                                                            (item) => (
                                                              <IonSelectOption
                                                                key={item.sku}
                                                                value={item.sku}
                                                              >
                                                                {item.sku}
                                                              </IonSelectOption>
                                                            )
                                                          )}
                                                        </IonSelect>
                                                      </IonItem>

                                                      <IonItem className="component-dropdown__quantity">
                                                        <IonLabel position="stacked">
                                                          Quantidade
                                                        </IonLabel>
                                                        <IonInput
                                                          type="number"
                                                          value="0"
                                                          placeholder="0"
                                                        ></IonInput>
                                                      </IonItem>
                                                    </IonItemGroup>
                                                  )
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      ))}

                                    {/* {item.caracteristicas.map(
                                        (item) =>
                                          item.tipo === "SKU" && (
                                            <>
                                              <IonItemGroup>
                                                <IonItem
                                                  className="component-dropdown__sku"
                                                  key={item.id}
                                                >
                                                  <IonLabel position="floating">
                                                    {item.tipo}
                                                  </IonLabel>
                                                  <IonSelect
                                                    value={size}
                                                    placeholder="Selecione"
                                                  >
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

                                                <IonItem className="component-dropdown__quantity">
                                                  <IonLabel position="stacked">
                                                    Quantidade
                                                  </IonLabel>
                                                  <IonInput
                                                    type="number"
                                                    value={number}
                                                    placeholder="0"
                                                    onIonChange={(e) =>
                                                      setNumber(
                                                        parseInt(e.detail.value!, 10)
                                                      )
                                                    }
                                                  ></IonInput>
                                                </IonItem>
                                              </IonItemGroup>
                                            </>
                                          )
                                      )} */}

                                    {/* {item.caracteristicas.length > 0 &&
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
                                                key={item.id}
                                              >
                                                <IonLabel position="floating">
                                                  SKU
                                                </IonLabel>
                                                <IonSelect
                                                  value={size}
                                                  placeholder="Selecione"
                                                >
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

                                              <IonItem className="component-dropdown__quantity">
                                                <IonLabel position="stacked">
                                                  Quantidade
                                                </IonLabel>
                                                <IonInput
                                                  type="number"
                                                  value={number}
                                                  placeholder="0"
                                                  onIonChange={(e) =>
                                                    setNumber(
                                                      parseInt(e.detail.value!, 10)
                                                    )
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
                                                key={item.id}
                                              >
                                                <IonLabel position="floating">
                                                  SKU
                                                </IonLabel>
                                                <IonSelect
                                                  value={size}
                                                  placeholder="Selecione"
                                                >
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

                                              <IonItem className="component-dropdown__quantity">
                                                <IonLabel position="stacked">
                                                  Quantidade
                                                </IonLabel>
                                                <IonInput
                                                  type="number"
                                                  value={number}
                                                  placeholder="0"
                                                  onIonChange={(e) =>
                                                    setNumber(
                                                      parseInt(e.detail.value!, 10)
                                                    )
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
                                              key={item.id}
                                            >
                                              <IonLabel position="floating">
                                                {item.tipo}
                                              </IonLabel>
                                              <IonSelect
                                                value={size}
                                                placeholder="Selecione"
                                              >
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

                                            <IonItem className="component-dropdown__quantity">
                                              <IonLabel position="stacked">
                                                Quantidade
                                              </IonLabel>
                                              <IonInput
                                                type="number"
                                                value={number}
                                                placeholder="0"
                                                onIonChange={(e) =>
                                                  setNumber(
                                                    parseInt(e.detail.value!, 10)
                                                  )
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
                                              key={item.id}
                                            >
                                              <IonLabel position="floating">
                                                {item.tipo}
                                              </IonLabel>
                                              <IonSelect
                                                value={size}
                                                placeholder="Selecione"
                                              >
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

                                            <IonItem className="component-dropdown__quantity">
                                              <IonLabel position="stacked">
                                                Quantidade
                                              </IonLabel>
                                              <IonInput
                                                type="number"
                                                value={number}
                                                placeholder="0"
                                                onIonChange={(e) =>
                                                  setNumber(
                                                    parseInt(e.detail.value!, 10)
                                                  )
                                                }
                                              ></IonInput>
                                            </IonItem>
                                          </IonItemGroup>
                                        )
                                    )} */}
                                  </div>
                                </div>
                              </div>
                            </IonCol>
                          </IonRow>
                        ))
                      : SistemaMultiplataforma.filter(
                          (val) => val.familia === item.familia ?? true
                        ).map((item: SmpType) => (
                          <IonRow className="table-row">
                            <IonCol className="ion-no-padding">
                              <div className="component-content">
                                <div className="component-content__container">
                                  <div className="component-dropdown">
                                    {item.componentes
                                      .filter(
                                        (val) =>
                                          val.cimentado === cimentado ?? true
                                      )
                                      .map((item) => (
                                        <div
                                          className="component-dropdown__fields"
                                          key={item.id}
                                        >
                                          <div className="component-dropdown__wrapper__product">
                                            <div>
                                              <div className="component-dropdown__image">
                                                <img
                                                  src={`./assets/images/proteses/${item.nome}.png`}
                                                  alt={item.nome}
                                                />
                                              </div>
                                              <div>
                                                <h2>{item.nome}</h2>
                                              </div>
                                            </div>
                                            <div className="component-dropdown__name">
                                              {item.caracteristicas.map(
                                                (item) =>
                                                  item.tipo === "SKU" && (
                                                    <IonItemGroup>
                                                      <IonItem
                                                        className="component-dropdown__sku"
                                                        key={item.id}
                                                      >
                                                        <IonLabel position="floating">
                                                          {item.tipo}
                                                        </IonLabel>
                                                        <IonSelect
                                                          value="0"
                                                          placeholder="Selecione"
                                                        >
                                                          {item.opcoes.map(
                                                            (item) => (
                                                              <IonSelectOption
                                                                key={item.sku}
                                                                value={item.sku}
                                                              >
                                                                {item.sku}
                                                              </IonSelectOption>
                                                            )
                                                          )}
                                                        </IonSelect>
                                                      </IonItem>

                                                      <IonItem className="component-dropdown__quantity">
                                                        <IonLabel position="stacked">
                                                          Quantidade
                                                        </IonLabel>
                                                        <IonInput
                                                          type="number"
                                                          value="0"
                                                          placeholder="0"
                                                        ></IonInput>
                                                      </IonItem>
                                                    </IonItemGroup>
                                                  )
                                              )}

                                              {item.caracteristicas.map(
                                                (item) =>
                                                  item.tipo ===
                                                    "Perfil Reto Ø3.50mm" && (
                                                    <IonItemGroup>
                                                      <IonItem
                                                        className="component-dropdown__sku"
                                                        key={item.id}
                                                      >
                                                        <IonLabel position="floating">
                                                          SKU
                                                        </IonLabel>
                                                        <IonSelect
                                                          value="0"
                                                          placeholder="Selecione"
                                                        >
                                                          {item.opcoes.map(
                                                            (item) => (
                                                              <IonSelectOption
                                                                key={item.sku}
                                                                value={item.sku}
                                                              >
                                                                {item.sku}
                                                              </IonSelectOption>
                                                            )
                                                          )}
                                                        </IonSelect>
                                                      </IonItem>

                                                      <IonItem className="component-dropdown__quantity">
                                                        <IonLabel position="stacked">
                                                          Quantidade
                                                        </IonLabel>
                                                        <IonInput
                                                          type="number"
                                                          value="0"
                                                          placeholder="0"
                                                        ></IonInput>
                                                      </IonItem>
                                                    </IonItemGroup>
                                                  )
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      ))}

                                    {/* {item.caracteristicas.length > 0 &&
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
                                                key={item.id}
                                              >
                                                <IonLabel position="floating">
                                                  SKU
                                                </IonLabel>
                                                <IonSelect
                                                  value={size}
                                                  placeholder="Selecione"
                                                >
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

                                              <IonItem className="component-dropdown__quantity">
                                                <IonLabel position="stacked">
                                                  Quantidade
                                                </IonLabel>
                                                <IonInput
                                                  type="number"
                                                  value={number}
                                                  placeholder="0"
                                                  onIonChange={(e) =>
                                                    setNumber(
                                                      parseInt(e.detail.value!, 10)
                                                    )
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
                                                key={item.id}
                                              >
                                                <IonLabel position="floating">
                                                  SKU
                                                </IonLabel>
                                                <IonSelect
                                                  value={size}
                                                  placeholder="Selecione"
                                                >
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

                                              <IonItem className="component-dropdown__quantity">
                                                <IonLabel position="stacked">
                                                  Quantidade
                                                </IonLabel>
                                                <IonInput
                                                  type="number"
                                                  value={number}
                                                  placeholder="0"
                                                  onIonChange={(e) =>
                                                    setNumber(
                                                      parseInt(e.detail.value!, 10)
                                                    )
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
                                              key={item.id}
                                            >
                                              <IonLabel position="floating">
                                                {item.tipo}
                                              </IonLabel>
                                              <IonSelect
                                                value={size}
                                                placeholder="Selecione"
                                              >
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

                                            <IonItem className="component-dropdown__quantity">
                                              <IonLabel position="stacked">
                                                Quantidade
                                              </IonLabel>
                                              <IonInput
                                                type="number"
                                                value={number}
                                                placeholder="0"
                                                onIonChange={(e) =>
                                                  setNumber(
                                                    parseInt(e.detail.value!, 10)
                                                  )
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
                                              key={item.id}
                                            >
                                              <IonLabel position="floating">
                                                {item.tipo}
                                              </IonLabel>
                                              <IonSelect
                                                value={size}
                                                placeholder="Selecione"
                                              >
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

                                            <IonItem className="component-dropdown__quantity">
                                              <IonLabel position="stacked">
                                                Quantidade
                                              </IonLabel>
                                              <IonInput
                                                type="number"
                                                value={number}
                                                placeholder="0"
                                                onIonChange={(e) =>
                                                  setNumber(
                                                    parseInt(e.detail.value!, 10)
                                                  )
                                                }
                                              ></IonInput>
                                            </IonItem>
                                          </IonItemGroup>
                                        )
                                    )} */}
                                  </div>
                                </div>
                              </div>
                            </IonCol>
                          </IonRow>
                        ))}
                  </>
                )}
              </>
            ))}
        </IonGrid>

        {postStatus === "error" && error}
      </WrapperComponents>
    </IonContent>
  );
};

export default List;
