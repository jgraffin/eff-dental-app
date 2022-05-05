import { IonLabel, IonInput } from "@ionic/react";
import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

const Input = ({ nome, id, ...rest }: any) => {
  const inputRef = useRef();

  const { fieldName, defaultValue, registerField } = useField(nome);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <IonLabel position="stacked">Quantidade</IonLabel>
      <IonInput
        name={nome}
        ref={inputRef}
        type="number"
        placeholder="0"
        {...rest}
      ></IonInput>
    </>
  );
};

export default Input;
