import {
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import { addToCart, getSelectedValues } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";
import { SuccessAdded, WrapperButtonAddToCart } from "../styles/App";
import SuccessAddedImage from "../images/check-circle-outline.svg";

const Produtos = ({
  posicao,
  tipoConexao,
  id,
  nome,
  imagem,
  caracteristicas,
  subitem,
  torque,
}: any) => {
  const dispatch = useDispatch();
  const [sku, setSku] = useState("");
  const [successAdded, setSuccessAdded] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);

  function onAddingToCart() {
    dispatch(addToCart(id));
    dispatch(getSelectedValues(sku));
    setSuccessAdded(true);

    setTimeout(() => {
      setHideMessage(true);

      setTimeout(() => {
        setSuccessAdded(false);
        setHideMessage(false);
      }, 500);
    }, 1800);
  }

  return (
    <>
      {successAdded && (
        <SuccessAdded className={`${hideMessage ? "hide-message" : ""}`}>
          <img src={SuccessAddedImage} alt="Adicionado ao carrinho!" />
          <p>Item adicionado!</p>
        </SuccessAdded>
      )}

      {tipoConexao === "" && (
        <div key={id} className="form-product">
          <div className="form-product__title">
            <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
            <h3>{nome}</h3>
            <small>{posicao ? "Desfavorável" : "Favorável"}</small>
          </div>
          {caracteristicas.map((item: any) => (
            <IonItem key={item.id}>
              <IonLabel position="floating">Tipo Conexão</IonLabel>
              <IonSelect
                value={sku}
                cancelText="Cancelar"
                okText="Ok"
                placeholder="Selecione"
                onIonChange={(event) => setSku(event.detail.value)}
              >
                {item.opcoes.map((item: any) => (
                  <IonSelectOption key={item.id} value={item.value}>
                    {item.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          ))}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                <span>Adicionar</span>
                <strong>{sku}</strong>
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "rotacionalAntiRotacional" && (
        <div key={id} className="form-product" id={id}>
          <div className="form-product__title">
            <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
            <h3>{nome}</h3>
            <small>
              {posicao === "desfavoravel" ? "Desfavorável" : "Favorável"}
            </small>
          </div>

          {caracteristicas.map((caracteristica: any) => (
            <div key={caracteristica.id} id={caracteristica.id}>
              {caracteristica.tipoConexao === "Anti Rotacional" && (
                <IonItem>
                  <IonLabel position="floating">
                    {caracteristica.tipoConexao}
                  </IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {caracteristica.opcoes.map((opcao: any) => (
                      <IonSelectOption key={opcao.value} value={opcao.value}>
                        {opcao.label}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {caracteristica.tipoConexao === "Rotacional" && (
                <IonItem>
                  <IonLabel position="floating">
                    {caracteristica.tipoConexao}
                  </IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {caracteristica.opcoes.map((opcao: any) => (
                      <IonSelectOption key={opcao.value} value={opcao.value}>
                        {opcao.label}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {subitem?.length && <h6 className="additional-title">Acessórios:</h6>}

          {subitem?.length &&
            subitem?.map((item: any) => (
              <div key={item.id}>
                {item.tipoConexao === "h.0.80/1.50/2.50mm" && (
                  <IonItem className="additional-field">
                    <img
                      src={`../assets/images/proteses/${item.imagem}.png`}
                      alt={item.tipoConexao}
                      className="additional-image"
                    />
                    <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                    <IonSelect
                      value={sku}
                      cancelText="Cancelar"
                      okText="Ok"
                      placeholder="Selecione"
                      onIonChange={(event) => setSku(event.detail.value)}
                    >
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                )}

                {item.tipoConexao === "h.3.50/4.50mm" && (
                  <IonItem className="additional-field">
                    <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                    <IonSelect
                      value={sku}
                      cancelText="Cancelar"
                      okText="Ok"
                      placeholder="Selecione"
                      onIonChange={(event) => setSku(event.detail.value)}
                    >
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                )}
              </div>
            ))}

          {subitem?.length && (
            <p className="additional-torque">{torque ? "Torque 20Ncm" : ""}</p>
          )}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                <span>Adicionar</span>
                <strong>{sku.substring(3)}</strong>
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "perfilRetoOuDivergente" && (
        <div key={id} className="form-product">
          <div className="form-product__title">
            <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
            <h3>{nome}</h3>
          </div>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              {item.tipoConexao === "Perfil Reto Ø3.30mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
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
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                <span>Adicionar</span>
                <strong>{sku}</strong>
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "perfil3Ou4" && (
        <div key={id} className="form-product">
          <div className="form-product__title">
            <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
            <h3>{nome}</h3>
          </div>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              {item.tipoConexao === "Perfil Ø3.30" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Perfil Ø4.50" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                <span>Adicionar</span>
                <strong>{sku}</strong>
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {tipoConexao === "perfil3h4mmOu3h6mm" && (
        <div key={id} className="form-product">
          <div className="form-product__title">
            <img src={`../assets/images/proteses/${imagem}.png`} alt={nome} />
            <h3>{nome}</h3>
          </div>
          {caracteristicas.map((item: any) => (
            <div key={item.id}>
              {item.tipoConexao === "Perfil Ø 3.30|h 4.0mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Perfil Ø 3.30|h 6.0mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Perfil Ø 4.50|h 4.0mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}

              {item.tipoConexao === "Perfil Ø 4.50|h 6.0mm" && (
                <IonItem>
                  <IonLabel position="floating">{item.tipoConexao}</IonLabel>
                  <IonSelect
                    value={sku}
                    cancelText="Cancelar"
                    okText="Ok"
                    placeholder="Selecione"
                    onIonChange={(event) => setSku(event.detail.value)}
                  >
                    {item.opcoes.map((item: any) => (
                      <IonSelectOption key={item.id} value={item.value}>
                        {item.value}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              )}
            </div>
          ))}

          {sku && (
            <WrapperButtonAddToCart>
              <IonButton
                className="add-button"
                expand="block"
                shape="round"
                color="dark"
                type="button"
                onClick={onAddingToCart}
              >
                <span>Adicionar</span>
                <strong>{sku}</strong>
              </IonButton>
            </WrapperButtonAddToCart>
          )}
        </div>
      )}

      {sku && <div className="backdrop" onClick={() => setSku("")}></div>}
      {successAdded && (
        <div className="backdrop" onClick={() => setSku("")}></div>
      )}
    </>
  );
};

export default Produtos;
