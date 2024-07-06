import React, { useContext } from 'react'
import dropdown_icon from '../assets/dropdown_icon.png'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

import Item from '../Components/Item/Item'
function ShopCategory({categroy,banner}) {

  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon}></img>
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,index)=>{
            if(categroy === item.category){
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else{
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory;