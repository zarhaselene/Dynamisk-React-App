import React, { useReducer, useContext, createContext, useEffect } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item]
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1)
      return newArr;
    default:
      throw new Error(`unknown action ${action.type}`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, [], () => {
    const dataFromLocal = localStorage.getItem('state')
    return dataFromLocal ? JSON.parse(dataFromLocal) : []
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state]) 
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);