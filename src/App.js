import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import CartPage from "./Pages/CartPage";
import ShopPage from "./Pages/ShopPage";
import HomePage from './Pages/HomePage';
import styled from 'styled-components';
import logo from "./Assets/spider-plant.png"
import cartIcon from "./Assets/shopping-cart.png"

function App() {

  const [cart, setCart] = useState(emptyCart);
  const [cartSize, setCartSize] = useState(0);

  const handleAddToCart = (id) => {
    if(cart.has(id)) setCart(new Map(cart).set(id, cart.get(id)+1));
    else setCart(new Map(cart).set(id, 1));
    setCartSize(cartSize+1);
  }

  const handleRemoveOneItem = (id) => {
    if(cart.has(id) && cart.get(id)>1) setCart(new Map(cart).set(id, cart.get(id)-1));
    if(cart.has(id) && cart.get(id)===1) handleDeleteItem(id);
    setCartSize(cartSize-1);
  }

  const handleDeleteItem = (id) => {
    setCartSize(cartSize-1);
    const newCart = cart;
    newCart.delete(id);
    setCart(new Map(newCart));
  }


  return (
    <div className="App">
        <NavigationBar>
              <Link to="/">
                <Logo src={logo}></Logo>
              </Link>
              <ShopLink to="/shop">Store</ShopLink>
              <div>
              <CartCounter>{cartSize}</CartCounter>
              <Link to="/cart">
                <Cart src={cartIcon}></Cart>
              </Link>
              </div>
        </NavigationBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage cart={cart} addToCart={handleAddToCart} removeOneItem={handleRemoveOneItem} deleteItem={handleDeleteItem}/>} />
        <Route path="/shop" element={<ShopPage addToCart={handleAddToCart}/>} />
      </Routes>
    </div>
  );
}


//state
const emptyCart = new Map();


//Styling

const CartCounter = styled.div`
display: flex;
justify-content: center;
border-radius: 50%;
color: black;
width: 30px;
height: 30px;
position: absolute;
  top: 5px;
  right: 5px;
  background-color: #FFBE7D;
`

const ShopLink = styled(Link)`
color: white;
font-weight: bold;
text-decoration: none;
font-size: 3rem;
border-radius: 10%;
margin: 1%;
padding: 5px;
&:hover{
  transform: scale(1.05);
}
`

const Logo = styled.img`
max-height: 100%;
max-width: 100%;
padding-left: 15px;
`

const Cart = styled.img`
max-height: 60%;
max-width: 60%;
padding: 5px;
border-radius: 20%;
background-color: white;
margin: 10px;
`

const NavigationBar = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 50px;
max-height: 100px;
width: 100%;
background-color: #1f2421;
`

export default App;
