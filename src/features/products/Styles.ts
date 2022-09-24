import styled from "styled-components";

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  margin: 0 auto;
  position: relative;
  width: 7rem;
`;

export const FamilySpecification = styled.div`
  align-items: center;
  display: flex;
  grid-gap: 0.5rem;
  width: 100%;

  .table-row__union-type {
    border-radius: 90px;
    color: var(--ion-color-tertiary);
    display: inline-block;
    font-family: var(--font-family-bold);
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
  }
`;

export const AllProducts = styled.div`
  position: relative;
  display: block;

  &:empty {
    padding-top: 0;
    
    &::after {
      color: var(--ion-color-medium);
      content: "Nenhum componente.";
      display: block;
      font-family: var(--font-family-bold);
      font-size: 0.8rem;
      height: auto;
      letter-spacing: 0.05rem;
      text-transform: none;
      width: 100%;
    }
  }
`;
