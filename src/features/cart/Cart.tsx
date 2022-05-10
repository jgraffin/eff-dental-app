import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonContent,
  IonInput,
} from "@ionic/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { getMemoizedNumItems } from "./CartSlice";

const Cart = () => {
  let history = useHistory();
  const numItems = useAppSelector(getMemoizedNumItems);
  const products = useSelector((state: RootState) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);

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
          {Object.entries(items).map(([id, quantity]: any) => (
            <li>
              <strong>{products[id].nome}</strong>

              <br />

              <IonInput type="text" value={quantity}></IonInput>
            </li>
          ))}
        </ul>
      </IonContent>
    </>
  );
};

export default Cart;
