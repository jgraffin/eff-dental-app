import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { catalogConeMorse } from "../mock/manualSpecifications";

const ConeMorse: any = ({ type }: any) => {
  return (
    type.catalog === "Cone Morse" && (
      <>
        <IonItem>
          <IonLabel position="floating">Marca do Implante</IonLabel>
          <IonSelect
            value={type.brand}
            placeholder="Selecione"
            onIonChange={type.onBrandChanged}
          >
            {catalogConeMorse.map((item: any) => (
              <IonSelectOption key={item.id} value={item.id}>
                {item.brandName}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        {type.brand && (
          <IonItem>
            <IonLabel position="floating">Especificação</IonLabel>
            <IonSelect
              value={type.specification}
              placeholder="Selecione"
              onIonChange={type.onSpecificationChanged}
            >
              {catalogConeMorse
                .filter((brandName: any) => {
                  if (
                    brandName.id === type.onRemoveSpecialCharacters(type.brand)
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((items: any) => {
                  return items.manual.map((value: any) =>
                    value.specification !== "Undefined" ? (
                      <IonSelectOption
                        key={value.id}
                        value={value.specification}
                      >
                        {value.specification}
                      </IonSelectOption>
                    ) : (
                      <IonSelectOption
                        key={value.id}
                        value={value.specification}
                      >
                        Não possui
                      </IonSelectOption>
                    )
                  );
                })}
            </IonSelect>
          </IonItem>
        )}

        {catalogConeMorse.map((items: any) => {
          console.log(items.id, items.brand);
          if (items.id === type.brand) {
            const implantValues = items.manual
              .filter((value: any) => {
                if (value.specification === type.specification) {
                  return true;
                }
                return false;
              })
              .map((value: any) => (
                <IonItem key={value.id}>
                  <IonLabel position="floating">Implante</IonLabel>
                  <IonSelect
                    value={type.implant}
                    placeholder="Selecione"
                    onIonChange={type.onImplantChanged}
                  >
                    {value.implant !== "Undefined" ? (
                      <IonSelectOption
                        key={value.implant}
                        value={value.implant}
                      >
                        {value.implant}
                      </IonSelectOption>
                    ) : (
                      <IonSelectOption
                        key={value.implant}
                        value={value.implant}
                      >
                        Não possui
                      </IonSelectOption>
                    )}
                  </IonSelect>
                </IonItem>
              ));
            return implantValues;
          }
          return null;
        })}

        {catalogConeMorse.map((items: any) => {
          if (items.id === type.brand) {
            const platformValues = items.manual
              .filter((value: any) => {
                if (
                  value.specification === type.specification &&
                  value.implant === type.implant
                ) {
                  return true;
                }
                return false;
              })
              .map((value: any) => (
                <IonItem key={value.id}>
                  <IonLabel position="floating">Plataforma Protética</IonLabel>
                  <IonSelect
                    value={type.platform}
                    placeholder="Selecione"
                    onIonChange={type.onPlatformChanged}
                  >
                    {value.platform !== "Undefined" ? (
                      <IonSelectOption
                        key={value.platform}
                        value={value.platform}
                      >
                        {value.platform}
                      </IonSelectOption>
                    ) : (
                      <IonSelectOption
                        key={value.platform}
                        value={value.platform}
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

        {catalogConeMorse.map((items: any) => {
          if (items.id === type.brand) {
            const smpValues = items.manual
              .filter((value: any) => {
                if (
                  value.specification === type.specification &&
                  value.implant === type.implant &&
                  value.platform === type.platform
                ) {
                  return true;
                }
                return false;
              })
              .map((value: any) => (
                <IonItem key={value.id}>
                  <IonLabel position="floating">Família EFF</IonLabel>
                  <IonSelect
                    value={type.smp}
                    placeholder="Selecione"
                    onIonChange={type.onSmpChanged}
                  >
                    <IonSelectOption value={value.smp}>
                      {value.smp}
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
              ));
            return smpValues;
          }
          return null;
        })}
      </>
    )
  );
};

export default ConeMorse;
