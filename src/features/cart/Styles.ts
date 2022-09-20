import styled from "styled-components";

export const CartList = styled.ul`
  display: flex;
  height: auto;
  padding: 0 1rem;
  width: 92%;
  list-style-type: none;
  flex-direction: column;
  border-radius: 0.5rem;
  margin: 1rem auto;
  border: 2px solid transparent;

  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    padding: 0.8rem 0;
    width: 100%;

    &:last-of-type {
      border-bottom: 0;
    }

    &.cart-list__empty {
      border-bottom: 0;
      justify-content: center;
    }
  }

  &.checkout {
    &-loading {
      opacity: 0.3;
    }

    &-ready {
      opacity: 1;
    }

    &-error {
      border: 2px solid var(--ion-color-danger);
      opacity: 1;
    }
  }

  .cart-list__image {
    display: block;
    height: 3rem;
    padding: 0.4rem;
    background: white;
    width: 3rem;
    border-radius: 0.4rem;
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
    overflow: hidden;

    img {
      display: block;
      width: 2rem;
      object-fit: scale-down;
      height: 100%;
      margin: 0 auto;
    }
  }

  .cart-list__title {
    display: block;
    height: auto;
    width: 50%;

    h2 {
      font-size: 0.7rem;
      font-family: var(--font-family-bold);
      margin: 0;
      padding: 0;

      small {
        color: var(--ion-color-primary);
        font-size: 0.6rem;
      }

      strong {
        color: var(--ion-color-primary);
        display: block;
        font-family: var(--font-family-bold);
        font-size: 0.6rem;
        margin-bottom: 0.2rem;
        text-transform: uppercase;
      }
    }
  }

  .cart-list__field {
    align-items: center;
    display: flex;
    height: auto;
    width: 30%;
    margin-left: auto;

    input {
      background-color: white;
      border-radius: 0.4rem;
      padding: 0.4rem;
      text-align: center;
    }

    .cart-list__field-delete {
      position: relative;
      margin: 0 0 0 0.5rem;
      padding: 0;
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      --background: transparent;
      overflow: hidden;

      &::before {
        background-image: url("/assets/icon/delete-forever-outline.svg");
        content: "";
        display: block;
        height: 1.5rem;
        width: 1.5rem;
        position: absolute;
        left: 0;
        top: 0;
        margin: 0.25rem;
      }
    }
  }
`;
