import {
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";
import { ISmp } from "../mock/manualSpecifications";
import Input from "./forms/Input";
import { addToCart, getSelectedValues } from "../features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import { mdiCart } from "@mdi/js";
import { SuccessAdded, WrapperButtonAddToCart } from "../styles/App";

const Produtos = ({ tipoConexao, id, nome, caracteristicas }: any) => {
  const dispatch = useDispatch();
  const [sku, setSku] = useState("");
  const [successAdded, setSuccessAdded] = useState(false);

  useEffect(() => {
    console.log(sku);
  }, [sku]);

  function onAddingToCart() {
    dispatch(addToCart(id));
    dispatch(getSelectedValues(sku));
    setSku("");
    setSuccessAdded(true);

    setTimeout(() => {
      setSuccessAdded(false);
    }, 1500);
  }

  return (
    <>
      {successAdded && (
        <SuccessAdded>
          <p>Item adicionado!</p>
        </SuccessAdded>
      )}

      {tipoConexao === "" && (
        <div
          key={id}
          style={{
            background: "#dadada",
            marginBottom: "4px",
            borderRadius: "6px",
            padding: "20px",
            width: "240px",
          }}
        >
          <strong>{nome}</strong>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              <IonItem>
                <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                <IonSelect
                  value={sku}
                  cancelText="Cancelar"
                  okText="Ok"
                  placeholder="Selecione"
                  onIonChange={(event) => setSku(event.detail.value)}
                >
                  {item.opcoes.map((item: any) => (
                    <IonSelectOption key={item.value} value={item.value}>
                      {item.value}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            </div>
          ))}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton className="add-button" onClick={onAddingToCart}>
                Adicionar {sku}
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "rotacionalAntiRotacional" && (
        <div
          key={id}
          style={{
            background: "#dadada",
            marginBottom: "4px",
            borderRadius: "6px",
            padding: "20px",
            width: "240px",
          }}
        >
          <strong>{nome}</strong>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              {item.tipoConexao === "Anti Rotacional" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Rotacional" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton className="add-button" onClick={onAddingToCart}>
                Adicionar {sku}
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "perfilRetoOuDivergente" && (
        <div
          key={id}
          style={{
            background: "#dadada",
            marginBottom: "4px",
            borderRadius: "6px",
            padding: "20px",
            width: "240px",
          }}
        >
          <strong>{nome}</strong>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              {item.tipoConexao === "Perfil Reto Ø3.50mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Perfil Divergente Ø5.0mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton className="add-button" onClick={onAddingToCart}>
                Adicionar {sku}
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}
    </>
  );
};

export default Produtos;
