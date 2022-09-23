import { IonButton } from "@ionic/react";
import { useState } from "react";
import { addToCart, getSelectedValues } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

const Produtos = ({ tipoConexao, id, nome, imagem, label, acessorios }: any) => {
  const dispatch = useDispatch();
  const [sku, setSku] = useState("");
  const [successAdded, setSuccessAdded] = useState(false);

  function onAddingToCart() {
    console.log(id);
    dispatch(addToCart(id));
    dispatch(getSelectedValues(sku));
  }

  return (
    <div
      className={`form-product form-product--item ion-activatable ripple-parent ${acessorios ? "accessories" : ''}`}
    >
      <h2>{tipoConexao}</h2>
      <div className="form-product__wrapper">
        <div className="form-product__title">
          <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
          <div className="form-product__heading">
            <h3>{nome}</h3>
            {acessorios && (
              <h4>Acessório</h4>
            )}
            <p>{label}</p>
          </div>
        </div>

        <IonButton
          className="add-button"
          expand="block"
          shape="round"
          color={`${successAdded ? "primary" : "dark"}`}
          type="button"
          onClick={onAddingToCart}
        >
          <span>{successAdded ? "Adicionado!" : "Adicionar"}</span>
        </IonButton>
      </div>
    </div>
  );
};

export default Produtos;
