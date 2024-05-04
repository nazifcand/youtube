import classNames from "classnames"
import { useState } from "react"
import Product from "./Product"
import SelectGrid from "./SelectGrid"

const ProductList = ({ products = [] }) => {
  const [grid, setGrid] = useState(4)

  return (
    <div className="w-full flex flex-col gap-8">

      <SelectGrid grid={grid} setGrid={setGrid} />

      <div className={classNames("grid gap-4", {
        'grid-cols-3': grid === 3,
        'grid-cols-4': grid === 4,
        'grid-cols-5': grid === 5,
      })}>
        {products.map((product, index) => <Product key={index} product={product} />)}
      </div>
    </div>
  )
}

export default ProductList