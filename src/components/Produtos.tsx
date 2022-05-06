import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { ISmp } from "../mock/manualSpecifications";
import Input from "./forms/Input";

const Produtos = ({ componentes }: ISmp) => {
  const [valueSelect, setValueSelect] = useState({});

  const handleChange = (event: any) => {
    console.log(event);

    setValueSelect({ sku: event.value, label: event.label });
  };

  return (
    <>
      {componentes.map(
        (item) =>
          item.tipoConexao === "" && (
            <div key={item.id}>
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
                <IonItem>
                  <IonLabel>Quantidade</IonLabel>
                  <Input nome={`qtd-${item.slug}`} />
                </IonItem>
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
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <IonItem>
                <IonLabel>Quantidade</IonLabel>
                <Input nome={`qtd-${item.slug}`} />
              </IonItem>
            </div>
          )
      )}

      {componentes.map(
        (item) =>
          item.tipoConexao === "rotacionalAntiRotacional" && (
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
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <IonItem>
                <IonLabel>Quantidade</IonLabel>
                <Input nome={`qtd-${item.slug}`} />
              </IonItem>
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
