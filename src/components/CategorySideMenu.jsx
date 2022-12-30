import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

function CategorySideMenu() {
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