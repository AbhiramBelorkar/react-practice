import Cart from "./Cart";

function Header() {
    return (
        <header>
            <h1>ShopEase</h1>

            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            <Cart ></Cart>
        </header>
    )
}

export default Header;