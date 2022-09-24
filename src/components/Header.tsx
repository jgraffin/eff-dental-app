import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { LogoWrapper } from "../features/products/Styles";

import Logo from "../images/logo.png";
import ShoppingCartIcon from "../images/cart-outline.svg";

const Header = (props: { totalItems: number; titleHeader: string }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons className="header-actions">
          <IonBackButton defaultHref="/" />
          <LogoWrapper>
            <img src={Logo} alt="Eff Dental" />
          </LogoWrapper>

          <Link
            className={`header-actions-cart ${
              props.totalItems === 0 ? "disabled" : ""
            }`}
            to={{
              pathname: `/cart`,
            }}
          >
            <img src={ShoppingCartIcon} alt="Cart Shopping" />
            {props.totalItems ? <span>{props.totalItems}</span> : ""}
          </Link>
        </IonButtons>
      </IonToolbar>
      <IonToolbar>
        <IonTitle>{props.titleHeader}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
