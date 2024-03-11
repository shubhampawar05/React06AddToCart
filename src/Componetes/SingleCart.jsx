import { useState } from "react";

function SingleCart({ Data, quantity, setQuantity,setProduct, product,setTotal ,total}) {
  console.log(Data );
  const [cartvalue, setCartValue] = useState(quantity);

  const increasehandler = (id) => {
    console.log(id);
    product.map((items)=>{
      if(id == items.id){
        items.quantity+=1
        setCartValue(cartvalue+1)
        setQuantity( quantity+1)
        setTotal( total + items.quantity*items.price)
      }
    }

    )
  };

  const Decresehandler = (id) => {
    console.log(id);
    product.map((items)=>{
      if(id == items.id ){
        if(items.quantity>0){
          items.quantity-= 1
          setCartValue(cartvalue-1)
          setQuantity( quantity-1)
          setTotal( total - (items.quantity*items.price))
        }
        
      }
    }

    )
  };

  const removesingal =(id)=>{
    let temparr = [...product];
    let arr = temparr.filter((items)=>{
      if(items.id == id ){
        setTotal(total-items.quantity *items.price)
        setCartValue(0)
        setQuantity(quantity-items.quantity)
      }

      return items.id !=id
    })
   
    setProduct(arr)
  }

  return (
    <div className="flex px-4 py-4 justify-center">
      <div className="w-[100px] h-[100px]">
        <img src={Data.img_url} alt="" />
      </div>
      <div className="w-[80%]">
        <h1>{Data.name}</h1>
        <p>{Data.price}</p>
        <button onClick={()=>removesingal(Data.id)}>remove</button>
      </div>
      <div className=" flex flex-col justify-center">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="amount-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => increasehandler(Data.id)}
          >
            <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
          </svg>
        </span>
        <span className="pl-1">{cartvalue}</span>
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="amount-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => Decresehandler(Data.id)}
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default SingleCart;
