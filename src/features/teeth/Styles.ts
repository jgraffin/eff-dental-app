import styled from "styled-components";

export const List = styled.div`
  background: var(--ion-color-primary-contrast);
  border-radius: 20px 0 0 20px;
  box-shadow: 0 15px 47px 0 rgba(29, 132, 123, 0.14);
  display: block;
  height: 325px;
  margin: 0 0 0 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 1rem 0 1rem;
  width: 100%;

  .tooth-list {
    display: grid;
    list-style-type: none;
    grid-template-columns: repeat(16, 1fr);
    flex-wrap: wrap;
    width: 500px;
    margin: 0;
    padding: 0;
    grid-gap: 1.2rem;

    &__item {
      background-color: var(--ion-color-primary-contrast);
      height: 8.2rem;
      width: 3rem;
      display: block;
      position: relative;

      &.ripple-parent {
        position: relative;
        overflow: hidden;
        border-radius: 90px;
      }

      a {
        align-items: flex-end;
        border-radius: 90px;
        border: 1px dashed var(--ion-color-light);
        color: var(--ion-color-dark);
        display: flex;
        height: 100%;
        justify-content: center;
        padding-bottom: 1rem;
        position: relative;
        text-decoration: none;
        width: 100%;
        z-index: 2;
      }

      &::before {
        content: "";
        background-image: url("./assets/images/sprite.png");
        background-repeat: no-repeat;
        background-position: left top;
        position: absolute;
        left: 0;
        top: 0;
        margin: 1.6rem 0 0 0.5rem;
        width: 2rem;
        height: 3.5rem;
      }

      &.tooth-list__item--18 {
        &::before {
          background-position: -2px -24px;
          background-size: 469px;
        }
      }
    }
  }
`;
