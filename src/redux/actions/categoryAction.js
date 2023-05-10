import CategoryService from "../../services/categoryService";
import { CATEGORY_SET } from "./actionTypes";

export const insertCategory = (category, navigate) => async (dispatch) => {
  const service = new CategoryService();

  try {
    console.log("insert category");

    const response = await service.insertCategory(category);

    if (response.status === 201) {
      dispatch({
        type: CATEGORY_SET,
        payload: response.data,
      });
    }

    console.log(response);
  } catch (error) {
    console.log("Error" + error);
  }

  navigate("/categories/list");
};
