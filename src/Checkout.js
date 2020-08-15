import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from './Subtotal';
//import CurrencyFormat from "react-currency-format";
function Checkout() {
    const [{basket}]=useStateValue();
    return (
        
        <div className="Checkout">
            <div className="Checkout__left">
            
        {basket?.length===0 ? (
            <div>
                <h1>You Shopping Cart is Empty!!</h1>
                <h2> Add new products to continue shopping</h2>
                </div>
        ):(
            <div>
            <h2 className="Checkout__title">Your Shopping Basket:</h2>

            {basket.map(item=>(
              <CheckoutProduct 
              
                 id={item.id}
                 title={item.title}
                 price={item.price}
                 rating={item.rating}
                 image={item.image}
              />
            
             ) )}
            </div>
        )

        }
        </div>
        {basket.length > 0 && (
            <div className="Checkout__right">
                
                <Subtotal/>
               

         </div>

        )};
        </div>
    )
}

export default Checkout
