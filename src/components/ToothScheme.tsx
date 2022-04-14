import { ToothSchemeWrapper } from "./ToothSchemeStyles";

const ToothScheme = ({
  tooth,
  implant,
  position,
  isSelected,
  unionImplant,
}: any) => {
  console.log(tooth);
  return (
    <ToothSchemeWrapper>
      <div
        className={`tooth-scheme tooth-scheme--${tooth} ${
          implant !== "Undefined" ? "has-implant" : ""
        } ${position ? "unfavorable" : ""} ${isSelected ? "is-selected" : ""} ${
          unionImplant ? "has-union" : ""
        }`}
      >
        <div className="tooth-scheme__image"></div>
        <div className="tooth-scheme__number">{tooth}</div>
      </div>
    </ToothSchemeWrapper>
  );
};

export default ToothScheme;
