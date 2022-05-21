import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonRippleEffect,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToggle,
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

import ShoppingCartIcon from "../../images/cart-outline.svg";
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
              <IonCol className="ion-no-padding" size="8">
                Família
                <div className="filter-button">
                  <strong>Cimentado?</strong>
                  <IonToggle
                    color="dark"
                    value={String(cimentado)}
                    checked={cimentado}
                    onIonChange={onScrewToggle}
                  />
                  <span className="toggle-text">
                    {cimentado ? "Sim" : "Não"}
                  </span>
                </div>
              </IonCol>
            </IonRow>

            {store.map(
              (itemLevel1: TeethType) =>
                itemLevel1?.selecionado && (
                  <IonRow className="table-row" key={itemLevel1?.id}>
                    <IonCol className="ion-no-padding" size="1">
                      <div>
                        <h2>{itemLevel1?.dente}</h2>
                      </div>
                    </IonCol>
                    <IonCol className="ion-no-padding" size="2">
                      <div>
                        <h2>
                          {itemLevel1?.familia}{" "}
                          <span className="table-row__union-type">
                            {itemLevel1?.uniaoImplante
                              ? "Múltiplo"
                              : "Unitário"}
                          </span>
                        </h2>
                        <div>
                          {Object.values(products).length > 0
                            ? Object.values(products).map(
                                (itemLevel2: any) =>
                                  itemLevel2.familia === itemLevel1?.familia &&
                                  itemLevel2.cimentado === cimentado && (
                                    <Produtos
                                      tipoConexao={itemLevel2.tipoConexao}
                                      key={itemLevel2.id}
                                      id={itemLevel2.id}
                                      nome={itemLevel2.nome}
                                      imagem={itemLevel2.imagem}
                                      caracteristicas={
                                        itemLevel2.caracteristicas
                                      }
                                      adicionais={itemLevel2.adicionais}
                                      torque={itemLevel2.torque}
                                      cimentado={itemLevel2.cimentado}
                                    />
                                  )
                              )
                            : "Nada aqui"}
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
