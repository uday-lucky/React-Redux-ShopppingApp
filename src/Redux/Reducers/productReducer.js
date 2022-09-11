const initialState = {
  cartInfo: [],
};

export const productreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const newcopy = state.cartInfo;
      //newcopy.totalprice=state.cartInfo.price;
      var obj = newcopy.filter((item) => item.id === action.payload.id);
       console.log("obj",obj);
      if (obj.length) {
        obj[0].itemCount=obj[0].itemCount+1;
        obj[0].cartPrice += action.payload.price;
      } else 
      {
        action.payload.itemCount=1;
        action.payload.cartPrice=action.payload.price;
        newcopy.push(action.payload)
      };
      return { ...state, cartInfo: newcopy };
    case "REMOVE":
      const itemIndex = state.cartInfo?.filter(
        (item) => item.id != action.payload.id
      );

      return { ...state, cartInfo: itemIndex };

      case "DELETE":
        const itemIndex2= state.cartInfo?.findIndex(
          (item) => item.id === action.payload.id
        );
        console.log("index", itemIndex2);
       var newArray = [...state.cartInfo];
       if(newArray[itemIndex2].itemCount>1){
        newArray[itemIndex2].itemCount-=1;
        newArray[itemIndex2].cartPrice-=newArray[itemIndex2].price;
        
       }
       else{
        newArray = state.cartInfo.filter((item) => item.id !== action.payload.id);

       }
        return {...state, cartInfo:newArray};

    default:
      return state;
  }
};
