import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";
import { ISmp } from "../mock/manualSpecifications";
import Input from "./forms/Input";

const Produtos = ({ componentes }: ISmp) => {
  const [productName, setProductName] = useState("");
  return (
    <>
      {componentes.map(
        (item) =>
          item.tipo === "" && (
            <div key={item.id}>
              <div>
                <img src={item.imagem} alt="" />
                <p>{item.nome}</p>
              </div>
              <div>
                <IonItem>
                  <IonLabel>{item.nome}</IonLabel>
                  <IonSelect
                    value={productName}
                    cancelText="Cancelar"
                    okText="Ok"
                    onIonChange={(e) => setProductName(e.detail.value)}
                  >
                    {item.caracteristicas.map((item) => (
                      <div key={item.id}>
                        {item.opcoes.map((item) => (
                          <IonSelectOption value={item.sku} key={item.sku}>
                            {item.sku}
                          </IonSelectOption>
                        ))}
                      </div>
                    ))}
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonLabel>Quantidade</IonLabel>
                  <Input nome={item.nome} />
                </IonItem>
              </div>
            </div>
          )
      )}

      {componentes.map(
        (item) =>
          item.tipo === "perfilRetoDivergente" && (
            <div key={item.id}>
              <div>
                <img src={item.imagem} alt="" />
                <p>{item.nome}</p>
              </div>
              <div>
                {item.caracteristicas.map((item) => (
                  <div key={item.id}>
                    {item.tipo === "Perfil Reto Ø3.50mm" ? (
                      <div>
                        <p>
                          <strong>Perfil Reto</strong>
                        </p>
                        {item.opcoes.map((item) => (
                          <div key={item.sku}>{item.sku}</div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        <p>
                          <strong>Perfil Divergente</strong>
                        </p>
                        {item.opcoes.map((item) => (
                          <div key={item.sku}>{item.sku}</div>
                        ))}
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
          item.tipo === "rotacionalAntiRotacional" && (
            <div key={item.id}>
              <div>
                <img src={item.imagem} alt="" />
                <p>{item.nome}</p>
              </div>
              <div>
                {item.caracteristicas.map((item) => (
                  <div key={item.id}>
                    {item.tipo === "Rotacional" ? (
                      <div>
                        <p>
                          <strong>Rotacional</strong>
                        </p>
                        {item.opcoes.map((item) => (
                          <div key={item.sku}>{item.sku}</div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        <p>
                          <strong>Anti Rotacional</strong>
                        </p>
                        {item.opcoes.map((item) => (
                          <div key={item.sku}>{item.sku}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {item.adicionais?.length && (
                <div>
                  {item.adicionais?.map((item) => (
                    <div key={item.sku}>
                      <h3>{item.tipo}</h3>
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
