import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type TeethType = {
  id: string;
  catalog: string;
  toothNumber: string;
  brand: string;
  platform: string;
  specification: string;
  implant: string;
  smp: string;
  unionImplant: boolean;
  position: boolean;
  isSelected: boolean;
};

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://620c58aab5736325938c1678.mockapi.io/api/v1/teeth"
  );
  return response.data;
});

const teethSlice = createSlice({
  name: "teeth",
  initialState,
  reducers: {
    itemUpdated(state: RootState, action: PayloadAction<TeethType>) {
      const {
        id,
        catalog,
        toothNumber,
        brand,
        platform,
        specification,
        implant,
        smp,
        unionImplant,
        position,
        isSelected,
      } = action.payload;
      const existingItem = state.items.find(
        (item: TeethType) => item.id === id
      );

      console.log("existingItem", existingItem);

      if (existingItem) {
        existingItem.catalog = catalog;
        existingItem.toothNumber = toothNumber;
        existingItem.brand = brand;
        existingItem.platform = platform;
        existingItem.specification = specification;
        existingItem.implant = implant;
        existingItem.smp = smp;
        existingItem.unionImplant = unionImplant;
        existingItem.position = position;
        existingItem.isSelected = isSelected;
      }

      axios.put(
        `https://620c58aab5736325938c1678.mockapi.io/api/v1/teeth/${id}`,
        {
          catalog,
          toothNumber,
          brand,
          platform,
          specification,
          implant,
          smp,
          unionImplant,
          position,
          isSelected,
        }
      );
    },
  },
  extraReducers(builder: any) {
    builder
      .addCase(fetchPosts.pending, (state: RootState, action: any) => {
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
