import {
	createSlice,
	createAsyncThunk,
	createSelector,
	PayloadAction,
} from "@reduxjs/toolkit";
import { checkout, CartItems } from "../../app/api";
import { RootState } from "../../app/store";

type CheckoutState = "LOADING" | "READY" | "ERROR";
export interface CartState {
	items: {
		[id: string]: number;
	};
	checkoutState: CheckoutState;
	errorMessage: string;
	values: [];
}

const initialState: CartState = {
	items: {},
	checkoutState: "READY",
	errorMessage: "",
	values: [],
};

export const checkoutCart = createAsyncThunk(
	"cart/checkout",
	async (items: CartItems) => {
		const response = checkout(items);
		return response;
	}
);

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state: RootState, action: PayloadAction<string>) {
			const id = action.payload;
			if (state.items[id]) {
				state.items[id]++;
			} else {
				state.items[id] = 1;
			}
		},
		removeFromCart(state: RootState, action: PayloadAction<string>) {
			delete state.items[action.payload];
		},
		updateQuantity(
			state: RootState,
			action: PayloadAction<{ id: string; quantity: number }>
		) {
			const { id, quantity } = action.payload;
			state.items[id] = quantity;
		},
	},
	extraReducers: function (builder) {
		builder.addCase(checkoutCart.pending, (state, action) => {
			state.checkoutState = "LOADING";
		});
		builder.addCase(checkoutCart.fulfilled, (state, action) => {
			state.checkoutState = "READY";
		});
		builder.addCase(checkoutCart.rejected, (state, action) => {
			state.checkoutState = "ERROR";
			state.errorMessage = action.error.message || "";
		});
	},
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

