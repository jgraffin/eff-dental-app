import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonContent,
  IonInput,
  IonBackButton,
  IonButtons,
  IonTitle,
} from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";
import { LogoWrapper } from "../products/Styles";
import {
  getMemoizedNumItems,
  removeFromCart,
  updateQuantity,
} from "./CartSlice";
import ShoppingCartIcon from "../../images/cart-outline.svg";
import Logo from "../../images/logo.png";

const Cart = () => {
  let history = useHistory();
  const dispatch = useAppDispatch();
  const numItems = useAppSelector<any>(getMemoizedNumItems);
  const products = useSelector((state: RootState) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);

  function onQuantityChanged(event: any, id: string) {
    const quantity = Number(event.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons className="header-actions">
            <IonBackButton defaultHref="/" />
            <LogoWrapper>
              <img src={Logo} alt="Eff Dental" />
            </LogoWrapper>

            <Link
              className={`header-actions-cart ${
                Number(numItems) === 0 ? "disabled" : ""
              }`}
              to={{
                pathname: `/cart`,
              }}
            >
              <img src={ShoppingCartIcon} alt="Cart Shopping" />
              {numItems ? <span>{numItems}</span> : ""}
            </Link>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>
            Produtos adicionados ao
            <br />
            carrinho de compras
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Shopping Cart</h2>
        <ul>
          {Object.entries(items).map(([id, quantity]: any) => (
            <li>
              <strong>Nome: {products[id].nome}</strong>

              <br />

              <IonInput
                type="number"
                onIonBlur={(event) => onQuantityChanged(event, id)}
                value={quantity}
              ></IonInput>
              <IonButton onClick={() => dispatch(removeFromCart(id))}>
                X
              </IonButton>
            </li>
          ))}
        </ul>
      </IonContent>
    </>
  );
};

export default Cart;
