import { useSelector } from "react-redux";

function Cart() {

    const cartSelector = useSelector((state)=> state.cart.items);
    console.log("cart selector count: "+cartSelector.length);
    
    

    return (
        <div className="cart">🛒 {cartSelector.length}</div>
    )
}

export default Cart;