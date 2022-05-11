import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonContent,
  IonInput,
} from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  getMemoizedNumItems,
  removeFromCart,
  updateQuantity,
} from "./CartSlice";

const Cart = () => {
  let history = useHistory();
  const dispatch = useAppDispatch();
  const numItems = useAppSelector(getMemoizedNumItems);
  const products = useSelector((state: RootState) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);

  function onQuantityChanged(event: any, id: string) {
    const quantity = Number(event.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  }

  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButton onClick={history.goBack}>Voltar</IonButton>
          <div>🛒 {numItems ? numItems : "Cart"}</div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Shopping Cart</h2>
        <ul>
          {Object.entries(items).map(([id, quantity, value]: any) => (
            <li>
              <strong>{products[id].nome}</strong>

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
