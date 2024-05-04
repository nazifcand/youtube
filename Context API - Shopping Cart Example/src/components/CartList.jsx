import { useState } from "react";
import CartIcon from "../icon/CartIcon";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
const CartList = () => {

  const context = useContext(CartContext)

  const [showList, setShowList] = useState(false)

  return (
    <div className="relative">
      <div className="w-[40px] h-[40px] border border-slate-400 text-slate-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-300"
        onClick={() => setShowList(pre => !pre)}>
        <CartIcon />

        {context.cart.length > 0 && <div className="w-[20px] h-[20px] border-full bg-red-400 text-white text-xs flex items-center justify-center rounded-full absolute -top-1 -right-1">{context.cart.length}</div>}

      </div>

      {
        showList && <div className="w-[300px] max-h-[400px] overflow-auto absolute top-full right-1/2 mt-4 translate-x-1/2 p-2 box-border bg-white shadow-md border-slate-300 border rounded-md flex flex-col gap-2">

          {context.cart.map((product, index) =>
            <div key={index} className="flex items-center gap-2 p-2 odd:bg-purple-50">
              <img src={product.thumbnail} width="50" className="border border-purple-400 p-1 box-border rounded" />
              <div className="w-full flex flex-col">
                <h1 className="max-w-[190px] font-semibold text-sm truncate">
                  {product.title}
                </h1>
                <strong className="font-semibold text-purple-400">
                  {product.price}
                </strong>
                <span
                  className="text-xs hover:underline hover:font-semibold text-red-500 cursor-pointer"
                  onClick={() => context.removeProduct(product.id)}
                >
                  Sepetten Kaldır
                </span>
              </div>
            </div>)}


        </div>
      }
    </div>
  );
};

export default CartList;
