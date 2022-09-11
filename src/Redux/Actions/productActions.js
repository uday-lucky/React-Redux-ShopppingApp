export const addProduct = (props) => {
  return { type: "ADD", payload: props };
};

export const removeProduct = (props) => {
 return{
    type: "REMOVE",
   payload: props,
 };
}
export const deleteProduct = (props) => {
  return{
     type: "DELETE",
     payload: props,
  };
 }
