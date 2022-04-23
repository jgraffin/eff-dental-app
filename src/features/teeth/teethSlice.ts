import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type TeethType = {
  id?: string;
  catalogo?: string;
  dente?: string;
  marca?: string;
  especificacao?: string;
  implante?: string;
  plataforma?: string;
  uniaoImplante?: boolean;
  posicao?: boolean;
  selecionado?: boolean;
  familia?: string;
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
        catalogo,
        dente,
        marca,
        plataforma,
        especificacao,
        implante,
        familia,
        uniaoImplante,
        posicao,
        selecionado,
      } = action.payload;
      const existingItem = state.items.find(
        (item: TeethType) => item.id === id
      );

      if (existingItem) {
        existingItem.catalogo = catalogo;
        existingItem.dente = dente;
        existingItem.marca = marca;
        existingItem.plataforma = plataforma;
        existingItem.especificacao = especificacao;
        existingItem.implante = implante;
        existingItem.familia = familia;
        existingItem.uniaoImplante = uniaoImplante;
        existingItem.posicao = posicao;
        existingItem.selecionado = selecionado;
      }

      axios.put(
        `https://620c58aab5736325938c1678.mockapi.io/api/v1/teeth/${id}`,
        {
          catalogo,
          dente,
          marca,
          plataforma,
          especificacao,
          implante,
          familia,
          uniaoImplante,
          posicao,
          selecionado,
        }
      );
    },
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
