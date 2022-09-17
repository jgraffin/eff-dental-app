import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { AllProducts, FamilySpecification, LogoWrapper } from "./Styles";
import { getMemoizedNumItems } from "../cart/CartSlice";
import { getProducts } from "../../app/api";
import { receivedProducts } from "./ProductsSlice";
import { RootState } from "../../app/store";
import { selectAllItems, TeethType } from "../teeth/teethSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { WrapperComponents } from "../../styles/App";

import Logo from "../../images/logo.png";
import Produtos from "../../components/Produtos";
import ShoppingCartIcon from "../../images/cart-outline.svg";

const Products = () => {
  const numItems = useAppSelector<string>(getMemoizedNumItems);
  const dispatch = useAppDispatch();
  const store = useSelector(selectAllItems);

  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const [fixacao, setFixacao] = useState("cimentado");

  const onScrewToggle = () =>
    fixacao === "cimentado"
      ? setFixacao("parafusado")
      : setFixacao("cimentado");

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.products);

  let filteredArray = (data: any, obj_filtro: any) => {
    return data
      .filter(function (item: any) {
        for (let obj in obj_filtro) {
          if (obj_filtro[obj] !== item[obj]) {
            return false;
          }
        }
        return true;
      }, obj_filtro)
      .map((product: any) => (
        <>
          <Produtos
            tipoConexao={product.tipoConexao}
            id={product.id}
            nome={product.nome}
            imagem={product.imagem}
            caracteristicas={product.caracteristicas}
            subitem={product.subitem}
            torque={product.torque}
            posicao={product.posicao}
          />
        </>
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
                    cancelText="Cancelar"
                    okText="Ok"
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

                    <IonCol className="ion-no-padding" size="8">
                      <input type="checkbox" className="input-toggle" />
                      <div className="table-row__item" id={item?.id}>
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
                          {filteredArray(Object.values(products), {
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
