import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { clearCart, removeFromCart } from "../redux/slice";

function CartList() {

    const cartSelector = useSelector((state) => state.cart.items)
    const [cartItems, setCartItems] = useState(cartSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setCartItems(cartSelector)
    },[cartSelector])

    const manageQuantity = (id, q) => {
        const quantity = parseInt(q) > 1 ? parseInt(q) : 1
        const cartTempItems = cartSelector.map((item) => {
            return item.id==id? {...item, quantity} : item
        })
        setCartItems(cartTempItems);
    }

    const handlePlaceOrder = () => {
        localStorage.clear();
        dispatch(clearCart())
        alert("Order placed successfully.")
        navigate("/")
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Your Cart Items</h2>
                <span>{cartItems.length} items</span>
            </div>
            {
                cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="item-info">
                            <img src={item.thumbnail} />
                            <div className="item-details">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                        </div>
                        <div className="item-action">
                            <div style={{display:'flex'}}>
                            <input onChange={(e) => manageQuantity(item.id, e.target.value)} 
                            type="number" min="1" max="10" defaultValue="1"
                            value={item.quantity ? item.quantity : 1}
                            style={{margin:'15px'}} />    
                            </div>
                            <span className="item-price">$ {(item.quantity? item.price * item.quantity : item.price).toFixed(2) }</span>
                            <button onClick={() => dispatch(removeFromCart(item))} className="btn">Remove</button>
                        </div>
                    </div>
                ))
                    :
                    null
            }
            <div className="cart-footer">
                Total : $ {(cartItems.reduce((sum, item) => item.quantity ?  sum + item.price * item.quantity : sum + item.price, 0)).toFixed(2)}
            </div>

            <button className=" btn-order" onClick={handlePlaceOrder} >Place Order</button>

        </div>

    )

}

export default CartList;