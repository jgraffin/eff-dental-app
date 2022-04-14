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
    width: 82px;

    &::after {
      background-color: #7575f8;
      border-radius: 90px;
      bottom: 10px;
      content: "";
      height: 4px;
      opacity: 0;
      position: absolute;
      transition: ease-in-out 0.6s;
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
      color: #7575f8;
      font-family: var(--font-family-bold);
    }

    &.has-implant {
      .tooth-scheme__image {
        &::before {
          animation: ${fadein} ease-in-out 0.6s forwards;
          background-image: url("./assets/images/implant-graphic.png");
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
      &.has-implant {
        .tooth-scheme__image {
          &::before {
            animation: ${rotate} ease-in-out 0.6s forwards;
          }
        }
      }
    }

    &.is-selected {
      .tooth-scheme__image {
        background-image: url("./assets/images/sprite-marked.png");
      }
    }

    &.has-union {
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

        &.unfavorable {
          .tooth-scheme__image {
            &::before {
              top: 0.4rem;
              left: 0.65rem;
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

        &.unfavorable {
          .tooth-scheme__image {
            &::before {
              top: 0.4rem;
              left: 0.65rem;
            }
          }
        }
      }
    }
  }
`;
