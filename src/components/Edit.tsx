import {
  InputChangeEventDetail,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonToggle,
} from "@ionic/react";
import { useState, useRef, useEffect } from "react";
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

  const implanteRef = useRef<any>(null);
  const plataformaRef = useRef<any>(null);
  const familiaRef = useRef<any>(null);

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

  const onPositionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setPosicao(field.value);
  };

  const onUnionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
    const field = event.target as HTMLInputElement;
    setUniaoImplante(field.value);
  };

  const onSpecificationChanged = (
    event: CustomEvent<InputChangeEventDetail>
  ) => {
    const field = event.target as HTMLSelectElement;
    setEspecificacao(field.value);

    if (implanteRef.current && plataformaRef.current && familiaRef.current) {
      setImplante(implanteRef.current.innerText);
      setPlataforma(plataformaRef.current.innerText);
      setFamilia(familiaRef.current.innerText);
    }
  };

  const onSaveEdit = () => {
    if (
      catalogo &&
      marca &&
      especificacao &&
      implante &&
      plataforma &&
      familia
    ) {
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
    } else {
      alert("Preencha os campos obrigatórios");
    }
  };

  const onRemove = () => {
    dispatch(
      itemUpdated({
        ...data,
        catalogo: "",
        marca: "",
        especificacao: "",
        implante: "Undefined",
        familia: "",
        plataforma: "",
        uniaoImplante: "unitario",
        posicao: "favoravel",
        selecionado: false,
      })
    );
    history.push(`/`);
  };

  useEffect(() => {
    setCatalogo(catalogo);
    setMarca(marca);
  }, [catalogo, marca, uniaoImplante]);

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
            posicao={posicao === "favoravel" ? "favoravel" : "desfavoravel"}
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
                cancelText="Cancelar"
              >
                <IonSelectOption value="Cone Morse">Cone Morse</IonSelectOption>
                {/* <IonSelectOption value="Hexagono Externo">
                  Hexágono Externo
                </IonSelectOption>
                <IonSelectOption value="Hexagono Interno">
                  Hexágono Interno
                </IonSelectOption> */}
              </IonSelect>
            </IonItem>

            {Catalogos.map(
              (item) =>
                item.name === catalogo && (
                  <IonItem key={item.id}>
                    <IonLabel position="floating">Marca do Implante</IonLabel>
                    <IonSelect
                      value={marca}
                      placeholder="Selecione"
                      onIonChange={onBrandChanged}
                      cancelText="Cancelar"
                    >
                      {item.opcoes.map((item) => (
                        <IonSelectOption key={item.id} value={item.marca}>
                          {item.marca}
                        </IonSelectOption>
                      ))}
                    </IonSelect>
                  </IonItem>
                )
            )}

            {Catalogos.map(
              (item) =>
                item.name === catalogo &&
                item.opcoes.map(
                  (item) =>
                    item.marca === marca && (
                      <IonItem key={item.id}>
                        <IonLabel position="floating">Especificação</IonLabel>
                        <IonSelect
                          value={especificacao}
                          placeholder="Selecione"
                          onIonChange={onSpecificationChanged}
                          cancelText="Cancelar"
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
                    )
                )
            )}

            {Catalogos.map(
              (item) =>
                item.name === catalogo &&
                item.opcoes.map(
                  (item) =>
                    item.marca === marca &&
                    item.manual.map(
                      (item) =>
                        item.especificacao === especificacao &&
                        Catalogos.map(
                          (item) =>
                            item.name === catalogo &&
                            item.opcoes.map(
                              (item) =>
                                item.marca === marca &&
                                item.manual
                                  .filter(
                                    (val) =>
                                      val.especificacao === especificacao ??
                                      true
                                  )
                                  .map((item) =>
                                    item.implante !== "Undefined" ? (
                                      <>
                                        <strong>Implante</strong>
                                        <h2 key={item.id} ref={implanteRef}>
                                          {item.implante}
                                        </h2>
                                      </>
                                    ) : (
                                      <>
                                        <strong>Implante</strong>
                                        <h2 key={item.id}>Não Possui</h2>
                                      </>
                                    )
                                  )
                            )
                        )
                    )
                )
            )}

            {Catalogos.map(
              (item) =>
                item.name === catalogo &&
                item.opcoes.map(
                  (item) =>
                    item.marca === marca &&
                    item.manual.map(
                      (item) =>
                        item.especificacao === especificacao &&
                        Catalogos.map(
                          (item) =>
                            item.name === catalogo &&
                            item.opcoes.map(
                              (item) =>
                                item.marca === marca &&
                                item.manual
                                  .filter(
                                    (val) =>
                                      val.especificacao === especificacao ??
                                      true
                                  )
                                  .map((item) => (
                                    <>
                                      <strong>Plataforma</strong>
                                      <h2 key={item.id} ref={plataformaRef}>
                                        {item.plataforma}
                                      </h2>
                                    </>
                                  ))
                            )
                        )
                    )
                )
            )}

            {catalogo && marca && especificacao && implante && plataforma && (
              <>
                <IonItem>
                  <IonLabel position="floating">Posição</IonLabel>
                  <IonSelect value={posicao} onIonChange={onPositionChanged} cancelText="Cancelar">
                    <IonSelectOption value="favoravel">
                      Favorável
                    </IonSelectOption>
                    <IonSelectOption value="desfavoravel">
                      Desfavorável
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Seleção</IonLabel>
                  <IonSelect value={uniaoImplante} onIonChange={onUnionChanged} cancelText="Cancelar">
                    <IonSelectOption value="unitario">Unitário</IonSelectOption>
                    <IonSelectOption value="multiplo">Múltiplo</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </>
            )}

            {Catalogos.map(
              (item) =>
                item.name === catalogo &&
                item.opcoes.map(
                  (item) =>
                    item.marca === marca &&
                    item.manual.map(
                      (item) =>
                        item.especificacao === especificacao &&
                        Catalogos.map(
                          (item) =>
                            item.name === catalogo &&
                            item.opcoes.map(
                              (item) =>
                                item.marca === marca &&
                                item.manual
                                  .filter(
                                    (val) =>
                                      val.especificacao === especificacao ??
                                      true
                                  )
                                  .map((item) => (
                                    <>
                                      <strong>Família</strong>
                                      <h2 key={item.id} ref={familiaRef}>
                                        {item.familia}
                                      </h2>
                                    </>
                                  ))
                            )
                        )
                    )
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
