import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRippleEffect,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../app/api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { WrapperComponents } from "../../styles/App";
import { getMemoizedNumItems } from "../cart/CartSlice";
import { selectAllItems, TeethType } from "../teeth/teethSlice";
import { receivedProducts } from "./ProductsSlice";
import { LogoWrapper } from "./Styles";

import Cart from "../../images/cart-outline.svg";
import Logo from "../../images/logo.png";
import Produtos from "../../components/Produtos";

const Products = () => {
  const numItems = useAppSelector<string>(getMemoizedNumItems);
  const dispatch = useAppDispatch();
  const store = useSelector(selectAllItems);

  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const [cimentado, setCimentado] = useState(false);

  const onScrewToggle = () => {
    if (cimentado) {
      setCimentado(false);
    } else {
      setCimentado(true);
    }
  };

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.products);

  return (
    <>
      <IonHeader className="">
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
              <img src={Cart} alt="Cart Shopping" />
              {numItems ? <span>{numItems}</span> : ""}
            </Link>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>
            Selecione a(s) família(s) correspondente(s)
            <br />e escolha o componente desejado
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <WrapperComponents>
          {postStatus === "loading" && (
            <IonSpinner className="loading" name="crescent" color="primary" />
          )}

          <IonGrid>
            <IonRow className="table-head">
              <IonCol className="ion-no-padding" size="1">
                Nº
              </IonCol>
              <IonCol className="ion-no-padding" size="2">
                Família
                {/* <div className="filter-button">
                  <IonLabel color={cimentado ? "dark" : "light"}>
                    {cimentado ? "cimentado" : "parafusado"}
                  </IonLabel>
                  <IonToggle
                    color="dark"
                    value={cimentado ? "cimentado" : "parafusado"}
                    onIonChange={onScrewToggle}
                  />
                </div> */}
              </IonCol>
            </IonRow>

            {postStatus === "succeeded" &&
              store.map(
                (itemLevel1: TeethType) =>
                  itemLevel1.selecionado && (
                    <IonRow
                      className="table-row"
                      key={itemLevel1.dente}
                      id={itemLevel1.dente}
                    >
                      <IonCol className="ion-no-padding" size="1">
                        <div>
                          <h2>{itemLevel1.dente}</h2>
                        </div>
                      </IonCol>
                      <IonCol className="ion-no-padding" size="2">
                        <div>
                          <h2>{itemLevel1.familia}</h2>
                          <div>
                            {Object.values(products)
                              .filter(
                                (val: any) =>
                                  val.familia === itemLevel1.familia ?? true
                              )
                              .map((itemLevel2: any) => (
                                <Produtos
                                  tipoConexao={itemLevel2.tipoConexao}
                                  id={itemLevel2.id}
                                  nome={itemLevel2.nome}
                                  imagem={itemLevel2.imagem}
                                  caracteristicas={itemLevel2.caracteristicas}
                                  adicionais={itemLevel2.adicionais}
                                  torque={itemLevel2.torque}
                                />
                              ))}
                          </div>
                        </div>
                      </IonCol>
                    </IonRow>
                  )
              )}
          </IonGrid>
        </WrapperComponents>
      </IonContent>
    </>
  );
};

export default Products;
