import { useDispatch, useSelector } from "react-redux";
import RestaurantAccordianData from "./RestaurantAccordianData";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    cartItems = useSelector((cart) => cart.cart.items);

    const dispatch = useDispatch()

    const clearCarts = () => {
        dispatch(clearCart(0))
    }

    return (
        <div className="text-center p-4 m-4">
            <p className="font-bold text-xl">Cart</p>
        <div className="w-6/12 m-auto">
            {cartItems.length > 0 ? <button className="rounded text-white bg-black m-2 p-2" onClick={() => clearCarts()}>Clear Cart</button> : <p>No Data Available</p>}
            <RestaurantAccordianData data={cartItems} />
        </div>
        </div>
    )
}


export default Cart;