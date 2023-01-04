import { myAxios, privateAxios } from "./helper"

export const createPost = (postData) =>{
    return privateAxios
    .post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData)
    .then(response=>response.data)
}

//get all posts

export const  loadAllPosts = async (pageNumber,pageSize) => {

    return await myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response=>response.data)
};

//load single post of given id
export const loadPost = (postId) =>{
    return myAxios.get('/posts/'+postId).then(response=>response.data)
}

//post comment in post
export const createComment = (comment,postId)=>{
    return privateAxios.post(`/post/${postId}/comment`,comment)
}

//upload post banner image
export const uploadPostImage= async (image,postId)=>{
    let formData = new FormData()
    formData.append("image",image)
    const response = await privateAxios.post(`/post/image/upload/${postId}`, formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
        });
    return response.data;
}

//get userWise Post
export const loadPostUserWise =async (userId) =>{
    const res = await privateAxios.get(`/user/${userId}/posts`);
    return res.data;
}

//delete post
export function deletePostService(postId){
    return privateAxios.delete(`/posts/${postId}`).then(res=>res.data)
}