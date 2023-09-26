import axios from "axios";

// запрос наполучение карточекс товаров
const apiCatalog = async () => {
  try {
    const response = await axios.get(`https://appevent.ru/dev/task1/catalog`);
    return response.data.items;
  } catch (error) {
    console.error("Error searching for books:", error);
  }
};

export default apiCatalog;
