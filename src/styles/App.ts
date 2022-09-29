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

		&.family-name {
		  font-size: 1rem;
		  span {
			&::before {
			  content: "Familia";
			  display: block;
			  font-family: var(--font-family-regular);
			  font-size: 0.7rem;
			  margin-top: 0.8rem;
			  margin-bottom: 0.2rem;
			}
		  }
		}
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
  box-shadow: 0 15px 47px 0 rgba(127, 127, 255, 0.14);
  display: block;
  min-height: 200px;
  margin: 2rem 0 2rem 1rem;
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
		background-color: var(--ion-color-primary);
		border-top-left-radius: 10px;
	  }

	  &.table-head {
		padding: 0.8rem 0 0.8rem 1rem;
		position: relative;
	  }

	  &.table-row {
		align-items: flex-start;

		h2 {
		  color: var(--ion-color-dark);
		  font-family: var(--font-family-bold);
		  font-size: 0.9rem;
		}

		.table-row__tooth {
		  h2 {
			font-size: 1.5rem;
			margin-top: 0.7rem;
		  }
		}
	  }

	  .table-row__item {
		height: 35px;
		overflow: hidden;
		position: relative;

		.accordion-button {
		  position: absolute;
		  right: 0;
		  top: 4px;
		  width: 30px;
		  height: 30px;
		  --background: transparent;
		  background: transparent;
		  background-image: url("../assets/icon/chevron-down.svg");
		  background-position: center center;
		  background-repeat: no-repeat;
		  background-size: 25px;
		}

		h2 {
		  color: var(--ion-color-tertiary);
		}
	  }

	  .input-toggle {
		appearance: none;
		height: 40px;
		position: absolute;
		right: 0;
		top: 0;
		width: 40px;
		z-index: 5;
		background: url("../assets/icon/chevron-down.svg") no-repeat center
		  center;
		transition: ease-in-out 0.3s;

		&:checked {
		  transform: rotateX(-180deg);

		  + .table-row__item {
			height: auto;
			overflow: visible;
		  }
		}
	  }

	  ion-col {
		border-bottom: 0;
		border-right: 0;
	  }
	}

	.table-head,
	.table-row {
	  ion-col {
		font-size: 0.7rem;
		font-family: var(--font-family-bold);
		font-weight: normal;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		color: white;
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
	  }
	}

	.form-product {
	  border-radius: 0.4rem;
	  border: 0.1rem solid var(--ion-color-light);
	  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);
	  margin-bottom: 0.6rem;
	  width: 16rem;

	  > div {
		position: relative;

		&.form-product__wrapper {
		  height: 4.5rem;
		}
	  }

	  &__title {
		align-items: center;
		display: flex;
		padding: 0 1rem 0 0;
		height: 4rem;

		ion-ripple-effect {
		  opacity: 0.2;
		}

		img {
		  height: auto;
		  margin-right: 1rem;
		  transform: translateY(-8px);
		  width: 2.8rem;
		  margin-left: -4rem;
		}

		h3 {
		  font-size: 0.8rem;
		  font-family: var(--font-family-bold);
		  text-transform: initial;
		  margin: 0;
		}
	  }

	  &__heading {
		display: flex;
		flex-direction: column;
		height: 4rem;
		margin-left: 1rem;
		width: 10rem;
		justify-content: space-around;

		p {
		  font-family: var(--font-family-bold);
		  text-transform: lowercase;
		  font-size: 0.8rem;
		  color: var(--ion-color-primary);
		  margin: 0;
		}
	  }

	  &__item {
		padding: 1rem 1rem 0 1rem;
	  }

	  &--item {
		animation: ${fadein} ease-in-out .4s forwards;
		position: relative;
		
		h2 {
		  color: var(--ion-color-primary) !important;
		  display: block;
		  font-size: 0.6rem !important;
		  margin: 0.4rem 0.4rem;
		  position: absolute;
		  right: 0;
		  top: 0;
		  text-transform: lowercase;
		}
	  
		&.accessories {
		  	background: rgba(var(--ion-color-tertiary-rgb), 0.2);
		  	border: 0.1rem solid rgba(var(--ion-color-tertiary-rgb), 0.4);
		  	width: 14rem;
			margin-left: 2rem;
			margin-bottom: 1rem;

			&:last-of-type {
				margin-bottom: 0;
			}

		  h2, h4 {
			position: absolute;
			right: 0;
			top: 0;
			margin: 0.4rem;
			font-size: 0.65rem;
			text-transform: lowercase;
		  }

		  h2 {
			color: var(--ion-color-tertiary) !important;
		  }

		  h4 {
			transform: rotate(90deg);
			right: -3rem;
			top: 1.2rem;
			font-size: 0.65rem;
			color: var(--ion-color-tertiary);
			font-family: var(--font-family-bold);
			text-transform: uppercase;
		  }

		  ion-button {
			transform: translateX(-2rem);
		  }
		}

		> div {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		}

		ion-button {
		  height: 1.8rem;
		  margin: 1rem 0.6rem 0 0;
		  width: 6.5rem;
		}
	  }

	  

	  
	}
  }

  .filter-button {
	position: absolute;
	right: 0.5rem;
	top: -0.8rem;
	display: flex;
	grid-gap: 0.5rem;
	height: 2.7rem;

	ion-select {
	  font-family: var(--font-family-bold);
	}
  }

  .select-action {
	z-index: 10;
  }
