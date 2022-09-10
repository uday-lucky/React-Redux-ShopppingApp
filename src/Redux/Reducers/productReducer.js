const initialState = {
  cartInfo: [],
};

export const productreducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD":
      const newcopy = state.cartInfo;
      newcopy.push(action.payload);
      return { ...state, cartInfo: newcopy };
    case "REMOVE":
      const itemIndex = state.cartInfo?.filter(
        (item) => item.id != action.payload.id
      );
     
       return {...state,cartInfo:itemIndex};
   
    default:
      return state;
  }
};
