import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { findBooks, test } from "../store/itemsSlice";

const apiCatalog = async () => {
  // useEffect(() => {
  //   catalogStore();
  // }, []);

  // const catalogStore = async () => {
  try {
    const response = await axios.get(`https://appevent.ru/dev/task1/catalog`);
    return response.data;

    // setBooks(response.data.items);
    console.log(response);
  } catch (error) {
    console.error("Error searching for books:", error);
  }
  // };

  // const dispatch = useDispatch()
};

export default apiCatalog;
