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
  IonSelect,
  IonSelectOption,
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
import { AllProducts, FamilySpecification, LogoWrapper } from "./Styles";

import ShoppingCartIcon from "../../images/cart-outline.svg";
import Logo from "../../images/logo.png";
import Produtos from "../../components/Produtos";
import { Catalogos } from "../../mock/manualSpecifications";

const Products = () => {
  const numItems = useAppSelector<string>(getMemoizedNumItems);
  const dispatch = useAppDispatch();
  const store = useSelector(selectAllItems);

  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const [fixacao, setFixacao] = useState("cimentado");
  const [posicao, setPosicao] = useState("favoravel");

  const hasComponentRef = useRef<any>(null);
  const [hasUndefinedValue, setHasUndefinedValue] = useState(false);

  const onScrewToggle = () =>
    fixacao === "cimentado"
      ? setFixacao("parafusado")
      : setFixacao("cimentado");

  const onPositionToggle = () => {
    if (posicao === "favoravel") {
      setPosicao("desfavoravel");
    } else {
      setPosicao("favoravel");
    }
  };

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.products);

  let array_filtrado = function filtrarArray(ar_dados: any, obj_filtro: any) {
    return ar_dados
      .filter(function (item: any) {
        for (let obj in obj_filtro) {
          if (obj_filtro[obj] !== item[obj]) {
            return false;
          }
        }
        return true;
      })
      .map((product: any) => (
        <Produtos
          tipoConexao={product.tipoConexao}
          key={product.id}
          id={product.id}
          nome={product.nome}
          imagem={product.imagem}
          caracteristicas={product.caracteristicas}
          subitem={product.subitem}
          torque={product.torque}
          posicao={product.posicao}
        />
      ));
  };

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
              <IonCol className="ion-no-padding" size="2">
                Nº
              </IonCol>
              <IonCol className="ion-no-padding" size="8">
                Família
                <div className="filter-button">
                  <IonSelect
                    value={fixacao}
                    placeholder={fixacao}
                    onIonChange={onScrewToggle}
                  >
                    <IonSelectOption value="cimentado">
                      Cimentado
                    </IonSelectOption>
                    <IonSelectOption value="parafusado">
                      Parafusado
                    </IonSelectOption>
                  </IonSelect>
                </div>
              </IonCol>
            </IonRow>

            {store.map(
              (item: TeethType) =>
                item.selecionado && (
                  <IonRow className="table-row" key={item?.id}>
                    <IonCol className="ion-no-padding" size="2">
                      <div className="table-row__tooth">
                        <h2>{item.dente}</h2>
                      </div>
                    </IonCol>
                    <IonCol className="ion-no-padding" size="2">
                      <div>
                        <FamilySpecification>
                          <h2>{item?.familia}</h2>
                          <span className="table-row__union-type">
                            {item?.uniaoImplante === "multiplo"
                              ? "Múltiplo"
                              : "Unitário"}
                          </span>
                          <span className="table-row__union-type">
                            {item?.posicao === "favoravel"
                              ? "Favorável"
                              : "Desfavorável"}
                          </span>
                        </FamilySpecification>
                        <AllProducts>
                          {array_filtrado(Object.values(products), {
                            posicao: item.posicao,
                            fixacao: fixacao,
                            uniaoImplante: item?.uniaoImplante,
                            adicionais: true,
                            familia: item?.familia,
                          })}
                        </AllProducts>
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
