import Navbar from '../Componetes/Navbar'
import Cart from '../Componetes/Cart'
import { useState } from 'react'
import Data from './../assets/Data.json'

const Homepage = () => {

const [quantity ,setQuantity] = useState(0)
const [product , setProduct] =useState(Data.phone_data)


  return (
    <div>
        <Navbar quantity={quantity}/>
        <Cart quantity={quantity} setQuantity={setQuantity} product={product} setProduct={setProduct}/>
    </div>
  )
}

export default Homepage