import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonRow,
  IonSpinner,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getProducts } from "../../app/api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import store, { RootState } from "../../app/store";
import Produtos from "../../components/Produtos";
import { Smp } from "../../mock/manualSpecifications";
import { WrapperComponents } from "../../styles/App";
import { addToCart, getMemoizedNumItems } from "../cart/CartSlice";
import { selectAllItems, TeethType } from "../teeth/teethSlice";
import { receivedProducts } from "./ProductsSlice";

const Products = () => {
  let history = useHistory();
  const numItems = useAppSelector(getMemoizedNumItems);
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
  console.log(products);

  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButton onClick={history.goBack}>Voltar</IonButton>
          <Link
            style={{ position: "absolute", right: "0", margin: "1rem" }}
            to={{
              pathname: `/cart`,
            }}
          >
            🛒 {numItems ? numItems : "Cart"}
          </Link>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Products</h2>

        <WrapperComponents>
          {postStatus === "loading" && (
            <IonSpinner className="loading" name="crescent" color="primary" />
          )}

          <IonGrid>
            <IonRow className="table-head">
              <IonCol className="ion-no-padding" size="2">
                Dente
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
                      <IonCol className="ion-no-padding" size="2">
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
                              .map(
                                (itemLevel2: any) =>
                                  itemLevel2.tipoConexao === "" && (
                                    <div
                                      key={itemLevel2.id}
                                      style={{
                                        background: "#dadada",
                                        marginBottom: "4px",
                                      }}
                                    >
                                      <strong>{itemLevel2.nome}</strong>
                                      <br />
                                      <strong>
                                        Familia = {itemLevel2.familia}
                                      </strong>

                                      <h4>CARACTERISTICAS</h4>
                                      {itemLevel2.caracteristicas.map(
                                        (itemLevel3: any) =>
                                          itemLevel3.opcoes.map(
                                            (itemLevel4: any) => (
                                              <p>{itemLevel4.sku}</p>
                                            )
                                          )
                                      )}

                                      <IonButton
                                        onClick={() =>
                                          dispatch(addToCart(itemLevel2.id))
                                        }
                                      >
                                        Add to Cart
                                      </IonButton>
                                    </div>
                                  )
                              )}
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
