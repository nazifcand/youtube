import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext({})

const CartContextProviver = ({ children }) => {

  const [cart, setCart] = useState([])

  const addProduct = (product) => {
    setCart(prev => ([...prev, product]))
  }

  const removeProduct = (id) => {
    setCart(prev => prev.filter(item => item.id != id))
  }

  return (
    <CartContext.Provider value={{ cart, setCart, removeProduct, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProviver