import { Link } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ModalLogout from "../Modals/ModalLogout.jsx"
import { resetForm} from "../../store/features/Form/FormSlice.js"

const Navigator = () => {
   
    const { module, username, email, password }= useSelector(state => state.form);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLogout = () => {
        console.log("valor de modulo",module);
        console.log("valor de password",password);
        dispatch(resetForm("logout"));
        setIsModalVisible(false);
    };
    return (
        
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            
            <span className="nav-username">Bienvenid@ {username}||{email} 
            <button className="btn_show"  type="button" 
                onClick={() => setIsModalVisible(true)} >
                    Logout
            </button> </span>
            <ModalLogout
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onLogout={handleLogout}
            />    
        </nav>
                
    );
}
export default Navigator;

