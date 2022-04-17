import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;

  .button-remove {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const List = styled.div`
  background: var(--ion-color-primary-contrast);
  border-radius: 20px 0 0 20px;
  box-shadow: 0 15px 47px 0 rgba(127, 127, 255, 0.14);
  display: block;
  height: 325px;
  margin: 3rem 0 0 1rem;
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
          width: 2rem;
          z-index: -1;
        }
      }

      &.has-implant {
        a {
          &::before {
            animation: ${fadein} ease-in-out 0.6s forwards;
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

      &.unfavorable {
        a {
          &::before {
            animation: ${rotate} ease-in-out 0.6s forwards;
          }
        }
      }

      &.ripple-parent {
        position: relative;
        overflow: hidden;
        border-radius: 90px;
      }

      &.is-selected {
        border: 1px dashed var(--ion-color-tertiary);

        a {
          color: var(--ion-color-tertiary);
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
            background-position: -1px -24px;
            left: -2px;
            top: 2px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 27px;
              left: 14px;
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

      &--17 {
        a {
          &::after {
            background-position: -30px -21px;
          }
        }

        &.has-implant {
          a {
            &::before {
              top: 27px;
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

  &.has-union-top-items {
    border-top: 2px solid var(--ion-color-tertiary);

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
                border: 1px solid var(--ion-color-tertiary);
                transform: translateY(-8px);
              }

              &::before {
                background: var(--ion-color-tertiary);
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
