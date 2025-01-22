import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types
const ModalLogout = ({ visible,  onClose, onLogout }) => {
    if (!visible) {
        return null;
    }
    console.log("Ingreso al ModalLogout");
return (
        <div className="modal-overlay">
            <motion.div
                className={`notification-success `}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>¿Esta seguro de cerrar la sesion? 
                    <button onClick={onLogout}>Presione el boton para salir</button></p>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );};
export default ModalLogout;