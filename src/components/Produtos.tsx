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
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import { mdiCart } from "@mdi/js";

const Produtos = ({ tipoConexao, id, nome, caracteristicas }: any) => {
  const dispatch = useDispatch();
  const [semConexao, setSemConexao] = useState("");
  const [rotacionalAnti, setRotacionalAnti] = useState("");
  const [retoDivergente, setRetoDivergente] = useState("");

  return (
    <>
      {tipoConexao === "" && (
        <div
          key={id}
          style={{
            background: "#dadada",
            marginBottom: "4px",
            borderRadius: "6px",
            padding: "20px",
            width: "240px",
          }}
        >
          <strong>{nome}</strong>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              <IonItem>
                <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                <IonSelect
                  value={semConexao}
                  cancelText="Cancelar"
                  okText="Ok"
                  placeholder="Selecione"
                  onIonChange={(event) => setSemConexao(event.detail.value)}
                >
                  {item.opcoes.map((item: any) => (
                    <IonSelectOption key={item.value} value={item.value}>
                      {item.value}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            </div>
          ))}

          {semConexao && (
            <IonButton onClick={() => dispatch(addToCart(id))}>
              Adicionar {semConexao}
            </IonButton>
          )}
        </div>
      )}

      {tipoConexao === "rotacionalAntiRotacional" && (
        <div
          key={id}
          style={{
            background: "#dadada",
            marginBottom: "4px",
            borderRadius: "6px",
            padding: "20px",
            width: "240px",
          }}
        >
          <strong>{nome}</strong>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              {item.tipoConexao === "Anti Rotacional" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={rotacionalAnti}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) =>
                      setRotacionalAnti(event.detail.value)
                    }
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Rotacional" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={rotacionalAnti}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) =>
                      setRotacionalAnti(event.detail.value)
                    }
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {rotacionalAnti && (
            <IonButton onClick={() => dispatch(addToCart(id))}>
              Adicionar {rotacionalAnti}
            </IonButton>
          )}
        </div>
      )}

      {tipoConexao === "perfilRetoOuDivergente" && (
        <div
          key={id}
          style={{
            background: "#dadada",
            marginBottom: "4px",
            borderRadius: "6px",
            padding: "20px",
            width: "240px",
          }}
        >
          <strong>{nome}</strong>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              {item.tipoConexao === "Perfil Reto Ø3.50mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={retoDivergente}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) =>
                      setRetoDivergente(event.detail.value)
                    }
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Perfil Divergente Ø5.0mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={retoDivergente}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) =>
                      setRetoDivergente(event.detail.value)
                    }
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.value} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {retoDivergente && (
            <IonButton onClick={() => dispatch(addToCart(id))}>
              Adicionar {retoDivergente}
            </IonButton>
          )}
        </div>
      )}

      {/* {componentes.map(
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
                    <div key={item.value}>
                      <h3>{item.tipoConexao}</h3>
                      <img src={item.imagem} alt="" />
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
      )} */}
    </>
  );
};

export default Produtos;
