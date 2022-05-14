import {
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import { addToCart, getSelectedValues } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";
import { SuccessAdded, WrapperButtonAddToCart } from "../styles/App";
import SuccessAddedImage from "../images/check-circle-outline.svg";

const Produtos = ({ tipoConexao, id, nome, caracteristicas }: any) => {
  const dispatch = useDispatch();
  const [sku, setSku] = useState("");
  const [successAdded, setSuccessAdded] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);

  function onAddingToCart() {
    dispatch(addToCart(id));
    dispatch(getSelectedValues(sku));
    setSuccessAdded(true);

    setTimeout(() => {
      setHideMessage(true);

      setTimeout(() => {
        setSuccessAdded(false);
        setHideMessage(false);
      }, 500);
    }, 1800);
  }

  return (
    <>
      {successAdded && (
        <SuccessAdded className={`${hideMessage ? "hide-message" : ""}`}>
          <img src={SuccessAddedImage} alt="Adicionado ao carrinho!" />
          <p>Item adicionado!</p>
        </SuccessAdded>
      )}

      {tipoConexao === "" && (
        <div key={id} className="form-product">
          <h3>{nome}</h3>
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
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                Adicionar {sku}
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "rotacionalAntiRotacional" && (
        <div key={id} className="form-product">
          <h3>{nome}</h3>
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
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                Adicionar {sku}
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "perfilRetoOuDivergente" && (
        <div key={id} className="form-product">
          <h3>{nome}</h3>
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
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                Adicionar {sku}
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {sku && <div className="backdrop" onClick={() => setSku("")}></div>}
      {successAdded && (
        <div className="backdrop" onClick={() => setSku("")}></div>
      )}
    </>
  );
};

export default Produtos;
