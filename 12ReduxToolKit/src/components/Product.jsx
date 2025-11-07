import { useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../redux/slice";

function Product() {

    const dispatch = useDispatch()

    return (

        <div className="product-container">
            <div className="product-card">
                <img src="https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_ac192d39-3b63-4a80-a049-73e0a6c2b149.png?v=1728871112" alt="Product Image" />
                <div className="product-name">Wireless Headphones</div>
                <div className="product-price">$49.99</div>
                <button onClick={() => dispatch(addToCart(1))} className="add-btn">Add to Cart</button>
                <button onClick={() => dispatch(removeFromCart(1))} className="add-btn-remove">Remove from Cart</button>
                <button onClick={() => dispatch(clearCart())} className="add-btn">Clear Cart</button>
            </div>
        </div>
    )
}

export default Product;