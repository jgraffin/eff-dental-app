import { TeethType } from "../features/teeth/teethSlice";
import { ToothSchemeWrapper } from "./ToothSchemeStyles";

const ToothScheme = ({
  teethNumber,
  implant,
  position,
  selected,
  unionType,
}: TeethType) => {
  return (
    <ToothSchemeWrapper>
      <div
        className={`tooth-scheme tooth-scheme--${teethNumber} 
          ${implant !== "Undefined" ? "has-implant" : ""} 
          ${position} 
          ${selected ? "is-selected" : ""} 
          ${unionType}`}
      >
        <div className="tooth-scheme__image"></div>
        <div className="tooth-scheme__number">{teethNumber}</div>
      </div>
    </ToothSchemeWrapper>
  );
};

export default ToothScheme;
