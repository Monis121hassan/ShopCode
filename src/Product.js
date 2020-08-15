import React from 'react';
import "./Product.css";
import{useStateValue} from "./StateProvider.js";

function Product({id, title,price,rating,image}) {

    const [, dispatch ]=useStateValue();
    const addToBasket =  () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                     id:id,
                     title:title,
                     price:price,
                    rating:rating,
                    image:image,
            },
        });
    };
    return (
        <div className="Product">
            <div className="Product__info">
            <p><strong>{title}</strong></p>
            <p className="Product__Price">
                <small>$</small>
                <strong>{price}</strong>
                </p>

                <div className="Product__Rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>
                            <span>⭐</span>
                        )}
                    
                     
            </div>
            
            
                </div>
                <img src={image} alt=""/>
                    <button onClick={addToBasket}>Add To Basket</button>
                   
            
        
        </div>
    );
}

export default Product;
