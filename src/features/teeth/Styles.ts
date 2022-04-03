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
          transform: translateY(-8px);
          transition: ease-in-out 0.3s;
          will-change: contents;

          &::before {
            background: var(--ion-color-tertiary);
            content: "";
            height: 1.7rem;
            left: 50%;
            margin-left: -2px;
            position: absolute;
            top: -28px;
            width: 4px;
            transition: ease-in-out 0.3s;
          }

          &.is-selected {
            border: 2px solid var(--ion-color-tertiary);
          }
        }

        transform: translateY(0);

        &.tooth-list__item--48.has-union,
        &.tooth-list__item--47.has-union,
        &.tooth-list__item--46.has-union,
        &.tooth-list__item--45.has-union,
        &.tooth-list__item--44.has-union,
        &.tooth-list__item--43.has-union,
        &.tooth-list__item--42.has-union,
        &.tooth-list__item--41.has-union,
        &.tooth-list__item--31.has-union,
        &.tooth-list__item--32.has-union,
        &.tooth-list__item--33.has-union,
        &.tooth-list__item--34.has-union,
        &.tooth-list__item--35.has-union,
        &.tooth-list__item--36.has-union,
        &.tooth-list__item--37.has-union,
        &.tooth-list__item--38.has-union {
          &.is-selected {
            border: 1px dashed var(--ion-color-tertiary);
          }

          transform: translateY(0);

          &::before {
            display: none;
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

          &::before {
            background: var(--ion-color-tertiary);
            content: "";
            height: 1.7rem;
            left: 50%;
            margin-left: -2px;
            position: absolute;
            top: -28px;
            width: 4px;
            transition: ease-in-out 0.3s;
          }

          &.is-selected {
            border: 2px solid var(--ion-color-tertiary);
          }
        }

        &.tooth-list__item--48.has-union,
        &.tooth-list__item--47.has-union,
        &.tooth-list__item--46.has-union,
        &.tooth-list__item--45.has-union,
        &.tooth-list__item--44.has-union,
        &.tooth-list__item--43.has-union,
        &.tooth-list__item--42.has-union,
        &.tooth-list__item--41.has-union,
        &.tooth-list__item--31.has-union,
        &.tooth-list__item--32.has-union,
        &.tooth-list__item--33.has-union,
        &.tooth-list__item--34.has-union,
        &.tooth-list__item--35.has-union,
        &.tooth-list__item--36.has-union,
        &.tooth-list__item--37.has-union,
        &.tooth-list__item--38.has-union {
          &.is-selected {
            border: 2px solid var(--ion-color-tertiary);
          }

          transform: translateY(8px);

          &::before {
            display: block;
            top: auto;
            bottom: -28px;
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
      }

      &.is-selected {
        border: 1px dashed var(--ion-color-tertiary);
      }

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

      &.tooth-list__item--18 {
        &::before {
          background-position: -2px -24px;
          background-size: 469px;
        }
      }
    }
  }
`;
