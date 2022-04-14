import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const List = styled.div`
  background: var(--ion-color-primary-contrast);
  border-radius: 20px 0 0 20px;
  box-shadow: 0 15px 47px 0 rgba(29, 132, 123, 0.14);
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

      &.ripple-parent {
        position: relative;
        overflow: hidden;
        border-radius: 90px;
      }

      a {
        align-items: flex-end;
        border-radius: 90px;
        color: var(--ion-color-dark);
        font-family: var(--font-family-light);
        display: flex;
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

      &.is-selected {
        border: 1px dashed var(--ion-color-tertiary);

        a {
          color: var(--ion-color-tertiary);
          font-family: var(--font-family-bold);

          &::after {
            background-image: url("./assets/images/sprite-marked.png");
          }
        }
      }

      &--18 {
        a {
          &::after {
            background-position: -2px -24px;
            background-size: 469px;
          }
        }
      }

      &--17 {
        a {
          &::after {
            background-position: -34px -24px;
            background-size: 469px;
          }
        }
      }
    }
  }

  &.has-union-top-items {
    border-top: 3px solid var(--ion-color-tertiary);

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
                border: 2px solid var(--ion-color-tertiary);
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
    border-bottom: 3px solid var(--ion-color-tertiary);

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
                border: 2px solid var(--ion-color-tertiary);
                transform: translateY(16px);
              }

              &::after {
                background: var(--ion-color-tertiary);
                content: "";
                height: 1.7rem;
                left: 50%;
                margin-left: -2px;
                position: absolute;
                bottom: -28px;
                width: 4px;
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
