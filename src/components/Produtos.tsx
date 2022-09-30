import { IonButton } from "@ionic/react";
import { useState } from "react";
import { addToCart } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

const Produtos = ({ connection, id, name, image, label, accessorie }: any) => {
	const dispatch = useDispatch();
	const [successAdded, setSuccessAdded] = useState(false);

  function onAddingToCart() {
	dispatch(addToCart(id));
	setSuccessAdded(true);
	setTimeout(() => {
	  setSuccessAdded(false);
	}, 600);
  }

  return (
	<div
	  className={`form-product form-product--item ion-activatable ripple-parent ${
		accessorie ? "accessories" : ""
	  }`}
	  key={id}
	>
	  <h2>{connection}</h2>
	  <div className="form-product__wrapper">
		<div className="form-product__title">
		  <img src={`../assets/images/proteses/${image}.png`} alt={name} />
		  <div className="form-product__heading">
			<h3>{name}</h3>
			{accessorie && <h4>Acessório</h4>}
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
