import {
  IonButton,
  IonItem,
  IonLabel,
  IonRippleEffect,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import { addToCart, getSelectedValues } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";
import { SuccessAdded, WrapperButtonAddToCart } from "../styles/App";
import SuccessAddedImage from "../images/check-circle-outline.svg";

const Produtos = ({
  posicao,
  tipoConexao,
  id,
  nome,
  imagem,
  caracteristicas,
  subitem,
  torque,
  opcoes,
  label,
}: any) => {
  const dispatch = useDispatch();
  const [sku, setSku] = useState("");
  const [successAdded, setSuccessAdded] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  function onAddingToCart() {
    console.log(id);
    dispatch(addToCart(id));
    dispatch(getSelectedValues(sku));
    setSuccessAdded(true);

    setTimeout(() => {
      setHideMessage(true);

      setTimeout(() => {
        setSuccessAdded(false);
        setHideMessage(false);
      }, 400);
    }, 1000);
  }

  return (
    <>
      {tipoConexao === "Rotacional" && (
        <div className="form-product form-product--item ion-activatable ripple-parent rotacional">
          <div className="form-product__wrapper">
            <div className="form-product__title">
              <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
              <div className="form-product__heading">
                <h3>{nome}</h3>
                <p>{label}</p>
              </div>
            </div>

            <IonButton
              className={`add-button ${successAdded ? 'added' : ''}`}
              expand="block"
              shape="round"
              color="dark"
              type="button"
              onClick={onAddingToCart}
            >
              <span>{successAdded ? 'Adicionado!' : 'Adicionar'}</span>
            </IonButton>
          </div>
        </div>
      )}

      {tipoConexao === "Anti Rotacional" && (
        <div className="form-product form-product--item ion-activatable ripple-parent anti-rotacional">
          <div className="form-product__wrapper">
            <div className="form-product__title">
              <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
              <div className="form-product__heading">
                <h3>{nome}</h3>
                <p>{label}</p>
              </div>
            </div>

            <IonButton
              className="add-button"
              expand="block"
              shape="round"
              color="dark"
              type="button"
              onClick={onAddingToCart}
            >
              <span>Adicionar</span>
            </IonButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Produtos;
