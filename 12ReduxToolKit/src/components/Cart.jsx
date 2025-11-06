import { useSelector } from "react-redux";

function Cart() {

    const selector = useSelector((state)=> state.cart.value);

    return (
        <div className="cart">🛒 {selector}</div>
    )
}

export default Cart;