`;

export const WrapperButtonAddToCart = styled.div`
  align-items: center;
  animation: ${slideinAdd} ease-in-out 0.4s forwards;
  background-color: #aaf9ae;
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
	border-radius: 90px;
	height: 50px;

	span {
	  font-size: 1rem;
	  font-family: var(--font-family-regular);
	  margin-right: 0.3rem;
	}

	strong {
	  color: #aaf9ae;
	  font-size: 1rem;
	  margin-left: 0.3rem;
	}
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
			  background-position: -61px -130px;
			}
		  }
		}
	  }

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
		&.desfavoravel {
		  a {
			&::before {
			  transform: rotate(-28deg);
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

		&.desfavoravel {
		  a {
			&::before {
			  top: 31px;
			  left: 11px;
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

		&.desfavoravel {
		  a {
			&::before {
			  top: 30px;
			  left: 10px;
			}
		  }
		}
	  }

	  &--16 {
		a {
		  &::after {
			background-position: -55px -13px;
			height: 3.5rem;
			top: -1px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 31px;
			  left: 15px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 31px;
			  left: 12px;
			}
		  }
		}
	  }

	  &--15 {
		a {
		  &::after {
			background-position: -83px -6px;
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

		&.desfavoravel {
		  a {
			&::before {
			  top: 28px;
			  left: 11px;
			}
		  }
		}
	  }

	  &--14 {
		a {
		  &::after {
			background-position: -105px -1px;
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
			  left: 13px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 28px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--13 {
		a {
		  &::after {
			background-position: -128px 6px;
			height: 5rem;
			left: -1px;
			top: -17px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 29px;
			  left: 14px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 29px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--12 {
		a {
		  &::after {
			background-position: -157px -3px;
			height: 4.2rem;
			left: 5px;
			top: -8px;
			width: 1.3rem;
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

		&.desfavoravel {
		  a {
			&::before {
			  top: 29px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--11 {
		a {
		  &::after {
			background-position: -175px -2px;
			height: 4.2rem;
			top: -8px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 31px;
			  left: 14px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 30px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--21 {
		a {
		  &::after {
			background-position: -204px -5px;
			height: 4rem;
			left: -2px;
			top: -6px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 29px;
			  left: 15px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 30px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--22 {
		a {
		  &::after {
			background-position: -232px -6px;
			height: 4rem;
			left: 3px;
			top: -7px;
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

		&.desfavoravel {
		  a {
			&::before {
			  top: 27px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--23 {
		a {
		  &::after {
			background-position: -253px 7px;
			height: 5rem;
			left: 3px;
			top: -15px;
			width: 1.5rem;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 31px;
			  left: 16px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 32px;
			  left: 11px;
			}
		  }
		}
	  }

	  &--24 {
		a {
		  &::after {
			background-position: -278px 1px;
			height: 4.5rem;
			left: 3px;
			top: -9px;
			width: 1.4rem;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 31px;
			  left: 17px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 32px;
			  left: 12px;
			}
		  }
		}
	  }

	  &--25 {
		a {
		  &::after {
			background-position: -301px -6px;
			height: 4rem;
			left: 2px;
			top: -2px;
			width: 1.4rem;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 33px;
			  left: 14px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 33px;
			  left: 8px;
			}
		  }
		}
	  }

	  &--26 {
		a {
		  &::after {
			background-position: -322px -8px;
			height: 4rem;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 37px;
			  left: 15px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 37px;
			  left: 11px;
			}
		  }
		}
	  }

	  &--27 {
		a {
		  &::after {
			background-position: -350px -13px;
			left: -2px;
			top: 2px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 33px;
			  left: 13px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 34px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--28 {
		a {
		  &::after {
			background-position: -378px -14px;
			left: 1px;
			top: 5px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 35px;
			  left: 15px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 35px;
			  left: 10px;
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
			background-position: 0 -131px;
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
			  left: 13px;
			  top: 72px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  left: 10px;
			  transform: rotate(26deg);
			}
		  }
		}
	  }

	  &--48 {
		&.desfavoravel {
		  a {
			&::before {
			  left: 8px;
			}
		  }
		}
	  }

	  &--47 {
		a {
		  &::after {
			background-position: -32px -129px;
			left: -1px;
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  transform: rotate(26deg);
			}
		  }
		}
	  }

	  &--46 {
		a {
		  &::after {
			background-position: -61px -130px;
			height: 4rem;
			left: -1px;
		  }
		}
	  }

	  &--45,
	  &--44 {
		a {
		  &::after {
			background-position: -90px -131px;
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

		&.desfavoravel {
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

		&.desfavoravel {
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
			background-position: -115px -131px;
		  }
		}
	  }

	  &--43 {
		a {
		  &::after {
			background-position: -138px -127px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 77px;
			  left: 15px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 77px;
			  left: 10px;
			}
		  }
		}
	  }

	  &--42 {
		a {
		  &::after {
			background-position: -161px -125px;
			width: 1.4rem;
		  }
		}

		&.favoravel {
		  a {
			&::before {
			  top: 81px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 81px;
			}
		  }
		}
	  }

	  &--41 {
		a {
		  &::after {
			background-position: -181px -125px;
		  }
		}

		&.favoravel {
		  a {
			&::before {
			  top: 80px;
			  left: 14px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 79px;
			  left: 10px;
			}
		  }
		}
	  }

	  &--31 {
		a {
		  &::after {
			background-position: -203px -126px;
		  }
		}

		&.favoravel {
		  a {
			&::before {
			  top: 78px;
			  left: 16px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 78px;
			  left: 10px;
			}
		  }
		}
	  }

	  &--32 {
		a {
		  &::after {
			background-position: -225px -126px;
			width: 1.3rem;
		  }
		}

		&.favoravel {
		  a {
			&::before {
			  top: 80px;
			  left: 14px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 80px;
			}
		  }
		}
	  }

	  &--33 {
		a {
		  &::after {
			background-position: -246px -125px;
		  }
		}

		&.has-implant {
		  a {
			&::before {
			  top: 80px;
			  left: 14px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 80px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--34 {
		a {
		  &::after {
			background-position: -269px -125px;
		  }
		}

		&.favoravel {
		  a {
			&::before {
			  top: 78px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 77px;
			  left: 9px;
			}
		  }
		}
	  }

	  &--35 {
		a {
		  &::after {
			background-position: -292px -125px;
		  }
		}

		&.favoravel {
		  a {
			&::before {
			  top: 77px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 76px;
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
			background-position: -318px -125px;
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

		&.favoravel {
		  a {
			&::before {
			  top: 77px;
			}
		  }
		}

		&.desfavoravel {
		  a {
			&::before {
			  top: 76px;
			  left: 10px;
			}
		  }
		}
	  }

	  &--37 {
		a {
		  &::after {
			background-position: -349px -125px;
		  }
		}
	  }

	  &--38 {
		a {
		  &::after {
			background-position: -378px -126px;
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
		&.multiplo {
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
	border-bottom: 2px solid var(--ion-color-primary);

	.tooth-list {
	  &__item {
		&.multiplo {
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
				border: 1px solid var(--ion-color-primary);
				transform: translateY(16px);
			  }

			  &::after {
				background: var(--ion-color-primary);
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
