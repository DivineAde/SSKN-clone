import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const {
    qty,
    setShowCart,
    totalQuantities,
    cartItems,
    decQty,
    incQty,
    toggleCartItemQuantity,
    totalPrice,
    deleteCartItem,
  } = useStateContext();
  return (
    <div className="effect w-full h-screen z-[9999]">
      <div className="relative float-right w-full md:w-[600px] h-screen bg-white z-[50] px-4 py-[10px]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl uppercase">
            Your bag ({totalQuantities}){" "}
            <span className="capitilize text-lg underline cursor-pointer">
              View bag
            </span>
          </h1>
          <AiOutlineClose
            className="w-5 h-5 cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </div>

        {cartItems.length < 1 && (
          <div className="insert-center">
            <h1 className="text-center">
              Your bag is empty. Continue browsing, or start with our best
              sellers below.
            </h1>
          </div>
        )}

        <div className="overflow-auto max-h-[70vh]">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div className="mt-4 flex justify-between" key={item._id}>
                <div className="flex gap-x-4">
                  <div>
                    <img
                      src={urlFor(item?.image[0])}
                      alt="product/img"
                      className="max-h-32"
                    />
                  </div>
                  <div>
                    <p className="uppercase">{item.name}</p>
                    <span className="text-[.8em]">Single</span>
                    <form className="flex flex-col mt-2">
                      <label className="flex items-center text-[.8em] mb-2">
                        <input type="radio" name="radio" className="mr-[1em]" />
                        One-time purchase
                      </label>
                      <label className="flex items-center text-[.8em]">
                        <input type="radio" name="radio" className="mr-[1em]" />
                        Subscribe & save 10%
                      </label>
                    </form>

                    <div className="flex flex-col mt-2">
                      <span className="text-sm">QUANTITY</span>
                      <div className="max-w-8">
                        <button
                          type="button"
                          className="p-2 hover:bg-slate-200 hover:rounded-full"
                          onClick={() => (item._id, "dec")}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="p-2">{item.quantity}</span>
                        <button
                          type="button"
                          className="p-2 hover:bg-slate-200 hover:rounded-full"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </button>
                        <button
                          type="button"
                          className="underline text-[.8em] ml-4"
                          onClick={() => deleteCartItem(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mr-4">
                  <span className="font-bold">${item.price}</span>
                </div>
                <div className="absolute bottom-0 left-0 bg-slate-50 w-full py-5 px-4">
                  <div className="flex justify-between">
                    <h1>SUBTOTAL</h1>
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                  <div className="">
                    <span className="float-right text-xs pb-1">
                      Shipping, tax, and promo codes applied at checkout
                    </span>
                    <button
                      type="button"
                      className=" py-2 w-full border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                    <span className=" float-right text-xs pt-1">
                      or 4 interest-free payments of $22.50 with stripe or
                      payday
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
