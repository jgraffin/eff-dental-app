import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";
import { LogoWrapper } from "../products/Styles";
import {
  checkoutCart,
  getMemoizedNumItems,
  removeFromCart,
  updateQuantity,
} from "./CartSlice";
import { CartList } from "./Styles";
import ShoppingCartIcon from "../../images/cart-outline.svg";
import Logo from "../../images/logo.png";

const Cart = () => {
  const dispatch = useAppDispatch();
  const numItems = useAppSelector<any>(getMemoizedNumItems);
  const products = useSelector((state: RootState) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  const checkoutState = useAppSelector((state) => state.cart.checkoutState);
  const errorMessage = useAppSelector((state) => state.cart.errorMessage);

  function onQuantityChanged(event: any, id: string) {
    const quantity = Number(event.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  }

  function onCheckout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(checkoutCart(items) as any);
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
              <li key={id} id={id}>
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
        <form onSubmit={onCheckout}>
          {checkoutState === "ERROR" && errorMessage ? (
            <p>{errorMessage}</p>
          ) : null}
          <IonButton
            className="button-save button-save--checkout"
            expand="block"
            shape="round"
            color="dark"
            type="submit"
          >
            Checkout
          </IonButton>
        </form>
      </IonFooter>
    </>
  );
};

export default Cart;
