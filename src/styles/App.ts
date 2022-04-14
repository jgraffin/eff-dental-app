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
  animation: ${fadeIn} ease-in-out 0.6s forwards;
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
      #3c8a67 99%,
      #6d893b 100%
    );
    border-radius: 30px 30px 0 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: 1rem 1rem 2rem 1rem;
    position: relative;

    ion-list {
      width: 100%;
    }

    .smp-name {
      animation: ${slideIn} ease-in-out 0.3s forwards;
      font-size: 2rem;
      font-family: var(--font-family-bold);
      display: block;
      width: 100%;
    }

    &__columns {
      display: flex;
      grid-gap: 1rem;
      justify-content: space-between;
      margin-bottom: 2rem;
    }

    &__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
`;

export const ModalClose = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  right: 2rem;
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

export const NextButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  a {
    width: 20rem;
    height: 4rem;
    border-radius: 90px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-bold);
    background-image: linear-gradient(
      50deg,
      #1d847b 44%,
      #3c8a67 99%,
      #6d893b 100%
    );
    text-decoration: none;
  }

  &.disabled {
    pointer-events: none;

    a {
      background-color: gray;
      background-image: none;
    }
  }
`;
