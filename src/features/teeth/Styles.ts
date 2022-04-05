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

  &.has-union-top-items {
    border-top: 3px solid var(--ion-color-tertiary);

    .tooth-list {
      &__item {
        &.has-union {
          transition: ease-in-out 0.3s;
          will-change: contents;

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
          transition: ease-in-out 0.3s;
          will-change: contents;

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
      transition: ease-in-out 0.3s;
      will-change: contents;

      &.ripple-parent {
        position: relative;
        overflow: hidden;
        border-radius: 90px;
      }

      a {
        align-items: flex-end;
        color: var(--ion-color-dark);
        display: flex;
        height: 100%;
        justify-content: center;
        padding-bottom: 1rem;
        position: relative;
        text-decoration: none;
        width: 100%;
        z-index: 2;

        &::after {
          content: "";
          background-image: url("./assets/images/sprite.png");
          background-repeat: no-repeat;
          background-position: left top;
          position: absolute;
          left: 0;
          top: 0;
          margin: 1.6rem 0 0 0.5rem;
          width: 2rem;
          height: 3.5rem;
        }
      }

      &.is-selected {
        border: 1px dashed var(--ion-color-tertiary);
      }

      &.tooth-list__item--18 {
        &::before {
          background-position: -2px -24px;
          background-size: 469px;
        }
      }
    }
  }
`;
