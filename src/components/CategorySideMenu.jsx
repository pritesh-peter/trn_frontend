import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'

function CategorySideMenu() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
            loadAllCategories().then(data=>{
                setCategories([...data])
            })
    },[]).catch(error => {
        console.log(error);
        toast.error("error in loading categories")
    })
  return (
    <div>
    <ListGroup>
        <ListGroupItem action="true" className='border-0'>
            All Blogs
        </ListGroupItem>
        <ListGroupItem action="true" className='border-0'>
            Programming
        </ListGroupItem>
    </ListGroup>
    </div>
  )
}

export default CategorySideMenu