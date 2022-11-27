import React, { useEffect } from 'react'
import { loadAllPosts } from '../services/post-service'

const NewFeed= () => {

    useEffect(()=>{
        //load all posts from server
        loadAllPosts().then((data)=>{
            console.log(data);
        }).catch(error=>{
            console.log(error)
        })
    },[])
    
  return (
    <div>NewFeed</div>
  )
}

export default NewFeed