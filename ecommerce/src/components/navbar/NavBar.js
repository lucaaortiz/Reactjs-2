import CartWidget from "../cartwidget/CartWidget"

const NavBar = () => {
return (
    <nav>
        <h3>Ecommerce</h3>
        <div>
            <buttom>Lamparas</buttom>
            <buttom>Apliques</buttom>
            <buttom>Mesas</buttom>
        </div>
        <CartWidget />
    </nav>

    )
}

export default NavBar