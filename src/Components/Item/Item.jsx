import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'
function Item(props) {

  const navigate = useNavigate();
  return (
    <div className='item'>
      <img src={props.image} alt="" onClick={()=>{navigate(`/product/${props.id}`);window.scrollTo(0,0)}}/>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        &#8377;{props.new_price}
        </div>
        <div className="item-price-old">
        &#8377;{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item