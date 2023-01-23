export const initialState={
    basket:[],
    user:null,
}

//selector
 
export const getBasketTotal=(basket)=>
      basket?.reduce((amount,item)=>item.price+amount,0);

export const reducer=(state,action)=>{

    switch(action.type){

        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }
       case 'REMOVE_FROM_BASKET':{
           console.log(action)
          const index=state.basket.findIndex(
              (basketItem)=>basketItem.id===action.id
          );
          let newBasket=[...state.basket]
          if(index>=0){
            newBasket.splice(index,1)
          }else{
              console.log(`there is no item in basket with id ${action.id}`)
          }
          return{
              ...state,
              basket:newBasket,
          }
       }

       default:
           return
       
         
    }
}