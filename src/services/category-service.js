import {myAxios} from "./helper";

export const loadAllCategories =  async () => {
    const response = await myAxios.get('/categories/');
    return response.data;
}

//get categorywise posts

export const loadPostCategoryWise = async (categoryId) => {
    const res = await myAxios.get(`/category/${categoryId}/posts`);
    return res.data;
}