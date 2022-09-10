import React from 'react'
import { Card ,Button } from 'react-bootstrap'
import { addProduct } from '../Redux/Actions/productActions'


const ItemCard = props => {
   
  return (
    <Card  style={{margin:20,  width: '20rem' }}>
    <Card.Img style={{ width: '14rem',height :"10rem" }} variant="top" src={props.products.image} />
    <Card.Body style={{height: '20rem' }}>
      <Card.Title>{props.products.title.substring(0,20)}</Card.Title>
      <Card.Text style={{height :"10rem" ,width:"10rem"}}>
      {props.products.description.substring(0,60)}
      </Card.Text>
      <Card.Title>{props.products.price}$</Card.Title>

      <Button variant="primary" onClick={()=>props.dispatch({type:"ADD",payload:props.products})} >Add </Button>
      <Button style={{marginLeft:10}} onClick={()=>props.dispatch({type:"REMOVE",payload:props.products})}  variant="primary">Remove</Button>
    </Card.Body>
  </Card>
  )
}

export default ItemCard