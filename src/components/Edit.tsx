import {
  InputChangeEventDetail,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonButton,
} from "@ionic/react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { TeethType, itemUpdated } from "../features/teeth/teethSlice";
import { Catalogos } from "../mock/manualSpecifications";
import { Modal, ModalClose } from "../styles/App";
import ToothScheme from "./ToothScheme";

const Edit = ({ match }: { match: { id: number } } | any) => {
  const { id } = match.params;
  const data = useSelector((state: RootState) =>
    state.teeth.items.find((val: TeethType) => val.id === id)
  );

  const [catalogo, setCatalogo] = useState(data.catalogo);
  const [marca, setMarca] = useState(data.marca);
  const [especificacao, setEspecificacao] = useState(data.especificacao);
  const [implante, setImplante] = useState(data.implante);
  const [plataforma, setPlataforma] = useState(data.plataforma);
  const [familia, setFamilia] = useState(data.familia);
  const [uniaoImplante, setUniaoImplante] = useState(data.uniaoImplante);
  const [posicao, setPosicao] = useState(data.posicao);

  const [dente] = useState(data.dente);
  const [selecionado] = useState(data.selecionado);

  const dataImplanteRef = useRef(null);
  const dataFamiliaRef = useRef<any>(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const onCatalogChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setCatalogo(field.value);
  };

  const onBrandChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setMarca(field.value);
  };

  const onPlatformChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setPlataforma(field.value);

    if (dataFamiliaRef.current) {
      setFamilia(dataFamiliaRef.current.innerText);
    }
  };

  const onPositionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.detail as HTMLIonCheckboxElement;
    setPosicao(field.checked);
  };

  const onUnionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.detail as HTMLIonCheckboxElement;
    setUniaoImplante(field.checked);
  };

  const onSpecificationChanged = (
    event: CustomEvent<InputChangeEventDetail>
  ) => {
    const field = event.target as HTMLSelectElement;
    setEspecificacao(field.value);
  };

  const onImplantChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLSelectElement;
    setImplante(field.value);
  };

  const onSaveEdit = () => {
    if (catalogo && marca && familia && plataforma) {
      dispatch(
        itemUpdated({
          id: id,
          catalogo,
          dente,
          marca,
          especificacao,
          implante,
          familia,
          plataforma,
          uniaoImplante,
          posicao,
          selecionado: true,
        })
      );
      history.push(`/`);
    }
  };

  const onRemove = () => {
    dispatch(
      itemUpdated({
        ...data,
        catalogo: "",
        marca: "",
        especificacao: "",
        implante: "",
        familia: "",
        plataforma: "",
        uniaoImplante: false,
        posicao: false,
        selecionado: false,
      })
    );
    history.push(`/`);
  };

  return (
    <Modal>
      <div className="container">
        <ModalClose>
          <Link
            to={{
              pathname: `/`,
            }}
          ></Link>
        </ModalClose>

        <div className="container__columns">
          {!selecionado ? (
            <h1>Configurações</h1>
          ) : (
            <h1>Editar Configurações</h1>
          )}

          <ToothScheme
            dente={dente}
            implante={implante}
            posicao={posicao}
            selecionado={selecionado}
            uniaoImplante={uniaoImplante}
          />

          <IonList>
            <IonItem>
              <IonLabel position="floating">Catálogos</IonLabel>
              <IonSelect
                value={catalogo}
                placeholder="Selecione"
                onIonChange={onCatalogChanged}
              >
                <IonSelectOption value="Cone Morse">Cone Morse</IonSelectOption>
                <IonSelectOption value="Hexagono Externo">
                  Hexágono Externo
                </IonSelectOption>
                <IonSelectOption value="Hexagono Interno">
                  Hexágono Interno
                </IonSelectOption>
              </IonSelect>
            </IonItem>

            {catalogo && (
              <IonItem>
                <IonLabel position="floating">Marca do Implante</IonLabel>
                <IonSelect
                  value={marca}
                  placeholder="Selecione"
                  onIonChange={onBrandChanged}
                >
                  {Catalogos.map(
                    (item) =>
                      item.name === catalogo &&
                      item.opcoes.map((item) => (
                        <IonSelectOption key={item.id} value={item.marca}>
                          {item.marca}
                        </IonSelectOption>
                      ))
                  )}
                </IonSelect>
              </IonItem>
            )}

            {catalogo && marca && (
              <IonItem>
                <IonLabel position="floating">Especificação</IonLabel>
                <IonSelect
                  value={especificacao}
                  placeholder="Selecione"
                  onIonChange={onSpecificationChanged}
                >
                  {Catalogos.map(
                    (item) =>
                      item.name === catalogo &&
                      item.opcoes
                        .filter((val) => val.marca === marca ?? true)
                        .map((item) =>
                          item.manual.map((item) =>
                            item.especificacao !== "Undefined" ? (
                              <IonSelectOption
                                key={item.id}
                                value={item.especificacao}
                              >
                                {item.especificacao}
                              </IonSelectOption>
                            ) : (
                              <IonSelectOption
                                key={item.id}
                                value={item.especificacao}
                              >
                                Não Possui
                              </IonSelectOption>
                            )
                          )
                        )
                  )}
                </IonSelect>
              </IonItem>
            )}

            {catalogo && marca && especificacao && (
              <IonItem>
                <IonLabel position="floating">Implante</IonLabel>
                <IonSelect
                  value={implante}
                  placeholder="Selecione"
                  onIonChange={onImplantChanged}
                >
                  {Catalogos.map(
                    (item) =>
                      item.name === catalogo &&
                      item.opcoes.map(
                        (item) =>
                          item.marca === marca &&
                          item.manual
                            .filter(
                              (val) =>
                                val.especificacao === especificacao ?? true
                            )
                            .map((item) =>
                              item.implante !== "Undefined" ? (
                                <IonSelectOption
                                  key={item.id}
                                  value={item.implante}
                                >
                                  {item.implante}
                                </IonSelectOption>
                              ) : (
                                <IonSelectOption
                                  key={item.id}
                                  value={item.implante}
                                >
                                  Não Possui
                                </IonSelectOption>
                              )
                            )
                      )
                  )}
                </IonSelect>
              </IonItem>
            )}

            {catalogo && marca && especificacao && implante && (
              <IonItem>
                <IonLabel position="floating">Plataforma Protética</IonLabel>
                <IonSelect
                  value={plataforma}
                  placeholder="Selecione"
                  onIonChange={onPlatformChanged}
                >
                  {Catalogos.map(
                    (item) =>
                      item.name === catalogo &&
                      item.opcoes.map(
                        (item) =>
                          item.marca === marca &&
                          item.manual
                            .filter(
                              (val) =>
                                (val.implante === implante &&
                                  val.especificacao === especificacao) ??
                                true
                            )
                            .map((item) => (
                              <IonSelectOption
                                key={item.id}
                                value={item.plataforma}
                              >
                                {item.plataforma}
                              </IonSelectOption>
                            ))
                      )
                  )}
                </IonSelect>
              </IonItem>
            )}

            {catalogo && marca && especificacao && implante && plataforma && (
              <>
                <IonItem>
                  <IonLabel>Desfavorável</IonLabel>
                  <IonCheckbox
                    value={posicao}
                    checked={posicao}
                    onIonChange={onPositionChanged}
                    slot="end"
                    color="primary"
                  />
                </IonItem>

                <IonItem>
                  <IonLabel>Múltiplas?</IonLabel>
                  <IonCheckbox
                    value={uniaoImplante}
                    checked={uniaoImplante}
                    onIonChange={onUnionChanged}
                    slot="end"
                    color="primary"
                  />
                </IonItem>
              </>
            )}

            {Catalogos.map(
              (item) =>
                item.name === catalogo &&
                item.opcoes.map(
                  (item) =>
                    item.marca === marca &&
                    item.manual
                      .filter(
                        (val) =>
                          (val.implante === implante &&
                            val.plataforma === plataforma) ??
                          true
                      )
                      .map((item) => (
                        <h2 key={item.id} ref={dataFamiliaRef}>
                          {item.familia}
                        </h2>
                      ))
                )
            )}
          </IonList>
        </div>

        {!selecionado ? (
          <IonButton
            className="button-add ion-no-shadow"
            color="dark"
            expand="block"
            size="large"
            shape="round"
            type="button"
            onClick={onSaveEdit}
          >
            <strong>Adicionar</strong>
          </IonButton>
        ) : (
          <div className="container__buttons">
            <IonButton
              className="button-save"
              expand="block"
              shape="round"
              color="dark"
              type="button"
              onClick={onSaveEdit}
            >
              Salvar
            </IonButton>
            <IonButton
              className="button-remove"
              expand="block"
              shape="round"
              type="button"
              onClick={onRemove}
            >
              Remover
            </IonButton>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Edit;
