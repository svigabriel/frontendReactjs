import { useState} from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../Modals/ModalInfo.jsx";  

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
    const {formData, handleChange} = useForm({
        username: '',
        email: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        console.log('datos del formulario', formData);
    };

    const onCloseModalInfo = () => {
        setShowModal(false); 
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <ModalInfo visible={showModal} 
            message = "Formulario enviado!!"
            onClose ={onCloseModalInfo} 
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{y: 100}}
                    animate={{y: 0}}
                    transition={{duration: 0.5}}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionAndHook;