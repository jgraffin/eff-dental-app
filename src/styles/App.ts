import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Modal = styled.div`
  animation: ${fadeIn} ease-in-out 1s forwards;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.8);
  bottom: 0;
  display: flex;
  height: 100%;
  left: 0%;
  position: fixed;
  width: 100%;
  z-index: 999;

  .container {
    animation: ${slideIn} ease-in-out 0.3s forwards;
    background-image: linear-gradient(
      50deg,
      #1d847b 44%,
      #6e8a3c 99%,
      #6d893b 100%
    );
    border-radius: 30px 30px 0 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: 2rem;
    position: relative;

    &__buttons {
      display: flex;
    }
  }
`;

export const ModalClose = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1.2rem;
  border-radius: 90px;
  background: var(--ion-color-dark);
  z-index: 30;

  a {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 2.5rem;
    width: 2.5rem;

    &::before {
      background: url("../assets/icon/icon-close.svg") no-repeat center center;
      display: block;
      content: "";
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;
