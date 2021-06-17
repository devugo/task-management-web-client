const initialState = {
  one: null,
  two: null,
};
const testReducer = (state = initialState, action: any) => {
  console.log('reducer', action);
  return state;
};

export default testReducer;
