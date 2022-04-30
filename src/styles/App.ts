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
    padding: 1rem;
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
      margin-bottom: 1rem;

      h1 {
        color: black;
        font-family: var(--font-family-light);
        font-size: 1.1rem;
        left: 1rem;
        position: absolute;
        text-transform: uppercase;
        top: -3.5rem;
      }

      .item {
        margin-bottom: 0;
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
  top: -1.4rem;
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
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;
    padding-inline-start: 0;
    padding-inline-end: 0;
    padding-bottom: 0;
    padding-top: 0;

    ion-row {
      background-color: #ffffff;
      border-bottom: 1px solid #dadada;
      padding: 0.5rem 0 0.5rem 1rem;

      &:last-of-type {
        border-bottom: 0;
      }

      &:first-child {
        background-color: #1d837a;
        border-top-left-radius: 10px;
      }

      &.table-head {
        padding: 1rem 0 1rem 1rem;
      }

      &.table-row {
        align-items: center;
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
        display: flex;
        align-items: flex-start;
      }
    }

    .component-content {
      &__container {
        width: 100%;
        overflow: hidden;
        display: block;

        .component-dropdown {
          align-items: center;
          grid-gap: 0 0.5rem;
          display: flex;
          flex-wrap: wrap;
          /* height: 3.3rem; */
          /* overflow: hidden; */
          width: 100%;
          background-color: #aaf9ae;
          border-radius: 0.5rem;
          padding: 0.4rem;
          margin-bottom: 0.2rem;
          position: relative;

          ion-item-group {
            display: flex;
            grid-gap: 1rem;
          }

          &__image {
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            background-color: #ffffff;
            overflow: hidden;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.2rem;

            img {
              display: block;
              max-width: 46px;
              object-fit: cover;
              height: auto;
            }
          }

          &__name {
            h2 {
              font-family: var(--font-family-bold);
              font-size: 0.9rem;
              margin: 0;
              text-transform: none;
              color: #125953;
            }
          }

          &__fields {
            padding-left: 3rem;
            width: 90%;

            .item {
              margin-bottom: 0;
              --border-color: rgba(0, 0, 0, 0.2);
            }

            ion-item-group {
              &:last-of-type {
                .item {
                  --border-color: rgba(0, 0, 0, 0);
                }
              }
            }
          }

          &__button {
            position: absolute;
            right: 0;
            top: 0;
            margin: 0.8rem 3rem;
          }

          &__sku,
          &__quantity {
            width: 40%;
            --inner-padding-end: 0;

            .sc-ion-label-md-h.sc-ion-label-md-s.md.label-floating,
            .sc-ion-label-md-h.sc-ion-label-md-s.md.label-stacked,
            .item-label {
              text-transform: capitalize;
              letter-spacing: normal;
              font-size: 0.9rem;
            }

            ion-select {
              letter-spacing: normal;
              text-transform: capitalize;
            }
          }

          &__quantity {
            padding-bottom: 0;

            ion-label {
              padding-top: 0.3rem;
            }

            .sc-ion-input-ios-h,
            .native-input.sc-ion-input-md,
            .md.in-item,
            .md.button {
              --padding-top: 8px;
            }
          }

          &__sku {
            width: 50%;

            &__title {
              font-family: var(--font-family-bold);
              font-size: 0.6rem;
              letter-spacing: 0.02rem;
              margin-bottom: 0;
              margin-top: 0.5rem;
              position: relative;
              padding-left: 0.5rem;
              color: #125953;

              &:before {
                content: "";
                width: 0.3rem;
                border-radius: 90px;
                height: 0.3rem;
                position: absolute;
                left: 0;
                top: 3px;
                background: #125953;
              }
            }
          }

          .item-interactive.item-select {
            animation: none;
          }

          .sc-ion-input-ios-h,
          .native-input.sc-ion-input-md,
          .md.in-item,
          .md.button {
            --padding-start: 0;
          }
        }
      }
    }
  }
`;
