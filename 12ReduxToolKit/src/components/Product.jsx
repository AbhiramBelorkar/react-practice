import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import Header from "./Header";

function Product() {

    const dispatch = useDispatch()

    const productSelector = useSelector((state) => state.product.items)
    console.log("product selector count: "+productSelector.length);

    const cartSelector = useSelector((state)=> state.cart.items)

    useEffect(() => {
        fetchProducts()
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="product-container">
            {productSelector?.map((item) => (
                <div className="product-card" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="content">
                        <div className="title">{item.title}</div>
                        <div className="brand">{item.brand}</div>
                        <div className="price">${item.price}</div>
                        <div className="rating">⭐ {item.rating}</div>
                        {
                            cartSelector.find((cartItem) => cartItem.id === item.id)
                            ? 
                            ( <button onClick={()=> dispatch(removeFromCart(item))} className="btn disable">Remove from cart</button> )
                            :
                            (
                            <button onClick={()=>dispatch(addToCart(item))} className="btn">Add to cart</button>
                            )
                        }
                        
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Product;