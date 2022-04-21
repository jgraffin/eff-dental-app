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
import { CatalogoConeMorse } from "../mock/manualSpecifications";
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

    if (dataImplanteRef.current) {
      setImplante(dataFamiliaRef.current.innerText);
    }
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
        implante: "Undefined",
        familia: "",
        plataforma: "",
        uniaoImplante: false,
        posicao: false,
        selecionado: false,
      })
    );
    history.push(`/`);
  };

  const onRemoveSpecialCharacters = (char: string) => {
    const noSpecialCharacters = char.replace(/[^a-zA-Z0-9 ]/g, "");
    return noSpecialCharacters;
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
              <IonLabel position="floating">Catálogo</IonLabel>
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

            {catalogo === "Cone Morse" && (
              <>
                <IonItem>
                  <IonLabel position="floating">Marca do Implante</IonLabel>
                  <IonSelect
                    value={marca}
                    placeholder="Selecione"
                    onIonChange={onBrandChanged}
                  >
                    {CatalogoConeMorse.map((item) => (
                      <IonSelectOption key={item.id} value={item.id}>
                        {item.marca}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>

                {marca && (
                  <IonItem>
                    <IonLabel position="floating">Especificação</IonLabel>
                    <IonSelect
                      value={especificacao}
                      placeholder="Selecione"
                      onIonChange={onSpecificationChanged}
                    >
                      {CatalogoConeMorse.filter((val) => {
                        return (
                          val.id === onRemoveSpecialCharacters(marca) ?? true
                        );
                      }).map((item) => {
                        return item.manual.map((item) =>
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
                              Não possui
                            </IonSelectOption>
                          )
                        );
                      })}
                    </IonSelect>
                  </IonItem>
                )}

                {CatalogoConeMorse.map((item) => {
                  if (item.id === marca) {
                    const implantValues = item.manual
                      .filter((val) => {
                        return val.especificacao === especificacao ?? true;
                      })
                      .map((item) =>
                        item.implante !== "Undefined" ? (
                          <IonItem key={item.id}>
                            <IonLabel position="floating">Implante</IonLabel>
                            <IonSelect
                              value={implante}
                              placeholder="Selecione"
                              onIonChange={onImplantChanged}
                            >
                              <IonSelectOption
                                key={item.implante}
                                value={item.implante}
                              >
                                {item.implante}
                              </IonSelectOption>
                            </IonSelect>
                          </IonItem>
                        ) : (
                          <span
                            className="implant-name ion-hide"
                            key={item.id}
                            ref={dataImplanteRef}
                          >
                            {item.familia}
                          </span>
                        )
                      );
                    return implantValues;
                  }
                  return null;
                })}

                {CatalogoConeMorse.map((item) => {
                  if (item.id === marca) {
                    const positionValues = item.manual.filter((val) => {
                      if (val.implante !== "Undefined") {
                        if (
                          val.especificacao === especificacao &&
                          val.implante === implante
                        ) {
                          return true;
                        }
                      }
                      return false;
                    });

                    if (positionValues.length > 0) {
                      return (
                        <IonItem key={item.id}>
                          <IonLabel>Desfavorável?</IonLabel>
                          <IonCheckbox
                            value={posicao}
                            checked={posicao}
                            onIonChange={onPositionChanged}
                            slot="end"
                            color="primary"
                          />
                        </IonItem>
                      );
                    }
                  }
                  return null;
                })}

                {CatalogoConeMorse.map((item) => {
                  if (item.id === marca) {
                    const platformValues = item.manual
                      .filter((val) => {
                        if (
                          val.especificacao === especificacao &&
                          val.implante === implante
                        ) {
                          return true;
                        }
                        return false;
                      })
                      .map((item) => (
                        <IonItem key={item.id}>
                          <IonLabel position="floating">
                            Plataforma Protética
                          </IonLabel>
                          <IonSelect
                            value={plataforma}
                            placeholder="Selecione"
                            onIonChange={onPlatformChanged}
                          >
                            {item.plataforma !== "Undefined" ? (
                              <IonSelectOption
                                key={item.plataforma}
                                value={item.plataforma}
                              >
                                {item.plataforma}
                              </IonSelectOption>
                            ) : (
                              <IonSelectOption
                                key={item.plataforma}
                                value={item.plataforma}
                              >
                                Não possui
                              </IonSelectOption>
                            )}
                          </IonSelect>
                        </IonItem>
                      ));
                    return platformValues;
                  }
                  return null;
                })}

                {CatalogoConeMorse.map((item) => {
                  if (item.id === marca) {
                    const unionImplantValues = item.manual.filter(
                      (val: any) => {
                        return val.plataforma === plataforma ? true : false;
                      }
                    );

                    if (unionImplantValues.length > 0) {
                      return (
                        <IonItem key={item.id}>
                          <IonLabel>Múltipla?</IonLabel>
                          <IonCheckbox
                            value={uniaoImplante}
                            checked={uniaoImplante}
                            onIonChange={onUnionChanged}
                            slot="end"
                            color="primary"
                          />
                        </IonItem>
                      );
                    }
                  }
                  return null;
                })}

                {CatalogoConeMorse.map((item) => {
                  if (item.id === marca) {
                    const smpValues = item.manual
                      .filter((val) => {
                        if (
                          val.especificacao === especificacao &&
                          val.implante === implante &&
                          val.plataforma === plataforma
                        ) {
                          return true;
                        }
                        return false;
                      })
                      .map((item) => {
                        return (
                          <h2
                            className="smp-name"
                            key={item.id}
                            ref={dataFamiliaRef}
                          >
                            {item.familia}
                          </h2>
                        );
                      });
                    return smpValues;
                  }
                  return null;
                })}
              </>
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
