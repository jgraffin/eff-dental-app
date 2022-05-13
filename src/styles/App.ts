import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideinAdd = keyframes`
  from {
    transform: translateY(4rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(25deg);
  }
`;

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
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
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
        color: var(--ion-color-primary);
        font-family: var(--font-family-bold);
        font-size: 1rem;
        left: 1rem;
        position: absolute;
        top: -3.5rem;
        letter-spacing: 0.1rem;
      }

      h2 {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: block;
        margin: 0;
        padding-bottom: 0.4rem;
      }

      h2,
      strong {
        color: var(--ion-color-dark);
        font-family: var(--font-family-bold);
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
      }

      strong {
        display: block;
        font-family: var(--font-family-light);
        font-size: 0.6rem;
        margin: 1rem 0 0.4rem 0;
      }

      ion-list {
        h2 {
          &:last-of-type {
            border-bottom: 0;
          }
        }
      }

      .item {
        margin-bottom: 0;
      }

      .toggle-text {
        font-size: 0.7rem;
        font-family: var(--font-family-bold);
      }

      .toggle-checked {
        + .toggle-text {
          color: var(--ion-color-primary);
        }
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
        padding: 0.5rem 0 0.5rem 1rem;
      }

      &.table-row {
        align-items: flex-start;
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
        font-size: 0.8rem;
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
          border-radius: 0.5rem;
          padding: 0.4rem 0;
          margin-bottom: 0.2rem;
          position: relative;

          ion-item-group {
            display: flex;
            grid-gap: 1rem;
          }

          &__wrapper__product {
            > div {
              align-items: center;
              display: flex;

              h2 {
                font-size: 0.7rem;
                font-family: var(--font-family-bold);
                margin: 0;
                padding: 0 0.5rem;
              }
            }
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
            flex-direction: column;

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
            background-color: #aaf9ae;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;

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

  .favoravel,
  .desfavoravel {
    display: inline-block;
    border-radius: 4px;
    padding: 2px;
    font-size: 0.6rem;
  }

  .favoravel {
    background-color: #125953;
    color: white;
  }

  .desfavoravel {
    background-color: #f00;
    color: black;
  }

  .filter-button {
    position: relative;
    width: 6rem;

    ion-toggle {
      padding: 3px 0 4px 0;
      transform: translate(0, 3px);
    }

    ion-label {
      position: absolute;
      right: -11px;
      top: 0.34rem;
      font-size: 0.6rem !important;
    }
  }

  .select-action {
    z-index: 10;
  }
`;

export const WrapperButtonAddToCart = styled.div`
  align-items: center;
  animation: ${slideinAdd} ease-in-out 0.4s forwards;
  background-color: var(--ion-color-success);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  bottom: 0;
  box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: fixed;
  width: 100%;
  z-index: 10;

  .add-button {
  }
`;

export const SuccessAdded = styled.div`
  background: var(--ion-color-success);
  left: 50%;
  padding: 0.5rem;
  margin-left: -45%;
  position: fixed;
  text-align: center;
  bottom: 20%;
  width: 90%;
  z-index: 99;
  border-radius: 10px;

  p {
    font-family: var(--font-family-bold);
    font-size: 1rem;
  }
`;

export const List = styled.div`
  animation: ${fadein} ease-in-out 0.6s forwards;
  background: var(--ion-color-primary-contrast);
  border-radius: 20px 0 0 20px;
  box-shadow: 0 15px 47px 0 rgba(127, 127, 255, 0.14);
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
    width: 280vw;
    margin: 0;
    padding: 0;
    grid-gap: 1.2rem;
    position: relative;

    &__item {
      background-color: var(--ion-color-primary-contrast);
      height: 8.2rem;
      width: 3rem;
      display: block;
      border: 1px dashed var(--ion-color-light);
      border-radius: 90px;
      position: relative;
      z-index: 5;

      a {
        align-items: flex-end;
        border-radius: 90px;
        color: var(--ion-color-dark);
        display: flex;
        font-family: var(--font-family-light);
        height: 100%;
        justify-content: center;
        overflow: hidden;
        padding-bottom: 1rem;
        position: relative;
        text-decoration: none;
        width: 100%;
        z-index: 2;

        &::after {
          background-image: url("./assets/images/sprite.png");
          background-position: left top;
          background-repeat: no-repeat;
          content: "";
          height: 3.5rem;
          left: 0;
          margin: 1.6rem 0 0 0.5rem;
          position: absolute;
          top: 0;
          width: 1.8rem;
          z-index: -1;
          background-size: 410px;
        }
      }

      &.has-implant {
        a {
          &::before {
            background-image: url("./assets/images/implant-graphic-top.png");
            background-repeat: no-repeat;
            background-size: 16px;
            content: "";
            height: 2.2rem;
            position: absolute;
            transition: ease-in-out 0.6s;
            width: 1rem;
          }
        }
      }

      &.ripple-parent {
        position: relative;
        overflow: hidden;
        border-radius: 90px;
      }

      &.is-selected {
        border: 1px dashed var(--ion-color-primary);

        a {
          color: var(--ion-color-primary);
          font-family: var(--font-family-bold);

          &::after {
            background-image: url("./assets/images/sprite-marked.png");
          }
        }

        &.tooth-list__item--46 {
          a {
            &::after {
              background-position: -67px -143px;
            }
          }
        }
      }

      &--18 {
        a {
          &::after {
            background-position: -2px -21px;
            left: 0;
            top: 8px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 30px;
              left: 14px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 31px;
              left: 11px;
              transform: rotate(-14deg);
            }
          }
        }
      }

      &--17 {
        a {
          &::after {
            background-position: -28px -14px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 30px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 30px;
              left: 10px;
              transform: rotate(-28deg);
            }
          }
        }
      }

      &--16 {
        a {
          &::after {
            background-position: -60px -19px;
            height: 3.5rem;
            top: -1px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 28px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 28px;
              left: 19px;
            }
          }
        }
      }

      &--15 {
        a {
          &::after {
            background-position: -90px -13px;
            height: 4rem;
            left: 3px;
            top: -6px;
            width: 1.5rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 28px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 28px;
              left: 19px;
            }
          }
        }
      }

      &--14 {
        a {
          &::after {
            background-position: -113px -7px;
            height: 4.5rem;
            left: 2px;
            top: -11px;
            width: 1.6rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 28px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 28px;
              left: 19px;
            }
          }
        }
      }

      &--13 {
        a {
          &::after {
            background-position: -138px -3px;
            height: 5rem;
            left: -1px;
            top: -17px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 25px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 25px;
              left: 19px;
            }
          }
        }
      }

      &--12 {
        a {
          &::after {
            background-position: -170px -11px;
            height: 4.2rem;
            left: 5px;
            top: -8px;
            width: 1.3rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 25px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 25px;
              left: 19px;
            }
          }
        }
      }

      &--11 {
        a {
          &::after {
            background-position: -189px -10px;
            height: 4.2rem;
            top: -8px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 25px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 25px;
              left: 19px;
            }
          }
        }
      }

      &--21 {
        a {
          &::after {
            background-position: -221px -11px;
            height: 4rem;
            left: -2px;
            top: -6px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 26px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 26px;
              left: 19px;
            }
          }
        }
      }

      &--22 {
        a {
          &::after {
            background-position: -250px -11px;
            height: 4rem;
            left: 3px;
            top: -7px;
            width: 1.5rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 26px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 26px;
              left: 19px;
            }
          }
        }
      }

      &--23 {
        a {
          &::after {
            background-position: -274px -3px;
            height: 5rem;
            left: 3px;
            top: -15px;
            width: 1.5rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 26px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 26px;
              left: 19px;
            }
          }
        }
      }

      &--24 {
        a {
          &::after {
            background-position: -302px -7px;
            height: 4.5rem;
            left: 3px;
            top: -9px;
            width: 1.4rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 26px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 27px;
              left: 19px;
            }
          }
        }
      }

      &--25 {
        a {
          &::after {
            background-position: -325px -15px;
            height: 4rem;
            left: 2px;
            top: -2px;
            width: 1.5rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 26px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 27px;
              left: 19px;
            }
          }
        }
      }

      &--26 {
        a {
          &::after {
            background-position: -348px -18px;
            height: 4rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 30px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 30px;
              left: 19px;
            }
          }
        }
      }

      &--27 {
        a {
          &::after {
            background-position: -378px -20px;
            left: -2px;
            top: 2px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 30px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 30px;
              left: 19px;
            }
          }
        }
      }

      &--28 {
        a {
          &::after {
            background-position: -408px -24px;
            left: 1px;
            top: 5px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 30px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 30px;
              left: 19px;
            }
          }
        }
      }

      &--48,
      &--47,
      &--46,
      &--45,
      &--44,
      &--43,
      &--42,
      &--41,
      &--31,
      &--32,
      &--33,
      &--34,
      &--35,
      &--36,
      &--37,
      &--38 {
        a {
          &::after {
            background-position: 0 -143px;
            left: -3px;
            top: 26px;
          }

          span {
            position: absolute;
            top: 14px;
          }
        }

        &.has-implant {
          a {
            &::before {
              background-image: url("./assets/images/implant-graphic-bottom.png");
              left: 15px;
              top: 72px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              left: 10px;
            }
          }
        }
      }

      &--47 {
        a {
          &::after {
            background-position: -34px -143px;
            left: -1px;
          }
        }
      }

      &--46 {
        a {
          &::after {
            background-position: -67px -143px;
            height: 4rem;
            left: -1px;
          }
        }
      }

      &--45,
      &--44 {
        a {
          &::after {
            background-position: -99px -143px;
            height: 4rem;
            left: 1px;
            width: 1.5rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              left: 10px;
            }
          }
        }
      }

      &--43,
      &--42,
      &--41,
      &--31,
      &--32,
      &--33,
      &--34,
      &--35 {
        a {
          &::after {
            background-position: -150px -142px;
            height: 5rem;
            left: 3px;
            width: 1.5rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 34px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 38px;
              left: 10px;
            }
          }
        }
      }

      &--44 {
        a {
          &::after {
            background-position: -124px -143px;
          }
        }
      }

      &--43 {
        &.has-implant {
          a {
            &::before {
              top: 37px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 36px;
              left: 10px;
            }
          }
        }
      }

      &--42 {
        a {
          &::after {
            background-position: -174px -142px;
          }
        }
      }

      &--41 {
        a {
          &::after {
            background-position: -195px -142px;
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 34px;
              left: 10px;
            }
          }
        }
      }

      &--31 {
        a {
          &::after {
            background-position: -221px -142px;
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 34px;
              left: 10px;
            }
          }
        }
      }

      &--32 {
        a {
          &::after {
            background-position: -242px -142px;
          }
        }
      }

      &--33 {
        a {
          &::after {
            background-position: -266px -142px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 36px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 36px;
              left: 9px;
            }
          }
        }
      }

      &--34 {
        a {
          &::after {
            background-position: -291px -142px;
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 34px;
              left: 9px;
            }
          }
        }
      }

      &--35 {
        a {
          &::after {
            background-position: -317px -142px;
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 33px;
              left: 9px;
            }
          }
        }
      }

      &--36,
      &--37,
      &--38 {
        a {
          &::after {
            background-position: -343px -142px;
            height: 5rem;
            left: 0px;
            width: 1.9rem;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 32px;
              left: 15px;
            }
          }
        }

        &.unfavorable {
          a {
            &::before {
              top: 32px;
              left: 10px;
            }
          }
        }
      }

      &--37 {
        a {
          &::after {
            background-position: -377px -142px;
          }
        }
      }

      &--38 {
        a {
          &::after {
            background-position: -408px -142px;
          }
        }
      }
    }
  }

  &.list-current-tooth {
    background: transparent;
    box-shadow: none;
    height: auto;
    margin: 0;
    padding: 0;
    width: 5rem;

    .tooth-list {
      display: block;
      width: 3rem;

      .tooth-list__item {
        pointer-events: none;
      }
    }
  }

  &.has-union-top-items {
    border-top: 2px solid var(--ion-color-primary);

    .tooth-list {
      &__item {
        &.has-union {
          &.tooth-list__item {
            &--18,
            &--17,
            &--16,
            &--15,
            &--14,
            &--13,
            &--12,
            &--11,
            &--21,
            &--22,
            &--23,
            &--24,
            &--25,
            &--26,
            &--27,
            &--28 {
              &.is-selected {
                border: 1px solid var(--ion-color-primary);
                transform: translateY(-8px);
              }

              &::before {
                background: var(--ion-color-primary);
                content: "";
                height: 1.7rem;
                left: 50%;
                margin-left: -2px;
                position: absolute;
                top: -28px;
                transition: ease-in-out 0.3s;
                width: 2px;
              }
            }
          }
        }
      }
    }
  }

  &.has-union-bottom-items {
    border-bottom: 2px solid var(--ion-color-tertiary);

    .tooth-list {
      &__item {
        &.has-union {
          &.tooth-list__item {
            &--48,
            &--47,
            &--46,
            &--45,
            &--44,
            &--43,
            &--42,
            &--41,
            &--31,
            &--32,
            &--33,
            &--34,
            &--35,
            &--36,
            &--37,
            &--38 {
              &.is-selected {
                border: 1px solid var(--ion-color-tertiary);
                transform: translateY(16px);
              }

              &::after {
                background: var(--ion-color-tertiary);
                content: "";
                height: 1.7rem;
                left: 50%;
                margin-left: -1px;
                position: absolute;
                bottom: -28px;
                width: 2px;
                top: auto;
                transition: ease-in-out 0.3s;
              }
            }
          }
        }
      }
    }
  }
`;
