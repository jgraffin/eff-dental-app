import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonContent,
  IonInput,
  IonBackButton,
  IonButtons,
  IonTitle,
  IonFooter,
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
import { CartList } from "./Styles";

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
        <CartList>
          {Object.entries(items).length > 0 ? (
            Object.entries(items).map(([id, quantity]: any) => (
              <li>
                <div className="cart-list__image">
                  <img
                    src={`./assets/images/proteses/${products[id].imagem}.png`}
                    alt={products[id].nome}
                  />
                </div>
                <div className="cart-list__title">
                  <h2>{products[id].nome}</h2>
                </div>
                <div className="cart-list__field">
                  <IonInput
                    type="number"
                    onIonBlur={(event) => onQuantityChanged(event, id)}
                    value={quantity}
                  ></IonInput>
                  <IonButton
                    className="cart-list__field-delete"
                    onClick={() => dispatch(removeFromCart(id))}
                  ></IonButton>
                </div>
              </li>
            ))
          ) : (
            <li className="cart-list__empty">Seu carrinho está vazio</li>
          )}
        </CartList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonButton
          className="button-save"
          expand="block"
          shape="round"
          color="dark"
          type="button"
        >
          Checkout
        </IonButton>
      </IonFooter>
    </>
  );
};

export default Cart;
