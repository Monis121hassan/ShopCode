import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import "./Subtotal.css";
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{basket}]=useStateValue();
    return (
        <div className="Subtotal">
            <CurrencyFormat

            renderText={( value ) => (
                <>
               <p>
                   Subtotal({basket.length} items): <strong>{ value }</strong>
               </p>
               <small className="Subtotal__gift">
                  <input type = "checkbox"/>This order contains a gift:
               </small><br></br>

                    </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            
            
            
            />
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
