import { TeethType } from "../features/teeth/teethSlice";
import { ToothSchemeWrapper } from "./ToothSchemeStyles";

const ToothScheme = ({
  dente,
  implante,
  posicao,
  selecionado,
  uniaoImplante,
}: TeethType) => {
  return (
    <ToothSchemeWrapper>
      <div
        className={`tooth-scheme tooth-scheme--${dente} 
          ${implante !== "Undefined" ? "has-implant" : ""} 
          ${posicao} 
          ${selecionado ? "is-selected" : ""} 
          ${uniaoImplante}`}
      >
        <div className="tooth-scheme__image"></div>
        <div className="tooth-scheme__number">{dente}</div>
      </div>
    </ToothSchemeWrapper>
  );
};

export default ToothScheme;
