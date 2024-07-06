import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

import remove_icon from '../../assets/cart_cross_icon.png'
function CartItems() {
  const {all_product,cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartItems'>
        <div className="cartitems-format-main">
          <p>products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantiy</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((item)=>{
          if(cartItem[item.id]>0){
            return <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={item.image} alt="" className='carticon-product-icon'/>
              <p>{item.name}</p>
              <p>{item.new_price}</p>
              <button className='cartitems-quantity'>{cartItem[item.id]}</button>
              <p>&#8377;{item.new_price*cartItem[item.id]}</p>
              <img className='cartitem-remove-icon' src={remove_icon} onClick={()=> removeFromCart(item.id)}alt="" />
            </div>
          </div>
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="items-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>&#8377;{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fees</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>&#8377;{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code,Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='Promo Code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems