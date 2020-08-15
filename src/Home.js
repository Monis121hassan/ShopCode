import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div className="Home">
        <img className="home__logo"src="https://eshopnawada.weebly.com/uploads/5/2/0/5/52052571/9838639_orig.png" alt=""/>
            
    <div className="home__row">
    <Product 
         id="122344"
         title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
         price={899.00}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
         />

        <Product 
         id="122344"
         title="Kandence Frontier Limited Edition"
         price={4000.00}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/71ZonMdWeFL._SY741_.jpg"
         />
         <Product
         id="122344"
         title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
         price={899.00}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
         />



         <p>    </p>
    </div>

    
    <div className="home__row">
    <Product 
         id="122344"
         title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
         price={899.00}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
         />

        <Product 
         id="122344"
         title="Kandence Frontier Limited Edition"
         price={4000.00}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/71ZonMdWeFL._SY741_.jpg"
         />

    <Product 
         id="122344"
         title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
         price={899.00}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
         />

    </div>
    <div className="home__row">
    <Product 
         id="122344"
         title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
         price={899.00}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
         />
         </div>
       </div>
    );
}

export default Home;
