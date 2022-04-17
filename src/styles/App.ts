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
    background: #aaf9ae;
    border-radius: 30px 30px 0 0;
    bottom: 0;
    box-shadow: 0px 0px 36px 15px rgba(0, 0, 0, 0.3);
    left: 0;
    padding: 1rem 1rem 2rem 1rem;
    position: relative;
    width: 100%;
    z-index: 99;

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

      h1 {
        color: black;
        font-family: var(--font-family-light);
        font-size: 1.1rem;
        left: 1rem;
        position: absolute;
        text-transform: uppercase;
        top: -3.5rem;
      }
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
    align-items: center;
    border-radius: 90px;
    background-image: linear-gradient(
      50deg,
      #1d847b 44%,
      #3c8a67 99%,
      #6d893b 100%
    );
    color: white;
    display: flex;
    font-family: var(--font-family-bold);
    height: 4rem;
    justify-content: center;
    letter-spacing: 0.1rem;
    text-decoration: none;
    width: 20rem;
  }

  &.disabled {
    pointer-events: none;

    a {
      background-color: gray;
      background-image: none;
    }
  }
`;

export const WrapperComponents = styled.div`
  background: var(--ion-color-primary-contrast);
  border-radius: 20px 0 0 20px;
  box-shadow: 0 15px 47px 0 rgb(109, 137, 60, 0.4);
  display: block;
  min-height: 200px;
  margin: 3rem 0 0 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  ion-grid {
    width: 700px;
    border-collapse: collapse;
    border-style: hidden;
    padding-inline-start: 0;
    padding-inline-end: 0;
    padding-bottom: 0;
    padding-top: 0;

    ion-row {
      padding: 0.5rem 0 0.5rem 0.5rem;

      &:first-child {
        background-color: #6d893c;
        border-top-left-radius: 10px;
      }

      &:nth-child(even) {
        background-color: #dddddd;
      }

      ion-col {
        border-bottom: 0;
        border-right: 0;
      }
    }

    .table-head,
    .table-row {
      ion-col {
        font-size: 0.6rem;
        font-family: var(--font-family-bold);
        font-weight: normal;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        color: white;

        ion-button {
          height: 30px;
          border-radius: 90px;
          font-size: 0.7rem;
        }
      }
    }

    .table-row {
      ion-col {
        font-size: 0.7rem;
        text-transform: uppercase;
        font-family: var(--font-family-light);
        color: black;
      }
    }
  }
`;
