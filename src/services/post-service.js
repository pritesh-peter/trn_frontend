import { myAxios } from "./helper"

const createPost = (postData) =>{
    return myAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData).then(respont=>response.data)
}