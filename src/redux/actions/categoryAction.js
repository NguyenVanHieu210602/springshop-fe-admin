export const insertCategory = (category, navigate) => async (dispatch) => {
  // const sever = new CategoryService()

  try {
    console.log("insert category");
  } catch (error) {
    console.log("Error" + error);
  }

  navigate("/categories/list");
};
