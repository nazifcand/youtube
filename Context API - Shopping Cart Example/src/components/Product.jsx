import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext"

const Product = ({ product }) => {

  const context = useContext(CartContext)

  return (
    <div className="flex flex-col justify-start gap-4 bg-white shadow-md">
      <Link to={'/'} className="text-xl font-bold hover:text-purple-400">
        <img src={product.thumbnail} alt="" className="w-full" />
      </Link>

      <div className="w-full px-4 box-border flex flex-col gap-2">
        <Link to={'/'} className="text-lg font-semibold hover:text-purple-400">
          <h1 className="">
            {product.title}
          </h1>
        </Link>

        <div className="flex flex-col mt-2">
          <span className="text-sm text-gray-400">Değerlendirme</span>
          <span className="text-xl">{product.raiting.toFixed(2)}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Kategori</span>
          <span className="text-sm bg-orange-400 px-3 py-1 rounded text-white mr-auto">{product.category.title}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Satıcı</span>
          <span className="text-sm bg-pink-400 px-3 py-1 rounded text-white mr-auto">{product.seller.title}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Fiyat</span>
          <span className="text-2xl text-purple-400 font-semibold">{new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}</span>
        </div>

      </div>

      {
        context.cart.findIndex(item => item.id == product.id) == -1
          ? <button
            className="rounded px-4 mx-4 mb-4 py-2 mt-auto bg-green-400 hover:bg-green-500 text-white font-semibold"
            onClick={() => context.addProduct(product)}
          >Sepete Ekle</button>
          : <button
            className="rounded px-4 mx-4 mb-4 py-2 mt-auto bg-red-400 hover:bg-red-500 text-white font-semibold"
            onClick={() => context.removeProduct(product.id)}
          >Sepetten Kaldır</button>
      }
    </div>
  )
}

export default Product