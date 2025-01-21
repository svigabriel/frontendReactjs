import { Link } from "react-router";
import { useState } from "react";
import { useSelector } from 'react-redux'
import ModalLogout from "../Modals/ModalLogout.jsx";

const Navigator = () => {
    const [showModal, setShowModal] = useState(false);
    const { username, email} = useSelector((state) => state.form);
    
    const Logout = () => {
        console.log("llega aqui logout");
        <ModalLogout visible={showModal}
        message ="Deseas salir??"
        onClose={onCloseModalLogout}/>
    };
    const onCloseModalLogout = () => {
        setShowModal(false);  
    };
    return (
        
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            
            <span className="nav-username">Bienvenid@ {username}||{email} -
             <button className="btn_show"  type="button" 
             onClick={Logout}>Logout</button></span>
           
            
        </nav>

                        
                
    );
}
export default Navigator;

