import styled from "styled-components";

export const Modal = styled.div`
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  height: 100%;
  left: 0%;
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: ease-in-out 0.3s;

  .modal-container-title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 3rem;
    text-align: center;
    z-index: 991;

    h2 {
      color: var(--ion-color-dark);
      font-family: var(--font-family-bold);
      font-size: 1.2rem;
    }
  }

  .container {
    background-color: var(--ion-color-primary-contrast);
    border-radius: 20px 20px 0 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: 2rem;

    &__buttons {
      display: flex;
    }
  }
`;

export const ModalClose = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1.4rem;
  border-radius: 90px;
  background: var(--ion-color-primary);
  z-index: 30;

  a {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 2.5rem;
    width: 2.5rem;

    &::before {
      background: url("./assets/icon/icon-close.svg") no-repeat center center;
      display: block;
      content: "";
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;
