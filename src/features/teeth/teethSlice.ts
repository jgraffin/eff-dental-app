import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type TeethType = {
  id: string;
  brand: string;
  connection: string;
  platform: string;
  position: "well-positioned";
  isSelected: boolean;
  toothNumber: string;
  unionImplant: boolean;
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
        brand,
        unionImplant,
        connection,
        platform,
        position,
        isSelected,
        toothNumber,
      } = action.payload;
      const existingItem = state.items.find(
        (item: TeethType) => item.id === id
      );
      if (existingItem) {
        existingItem.brand = brand;
        existingItem.unionImplant = unionImplant;
        existingItem.connection = connection;
        existingItem.platform = platform;
        existingItem.position = position;
        existingItem.isSelected = isSelected;
        existingItem.toothNumber = toothNumber;
      }

      axios.put(
        `https://620c58aab5736325938c1678.mockapi.io/api/v1/teeth/${id}`,
        {
          brand,
          unionImplant,
          connection,
          platform,
          position,
          isSelected,
          toothNumber,
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
