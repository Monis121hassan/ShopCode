export const initialState={
  basket:[{
    id:"122344",
    title:
    "The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)",
    price:899.00,
    rating:5,
    image:"https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg",


  },
],

user:null,

};

export const getBasketTotal = (basket) =>
basket?.reduce(( amount, item) => item.price + amount, 0);

const reducer=(state,action) => {
    console.log(action);
    switch(action.type){
        case "SETUSER":

        return{...state,
            user:action.user
        
        };
        case "ADD_TO_BASKET":
            return {
                ...state,
                   basket:[...state.basket,action.item]}

        break;

        case "REMOVE_FROM_BASKET":
         
        let newBasket=[...state.basket];
        const index=state.basket.findIndex((basketItem) => basketItem.id===action.id);
         
        if(index >= 0){
            newBasket.splice(index ,1);
        }else{
            //remove it
        }


         return {...state, basket:newBasket};

        break;

        default:
            return state;
    }
}
export default reducer;