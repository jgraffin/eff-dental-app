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
import React, { useRef } from "react";
import { Form } from "@unform/web";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../app/store";
import {
  selectAllItems,
  fetchPosts,
  TeethType,
} from "../features/teeth/teethSlice";
import { Smp, ISmp } from "../mock/manualSpecifications";
import { WrapperComponents } from "../styles/App";
import Fields from "./forms/fields";
import Input from "./forms/Input";
import { Scope } from "@unform/core";
import Produtos from "./Produtos";

const List = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector(selectAllItems);
  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const error = useSelector((state: RootState) => state.teeth.error);
  const formRef = useRef<any>(null);
  const denteRef = useRef<any>(null);
  const [cimentado, setCimentado] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  const onScrewToggle = () => {
    if (cimentado) {
      setCimentado(false);
    } else {
      setCimentado(true);
    }
  };

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }

    setCurrentItem(denteRef.current.id);
  }, [postStatus, dispatch]);

  return (
    <IonContent>
      <IonButton onClick={history.goBack}>Voltar</IonButton>

      <Form ref={formRef} onSubmit={handleFormSubmit}>
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
              store
                .filter(
                  (item: TeethType) =>
                    (item.selecionado && item.marca !== "") ?? true
                )
                .map((item: any) => (
                  <Scope path={item.dente} key={item.dente}>
                    <IonRow
                      className="table-row"
                      ref={denteRef}
                      key={item.dente}
                      id={item.dente}
                    >
                      <IonCol className="ion-no-padding" size="2">
                        <div>
                          <h2>{item.dente}</h2>
                        </div>
                      </IonCol>
                      <IonCol className="ion-no-padding" size="2">
                        <div>
                          <h2>{item.familia}</h2>
                          <strong>Componentes</strong>
                          <ul>
                            {Smp.filter(
                              (val) => val.familia === item.familia ?? true
                            ).map((item) => (
                              <Produtos
                                key={item.id}
                                id={currentItem}
                                componentes={item.componentes}
                              />
                            ))}
                          </ul>
                        </div>
                        <div>
                          <IonButton color="dark">Selecionar</IonButton>
                        </div>
                      </IonCol>
                    </IonRow>
                  </Scope>
                ))}
          </IonGrid>

          {postStatus === "error" && error}
        </WrapperComponents>
        <IonButton type="submit">submit</IonButton>
      </Form>
    </IonContent>
  );
};

export default List;
