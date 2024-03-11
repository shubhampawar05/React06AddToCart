import { useState } from "react";
import SingleCart from "./SingleCart";

const Cart = ({ quantity, setQuantity, product, setProduct }) => {
  const [total, setTotal] = useState(0);
  const removeall = () => {
    setProduct([]);
    setQuantity(0);
    setTotal(0);
  };

  return (
   
    <div>
 {product.length? <div className="max-w-screen-md mx-auto py-8">
      <h2 className="text-4xl text-center">YOUR BAG</h2>
      <div className="max-w-screen-md mx-auto ">
        {product.map((item, i) => {
          return (
            <SingleCart
              product={product}
              Data={item}
              quantity={quantity}
              setQuantity={setQuantity}
              setProduct={setProduct}
              key={item.id}
              setTotal={setTotal}
              total={total}
            />
          );
        })}
      </div>

      <hr />
      <div className="flex justify-between px-8 text-2xl ">
        <span>Total</span>
        <span className="bg-indigo-500">${total}</span>
      </div>
      <div className="text-center">
        <button
          className="px-2 py-1 bg-indigo-400 "
          onClick={() => removeall()}
        >
          clear cart{" "}
        </button>
      </div>
    </div>: < p className="w-[940px] mx-auto text-4xl text-center py-12 ">CART IS EMPTY</p>}
   
   
    </div>
  );
};

export default Cart;
