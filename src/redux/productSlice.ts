import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import fetchProducts  from "@/services/fetchProducts";
import { Product, ProductState, SortOrder } from "@/types";



const initialState: ProductState = {
  isLoading: true,
  error: false,
  products: [],
  filteredProducts: [],
};

export const fetchAsyncProducts = createAsyncThunk("fetchProducts", async () => {
  const products = await fetchProducts()
  return products
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchAsyncProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false
      state.products = action.payload.sort((a, b) => a.name.localeCompare(b.name));
      state.filteredProducts = action.payload
    })
    builder.addCase(fetchAsyncProducts.rejected, (state) => {
      state.error = true
    })
  },
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    sort(state, action: PayloadAction<SortOrder>) {
      const { order, suborder } = action.payload;
      if (order === "name") {
        if (suborder === "asc") {
          state.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (suborder === "desc") {
          state.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
      }
      if (order === "description") {
        if (suborder === "asc") {
          state.filteredProducts.sort((a, b) =>
            a.description.localeCompare(b.description)
          );
        } else if (suborder === "desc") {
          state.filteredProducts.sort((a, b) =>
            b.description.localeCompare(a.description)
          );
        }
      }
      if (order === "validityDate") {
        if (suborder === "asc") {
          state.filteredProducts.sort((a, b) =>
            a.validityDate.localeCompare(b.validityDate)
          );
        } else if (suborder === "desc") {
          state.filteredProducts.sort((a, b) =>
            b.validityDate.localeCompare(a.validityDate)
          );
        }
      }
    },
    filterProduct(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    },
    resetState(state) {
      state.filteredProducts = state.products;
    },
  },
});

export const { setProducts, sort, filterProduct, resetState } =
  productSlice.actions;
export default productSlice.reducer;
