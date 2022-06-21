import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ToothSchemeWrapper = styled.div`
  .tooth-scheme {
    align-items: center;
    background-color: white;
    background-image: url("./assets/images/tooth-grid-scheme.png");
    background-position: center center;
    background-repeat: repeat-x;
    background-size: 90px;
    border-radius: 30px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    height: 122px;
    justify-content: center;
    position: relative;
    width: 70px;

    &::after {
      background-color: var(--ion-color-primary);
      border-radius: 90px;
      bottom: 10px;
      content: "";
      height: 4px;
      opacity: 0;
      position: absolute;
      transition: ease-in-out 0.4s;
      width: 0;
      left: 50%;
      margin-left: -25px;
    }

    &__image {
      background-image: url("./assets/images/sprite.png");
      background-position: -3px -16px;
      background-repeat: no-repeat;
      height: 4rem;
      position: relative;
      width: 1.8rem;
    }

    &__number {
      color: var(--ion-color-primary);
      font-family: var(--font-family-bold);
    }

    &.has-implant {
      .tooth-scheme__image {
        &::before {
          animation: ${fadein} ease-in-out 0.6s forwards;
          background-image: url("./assets/images/implant-graphic-top.png");
          background-repeat: no-repeat;
          background-size: 16px;
          content: "";
          height: 2.2rem;
          position: absolute;
          transition: ease-in-out 0.2s;
          width: 1rem;
        }
      }
    }

    &.is-selected {
      .tooth-scheme__image {
        background-image: url("./assets/images/sprite-marked.png");
      }
    }

    &.multiplo {
      position: relative;

      &::after {
        opacity: 1;
        width: 50px;
      }
    }

    &--18 {
      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.4rem;
            left: 0.4rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.4rem;
              left: 0.2rem;
              transform: rotate(-18deg);
            }
          }
        }
      }
    }

    &--17 {
      .tooth-scheme__image {
        background-position: -32px -16px;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.4rem;
            left: 0.4rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.4rem;
              left: 0;
              transform: rotate(-28deg);
            }
          }
        }
      }
    }

    &--16 {
      .tooth-scheme__image {
        background-position: -60px -19px;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.25rem;
            left: 0.45rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.3rem;
              left: 0.65rem;
            }
          }
        }
      }
    }

    &--15 {
      .tooth-scheme__image {
        background-position: -90px -13px;
        width: 1.6rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.4rem;
            left: 0.3rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.4rem;
              left: 0.5rem;
            }
          }
        }
      }
    }

    &--14 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -113px -7px;
        height: 4.5rem;
        width: 1.6rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.7rem;
            left: 0.3rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.7rem;
              left: 0.5rem;
            }
          }
        }
      }
    }

    &--13 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -141px -3px;
        height: 4.6rem;
        top: -3px;
        width: 1.6rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.9rem;
            left: 0.3rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.9rem;
              left: 0.5rem;
            }
          }
        }
      }
    }

    &--12 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -170px -11px;
        height: 4.6rem;
        top: -3px;
        width: 1.2rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.4rem;
            left: 0.1rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.4rem;
              left: 0.4rem;
            }
          }
        }
      }
    }

    &--11 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -189px -10px;
        height: 4.6rem;
        top: -3px;
        width: 1.9rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.5rem;
            left: 0.4rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.6rem;
              left: 0.7rem;
            }
          }
        }
      }
    }

    &--21 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -221px -11px;
        height: 4.6rem;
        top: -3px;
        width: 1.9rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.5rem;
            left: 0.6rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.5rem;
              left: 0.8rem;
            }
          }
        }
      }
    }

    &--22 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -250px -11px;
        height: 4.6rem;
        top: -3px;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.4rem;
            left: 0.25rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.4rem;
              left: 0.5rem;
            }
          }
        }
      }
    }

    &--23 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -274px -3px;
        height: 4.6rem;
        top: -3px;
        width: 1.5rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.9rem;
            left: 0.25rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.9rem;
              left: 0.5rem;
            }
          }
        }
      }
    }

    &--24 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -302px -7px;
        height: 4.6rem;
        top: -3px;
        width: 1.5rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.7rem;
            left: 0.25rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.7rem;
              left: 0.5rem;
            }
          }
        }
      }
    }

    &--25 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -325px -15px;
        height: 4.2rem;
        top: -3px;
        width: 1.5rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.3rem;
            left: 0.25rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.3rem;
              left: 0.5rem;
            }
          }
        }
      }
    }

    &--26 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -348px -18px;
        height: 4.2rem;
        top: -3px;
        width: 1.8rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.3rem;
            left: 0.4rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.3rem;
              left: 0.7rem;
            }
          }
        }
      }
    }

    &--27 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -378px -20px;
        height: 4.2rem;
        top: -3px;
        width: 1.9rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0.2rem;
            left: 0.5rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0.2rem;
              left: 0.7rem;
            }
          }
        }
      }
    }

    &--28 {
      height: 130px;

      .tooth-scheme__image {
        background-position: -408px -24px;
        height: 4rem;
        top: -3px;
        width: 1.9rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 0;
            left: 0.45rem;
          }
        }

        &.desfavoravel {
          .tooth-scheme__image {
            &::before {
              top: 0;
              left: 0.7rem;
            }
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
      .tooth-scheme__image {
        background-position: -2px -141px;
        height: 4rem;
        top: -3px;
        width: 1.9rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            background-image: url("./assets/images/implant-graphic-bottom.png");
            top: 22px;
            left: 0.45rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 22px;
            left: 0.2rem;
          }
        }
      }
    }

    &--47,
    &--46 {
      .tooth-scheme__image {
        background-position: -35px -143px;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 20px;
            left: 0.45rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            left: 0.25rem;
            transform: rotate(20deg);
          }
        }
      }
    }

    &--46 {
      .tooth-scheme__image {
        background-position: -67px -143px;
      }
    }

    &--45 {
      .tooth-scheme__image {
        background-position: -96px -143px;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 20px;
            left: 0.6rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 19px;
            left: 0.3rem;
          }
        }
      }
    }

    &--44 {
      .tooth-scheme__image {
        background-position: -125px -143px;
        width: 1.6rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0.3rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0;
          }
        }
      }
    }

    &--43 {
      .tooth-scheme__image {
        background-position: -150px -142px;
        height: 4.5rem;
        width: 1.6rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 24px;
            left: 0.25rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 23px;
            left: 0;
          }
        }
      }
    }

    &--42 {
      .tooth-scheme__image {
        background-position: -174px -142px;
        height: 4.5rem;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 25px;
            left: 0.25rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 25px;
            left: -1px;
          }
        }
      }
    }

    &--41 {
      .tooth-scheme__image {
        background-position: -195px -142px;
        height: 4.5rem;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 23px;
            left: 0.25rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 23px;
            left: -1px;
          }
        }
      }
    }

    &--31 {
      .tooth-scheme__image {
        background-position: -221px -142px;
        height: 4.5rem;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 23px;
            left: 0.25rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 23px;
            left: -1px;
          }
        }
      }
    }

    &--32 {
      .tooth-scheme__image {
        background-position: -242px -142px;
        height: 4.5rem;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 26px;
            left: 0.25rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 26px;
            left: -1px;
          }
        }
      }
    }

    &--33 {
      .tooth-scheme__image {
        background-position: -266px -142px;
        height: 4.5rem;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 24px;
            left: 0.25rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 24px;
            left: -1px;
          }
        }
      }
    }

    &--34 {
      .tooth-scheme__image {
        background-position: -291px -142px;
        height: 4.5rem;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 22px;
            left: 0.25rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 22px;
            left: -1px;
          }
        }
      }
    }

    &--35 {
      .tooth-scheme__image {
        background-position: -317px -142px;
        height: 4.5rem;
        width: 1.4rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 22px;
            left: 0.23rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 22px;
            left: -2px;
          }
        }
      }
    }

    &--36 {
      .tooth-scheme__image {
        background-position: -343px -142px;
        height: 4.5rem;
        width: 2rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0.5rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0.2rem;
          }
        }
      }
    }

    &--37 {
      .tooth-scheme__image {
        background-position: -377px -142px;
        height: 4.5rem;
        width: 2rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0.5rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0.2rem;
          }
        }
      }
    }

    &--38 {
      .tooth-scheme__image {
        background-position: -408px -142px;
        height: 4.5rem;
        width: 2rem;
      }

      &.has-implant {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0.5rem;
          }
        }
      }

      &.desfavoravel {
        .tooth-scheme__image {
          &::before {
            top: 21px;
            left: 0.2rem;
          }
        }
      }
    }
  }
`;
