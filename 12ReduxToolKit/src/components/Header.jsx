import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header() {
    return (
        <header>
            <h1>ShopEase</h1>

            <nav>
                <Link to="/">Home</Link>
            </nav>

            <Cart ></Cart>
        </header>
    )
}

export default Header;