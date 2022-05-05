import {
  IonItemGroup,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import Input from "./Input";

const Fields = ({ id, tipo, nome, opcoes }: any) => {
  return (
    <IonItemGroup>
      <IonItem className="component-dropdown__sku" key={id}>
        <IonLabel position="floating">{tipo}</IonLabel>
        <IonSelect
          value="0"
          placeholder="Selecione"
          cancelText="Cancelar"
          okText="Ok"
          name={`type-sku-${id}`}
        >
          {opcoes.map((item: any) => (
            <IonSelectOption key={item.sku} value={item.sku}>
              {item.sku}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      <IonItem className="component-dropdown__quantity">
        <Input id={id} nome={nome} />
      </IonItem>
    </IonItemGroup>
  );
};

export default Fields;
