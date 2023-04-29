import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      title: "Jet ski Model 1",
      price: 499.99,
      image:
        " https://dreammoto.ru/storage/images/catalog/7177/ZeAQ330JQyEyWBKM0YE2hk3YBguAVQJr0cJLgqIw.jpeg",
    },
    {
      id: 2,
      title: "Jet ski Model 2",
      price: 799.99,
      image:
        " https://dreammoto.ru/storage/images/catalog/7172/WmMLJi8Q0w5oAldOoRq0lBUb4HQRaIqWwTBE7BZf.png",
    },
    {
      id: 3,
      title: "Jet ski Model 3",
      price: 599.99,
      image:
        " https://dreammoto.ru/storage/images/catalog/7173/qqqDvsbIP1FECM5nxu3KnCbOOyM3hC7xy9uuc52Y.png",
    },
    {
      id: 4,
      title: "Jet ski Model 4",
      price: 899.99,
      image:
        "https://dreammoto.ru/storage/images/catalog/7177/ZeAQ330JQyEyWBKM0YE2hk3YBguAVQJr0cJLgqIw.jpeg",
    },
    {
      id: 5,
      title: "Jet ski Model 5",
      price: 999.99,
      image:
        "https://dreammoto.ru/storage/images/catalog/7172/WmMLJi8Q0w5oAldOoRq0lBUb4HQRaIqWwTBE7BZf.png",
    },
    {
      id: 6,
      title: "Jet ski Model 3",
      price: 599.99,
      image:
        " https://dreammoto.ru/storage/images/catalog/7173/qqqDvsbIP1FECM5nxu3KnCbOOyM3hC7xy9uuc52Y.png",
    },
  ],
  reducers: {
  },
});

export default productSlice.reducer;
