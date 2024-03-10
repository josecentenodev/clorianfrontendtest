import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  description: string;
  validityDate: string;
  cost: number;
  imageUrl: string;
  altImg: string;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
}

interface SortOrder {
  order: string;
  suborder: string;
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "Jazz Under the Stars",
      description:
        "Relax and unwind with smooth jazz melodies under the twinkling night sky.",
      validityDate: "2024-03-31",
      cost: 13.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 2,
      name: "Broadway Nights: The Musical Extravaganza",
      description:
        "Immerse yourself in the magic of Broadway with a night of enchanting performances and show-stopping tunes.",
      validityDate: "2024-04-14",
      cost: 10.75,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 3,
      name: "Gastronomy Gala: A Culinary Journey",
      description:
        "Embark on a culinary adventure and indulge in exquisite dishes from around the world at our gastronomy gala.",
      validityDate: "2024-03-23",
      cost: 9.5,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 4,
      name: "Artisan Market: Handcrafted Treasures",
      description:
        "Discover unique treasures and artisanal creations at our vibrant market filled with local talent.",
      validityDate: "2024-05-08",
      cost: 10.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 5,
      name: "Fitness Fiesta: Energize Your Body",
      description:
        "Get ready to sweat and groove with high-energy workouts and dance sessions at our fitness fiesta.",
      validityDate: "2024-06-08",
      cost: 15.99,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 6,
      name: "Tech Talk: Innovation Insights",
      description:
        "Gain valuable insights into the latest trends and innovations shaping the tech industry at our informative tech talk.",
      validityDate: "2024-04-08",
      cost: 9.0,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 7,
      name: "Family Fun Day: Joyful Moments",
      description:
        "Create lasting memories and enjoy a day filled with laughter, games, and family-friendly activities at our fun-filled event.",
      validityDate: "2024-02-01",
      cost: 10.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 8,
      name: "Fashion Showcase: Style Inspiration",
      description:
        "Experience the glamour of the runway and discover the latest fashion trends at our stylish showcase.",
      validityDate: "2023-12-20",
      cost: 15.29,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 9,
      name: "Wellness Retreat: Mind, Body, Soul",
      description:
        "Recharge and rejuvenate with holistic wellness activities designed to nurture your mind, body, and soul.",
      validityDate: "2024-03-25",
      cost: 15.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 10,
      name: "Adventure Expedition: Outdoor Thrills",
      description:
        "Embark on an exhilarating outdoor adventure and explore breathtaking landscapes and adrenaline-pumping activities.",
      validityDate: "2024-05-24",
      cost: 10.25,
      imageUrl: "",
      altImg: "",
    },
  ],
  filteredProducts: [
    {
      id: 1,
      name: "Jazz Under the Stars",
      description:
        "Relax and unwind with smooth jazz melodies under the twinkling night sky.",
      validityDate: "2024-03-31",
      cost: 13.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 2,
      name: "Broadway Nights: The Musical Extravaganza",
      description:
        "Immerse yourself in the magic of Broadway with a night of enchanting performances and show-stopping tunes.",
      validityDate: "2024-04-14",
      cost: 10.75,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 3,
      name: "Gastronomy Gala: A Culinary Journey",
      description:
        "Embark on a culinary adventure and indulge in exquisite dishes from around the world at our gastronomy gala.",
      validityDate: "2024-03-23",
      cost: 9.5,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 4,
      name: "Artisan Market: Handcrafted Treasures",
      description:
        "Discover unique treasures and artisanal creations at our vibrant market filled with local talent.",
      validityDate: "2024-05-08",
      cost: 10.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 5,
      name: "Fitness Fiesta: Energize Your Body",
      description:
        "Get ready to sweat and groove with high-energy workouts and dance sessions at our fitness fiesta.",
      validityDate: "2024-06-08",
      cost: 15.99,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 6,
      name: "Tech Talk: Innovation Insights",
      description:
        "Gain valuable insights into the latest trends and innovations shaping the tech industry at our informative tech talk.",
      validityDate: "2024-04-08",
      cost: 9.0,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 7,
      name: "Family Fun Day: Joyful Moments",
      description:
        "Create lasting memories and enjoy a day filled with laughter, games, and family-friendly activities at our fun-filled event.",
      validityDate: "2024-02-01",
      cost: 10.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 8,
      name: "Fashion Showcase: Style Inspiration",
      description:
        "Experience the glamour of the runway and discover the latest fashion trends at our stylish showcase.",
      validityDate: "2023-12-20",
      cost: 15.29,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 9,
      name: "Wellness Retreat: Mind, Body, Soul",
      description:
        "Recharge and rejuvenate with holistic wellness activities designed to nurture your mind, body, and soul.",
      validityDate: "2024-03-25",
      cost: 15.25,
      imageUrl: "",
      altImg: "",
    },
    {
      id: 10,
      name: "Adventure Expedition: Outdoor Thrills",
      description:
        "Embark on an exhilarating outdoor adventure and explore breathtaking landscapes and adrenaline-pumping activities.",
      validityDate: "2024-05-24",
      cost: 10.25,
      imageUrl: "",
      altImg: "",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
          state.filteredProducts.sort((a, b) => a.description.localeCompare(b.description));
        } else if (suborder === "desc") {
          state.filteredProducts.sort((a, b) => b.description.localeCompare(a.description));
        }
      }
      if (order === "validityDate") {
        if (suborder === "asc") {
          state.filteredProducts.sort((a, b) => a.validityDate.localeCompare(b.validityDate));
        } else if (suborder === 'desc') {
          state.filteredProducts.sort((a, b) => b.validityDate.localeCompare(a.validityDate));
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

export const { sort, filterProduct, resetState } =
  productSlice.actions;
export default productSlice.reducer;
