const ProductList={currency:'£',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}
const PricesList=(state=ProductList,action)=>{
  
    switch(action.type){

         case 'updateCurency':    
            let updateSinglePrice=(x)=>{
                let newPrice=(x.price/state.extchangeRate)*action.newCurrency.value;
                newPrice=newPrice.toFixed(2);
                return {product:x.product,price:newPrice}
            }
            
            return {...state,...{products:state.products.map((x)=>{
            return updateSinglePrice(x);
            }),shoppingCart:state.shoppingCart}};

         
        default:
        return state;

    }  
     
}

export default PricesList;
    