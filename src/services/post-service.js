import { myAxios, privateAxios } from "./helper"

export const createPost = (postData) =>{
    return privateAxios
    .post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData)
    .then(response=>response.data)
}

//get all posts

export const  loadAllPosts = async (pageNumber,pageSize) => {

    return await myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response=>response.data)
}