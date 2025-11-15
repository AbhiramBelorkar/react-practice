import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {

    const cartSelector = useSelector((state) => state.cart.items);
    console.log("cart selector count: " + cartSelector.length);



    return (
        <Link to="/cart">
            <div className="cart">🛒 {cartSelector.length}</div>
        </Link>
    )
}
export default Cart;