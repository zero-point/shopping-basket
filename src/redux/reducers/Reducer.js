const ProductList={currency:'£',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}
const PricesList=(state=ProductList,action)=>{
  
    switch(action.type){

         case 'resetStore':
         return {...state,...{shoppingCart:[],currency:state.currency,extchangeRate:state.extchangeRate,products:state.products}}
         
        default:
        return state;

    }  
     
}

export default PricesList;
    