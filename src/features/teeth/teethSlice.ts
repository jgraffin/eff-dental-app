import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const apiTeethURL = 'https://640cf0df1a18a5db836e754a.mockapi.io/api/teeth';

export type TeethType = {
	id?: string;
	catalogue?: string;
	teethNumber?: string;
	brand?: string;
	specification?: string;
	implant?: string;
	platform?: string;
	unionType?: string;
	position?: string;
	selected?: boolean;
	family?: string;
};

const initialState = {
	items: [],
	status: "idle",
	error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	try {
		const response = await axios.get(
			apiTeethURL
		);
		return response.data;
	} catch (err: any) {
		let message =
			typeof err.response !== "undefined"
				? err.response.data.message
				: err.message;
		console.warn("error", message);
	}
});

const teethSlice = createSlice({
	name: "teeth",
	initialState,
	reducers: {
		itemUpdated(state: RootState, action: PayloadAction<TeethType>) {
			const {
				id,
				catalogue,
				teethNumber,
				brand,
				platform,
				specification,
				implant,
				family,
				unionType,
				position,
				selected,
			} = action.payload;
			const existingItem = state.items.find(
				(item: TeethType) => item.id === id
			);

			if (existingItem) {
				existingItem.catalogue = catalogue;
				existingItem.teethNumber = teethNumber;
				existingItem.brand = brand;
				existingItem.platform = platform;
				existingItem.specification = specification;
				existingItem.implant = implant;
				existingItem.family = family;
				existingItem.unionType = unionType;
				existingItem.position = position;
				existingItem.selected = selected;
			}

			axios.put(
				`${apiTeethURL}/${id}`,
				{
					catalogue,
					teethNumber,
					brand,
					platform,
					specification,
					implant,
					family,
					unionType,
					position,
					selected,
				}
			);
		},
		deleteItems(state: RootState, action: PayloadAction<TeethType>) {
			const { id } = action.payload;
			
			axios.delete(`${apiTeethURL}/${id}`).then((items: any) => {
				// TODO delete all items
		 	});
		}
	},
	extraReducers(builder: any) {
		builder
			.addCase(fetchPosts.pending, (state: RootState) => {
				state.status = "loading";
			})
			.addCase(
				fetchPosts.fulfilled,
				(state: RootState, action: PayloadAction<string>) => {
					state.status = "succeeded";
					state.items = state.items.concat(action.payload);
				}
			)
			.addCase(fetchPosts.rejected, (state: RootState, action: any) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { itemUpdated } = teethSlice.actions;

export default teethSlice.reducer;

export const selectAllItems = (state: RootState) => state.teeth.items;
