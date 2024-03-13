import { NavLink } from "react-router-dom";
import './App.css'
import { useContext } from "react";
import { MyContext } from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

const Menubar = () => {
    const {cart} = useContext(MyContext) 

    return (
        <>
            <NavLink to='/' className="link">About</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to='/products' className="link">Products</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to='/cart' className="link position-relative">Cart
            <p className="position-absolute placement-sm">{cart.length}</p>
            </NavLink> &nbsp;&nbsp;&nbsp;
        </>
    )
}

export default Menubar;
