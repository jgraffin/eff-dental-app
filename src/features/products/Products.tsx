import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import { AllProducts, FamilySpecification } from "./Styles";
import { getMemoizedNumItems } from "../cart/CartSlice";
import { getProducts } from "../../app/api";
import { receivedProducts } from "./ProductsSlice";
import { selectAllItems, TeethType } from "../teeth/teethSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { WrapperComponents } from "../../styles/App";

import Produtos from "../../components/Produtos";
import Header from "../../components/Header";

const Products = () => {
  const numItems = useAppSelector<string>(getMemoizedNumItems);
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const store = useSelector(selectAllItems);

  const [fixacao, setFixacao] = useState("cimentado");
  const title = "Lista de componentes disponíveis";

  const onScrewToggle = () =>
    fixacao === "cimentado"
      ? setFixacao("parafusado")
      : setFixacao("cimentado");

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, [dispatch]);

  let filterProducts = (data: any, products: any) => {
    return data
      .filter((item: any) => {
        for (let obj in products) {
          if (products[obj] !== item[obj]) {
            return false;
          }
        }
        return true;
      }, products)
      .map((product: any) => (
        <Produtos
			key={product.id}
          	tipoConexao={product.tipoConexao}
          	id={product.id}
          	nome={product.nome}
          	imagem={product.imagem}
          	label={product.label}
          	posicao={product.posicao}
          	familia={product.familia}
          	acessorios={product.acessorios}
        />
      ));
  };

  return (
    <>
      <Header totalItems={Number(numItems)} titleHeader={title}></Header>

      <IonContent>
        <WrapperComponents>
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
                    interface="action-sheet"
                    cancelText="CANCELAR"
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
                  <IonRow className="table-row" key={item.id}>
                    <IonCol className="ion-no-padding" size="2">
                      <div className="table-row__tooth">
                        <h2>{item.dente}</h2>
                      </div>
                    </IonCol>

                    <IonCol className="ion-no-padding" size="8">
                      <input type="checkbox" className="input-toggle" />
                      <div className="table-row__item" id={item.id}>
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
                          {filterProducts(Object.values(products), {
                            posicao: item.posicao,
                            fixacao: fixacao,
                            uniaoImplante: item?.uniaoImplante,
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
