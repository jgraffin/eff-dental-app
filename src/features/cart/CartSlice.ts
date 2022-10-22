import {
	createSlice,
	createSelector,
	PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface CartState {
	items: {
		[id: string]: number;
	};
	values: [];
}

const initialState: CartState = {
	items: {},
	values: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(
			state: RootState, 
			action: PayloadAction<string>
		) {
			const id = action.payload;

			if (state.items[id]) {
				state.items[id]++;
			} else {
				state.items[id] = 1;
			}
		},

		removeFromCart(
			state: RootState, 
			action: PayloadAction<{ id: string; clearCart: boolean }>
		) {
			const { id, clearCart } = action.payload;
			delete state.items[id];

			if (clearCart) {
				state.items = {}
			}
		},

		updateQuantity(
			state: RootState,
			action: PayloadAction<{ id: string; quantity: number }>
		) {
			const { id, quantity } = action.payload;
			state.items[id] = quantity;
		},
	}
});

export const { addToCart, removeFromCart, updateQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;

export function getNumItems(state: RootState) {
	let numItems = 0;
	for (let id in state.cart.items) {
		numItems += state.cart.items[id];
	}

	return numItems;
}

export const getMemoizedNumItems: any = createSelector(
	(state: RootState) => state.cart.items,
	(items) => {
		let numItems = 0;
		for (let id in items) {
			numItems += items[id];
		}
		
		return numItems;
	}
);

