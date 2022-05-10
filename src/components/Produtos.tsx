import {
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { ISmp } from "../mock/manualSpecifications";
import Input from "./forms/Input";
import { addToCart } from "../features/cart/CartSlice";
import { useAppDispatch } from "../app/hooks";

const Produtos = ({ id, componentes }: ISmp) => {
  const dispatch = useAppDispatch();
  console.log(componentes, id);

  const handleChange = (event: any) => {
    console.log(event);
  };

  return (
    <>
      {componentes.map(
        (item) =>
          item.tipoConexao === "rotacionalAntiRotacional" && (
            <div key={item.id} id={item.id}>
              <div>
                <img
                  src={`/assets/images/proteses/${item.imagem}.png`}
                  alt=""
                />
                <p>{item.nome}</p>
              </div>
              <div>
                <ReactSelect
                  className="select-action"
                  onChange={() => handleChange(item.slug)}
                  options={item.caracteristicas.map((item) => item.opcoes)}
                  key={`altura-${item.slug}`}
                />
                {item.caracteristicas.map((item) =>
                  item.opcoes.map((item: any) => (
                    <IonItem>
                      <IonButton onClick={() => dispatch(addToCart(item.id))}>
                        Add to Cart
                      </IonButton>
                    </IonItem>
                  ))
                )}
              </div>
            </div>
          )
      )}

      {componentes.map(
        (item) =>
          item.tipoConexao === "perfilRetoDivergente" && (
            <div key={item.id}>
              <div>
                <img
                  src={`/assets/images/proteses/${item.imagem}.png`}
                  alt=""
                />
                <p>{item.nome}</p>
              </div>
              <div>
                {item.caracteristicas.map((item) => (
                  <div key={item.id}>
                    {item.tipoConexao === "Perfil Reto Ø3.50mm" ? (
                      <div>
                        <p>
                          <strong>Perfil Reto</strong>
                        </p>
                        <ReactSelect
                          className="select-action"
                          onChange={() => handleChange(item.id)}
                          options={item.opcoes}
                          key={`altura-${item.id}`}
                        />
                        <IonItem>
                          <IonButton
                            onClick={() => dispatch(addToCart(item.id))}
                          >
                            Add to Cart
                          </IonButton>
                        </IonItem>
                      </div>
                    ) : (
                      <div>
                        <p>
                          <strong>Perfil Divergente</strong>
                        </p>
                        <ReactSelect
                          className="select-action"
                          onChange={() => handleChange(item.id)}
                          options={item.opcoes}
                          key={`altura-${item.id}`}
                        />
                        <IonItem>
                          <IonButton
                            onClick={() => dispatch(addToCart(item.id))}
                          >
                            Add to Cart
                          </IonButton>
                        </IonItem>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
      )}

      {componentes.map(
        (item) =>
          item.tipoConexao === "rotacionalAntiRotacional" && (
            <div key={item.id}>
              testeeeeee
              <div>
                <img
                  src={`/assets/images/proteses/${item.imagem}.png`}
                  alt=""
                />
                <p>{item.nome}</p>
              </div>
              <div>
                {item.caracteristicas.map((item) => (
                  <div key={item.id}>
                    {item.tipoConexao === "Rotacional" ? (
                      <div>
                        <p>
                          <strong>Rotacional</strong>
                        </p>
                        <ReactSelect
                          className="select-action"
                          onChange={() => handleChange(item.id)}
                          options={item.opcoes}
                          key={`altura-${item.id}`}
                        />
                        <IonItem>
                          <IonButton
                            onClick={() => dispatch(addToCart(item.id))}
                          >
                            Add to Cart
                          </IonButton>
                        </IonItem>
                      </div>
                    ) : (
                      <div>
                        <p>
                          <strong>Anti Rotacional</strong>
                        </p>
                        <ReactSelect
                          className="select-action"
                          onChange={() => handleChange(item.id)}
                          options={item.opcoes}
                          key={`altura-${item.id}`}
                        />
                        <IonItem>
                          <IonButton
                            onClick={() => dispatch(addToCart(item.id))}
                          >
                            Add to Cart
                          </IonButton>
                        </IonItem>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {item.adicionais?.length && (
                <div>
                  {item.adicionais?.map((item) => (
                    <div key={item.sku}>
                      <h3>{item.tipoConexao}</h3>
                      <img src={item.imagem} alt="" />
                      <p>{item.sku}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
      )}
    </>
  );
};

export default Produtos;
