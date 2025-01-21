import { useState } from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../Modals/ModalInfo.jsx";
import { initialState } from "../../store/features/Form/FormSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setEmail } from "../../store/features/Form/FormSlice.js";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch();
    const { formData, handleChange, resetForm } = useForm(initialState);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("succes");
    const [showPassword, setShowPassword] = useState(false);
    const passwordinicio = useSelector((state) => state.form.password);

    const handleSubmit = (e) => {
        e.preventDefault();
        //debugger;
        if (passwordinicio === formData.password) {
            dispatch(setUsername(formData.username));
            dispatch(setEmail(formData.email));
            console.log('datos del formulario', formData);
            setModalType("success");
            setShowModal(true);
        }
        else {
            console.log('password ingresado', formData.password);
            console.log('password de inicio', passwordinicio);   
            dispatch(setUsername(' '));
            dispatch(setEmail(' '));
            setModalType("warning");
            setShowModal(true);
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword ((prev)=> !prev); // Cambio de visibilidad del estato
    };


    const onCloseModalInfo = () => {
        setShowModal(false);
        resetForm();  // Resetear el formulario al cerrar el modal
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo visible={showModal}
                message={modalType === "success" ? 'Bienvenid@  ' + formData.username : "Username/Password incorrectos"}
                type={modalType}
                onClose={onCloseModalInfo}
            />

            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>{titleForm}</h2>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <label style={{ marginLeft: "15px" }}>Module:
                        <input
                            style= {{width: "60%",marginLeft: "10px"}}
                            type="text"
                            name="module"
                            value={formData.module} readOnly disabled
                        />
                    </label>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <label style={{ marginLeft: "2px" }}> Username:
                        <input style= {{width: "60%",marginLeft: "10px"}}
                            type="text"
                            name="username"
                            value={formData.username} onChange={handleChange} required
                        />
                    </label>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <label style={{ marginLeft: "35px" }}> Email:
                        <input style= {{width: "60%",marginLeft: "10px"}}
                            type="email"
                            name="email"
                            value={formData.email} onChange={handleChange} required
                        />
                    </label>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <label style={{ marginLeft: "10px" }}> Password:
                        <input style= {{width: "60%",marginLeft: "10px"}}
                            type={showPassword ? "text" : "password"} 
                            name="password"
                            value={formData.password} onChange={handleChange} required
                        />
                        <button className="btn_show"  type="button" onClick={togglePasswordVisibility}>{showPassword ? "Show" : "Hide"} </button>
                    </label>
                </motion.div>
                <br></br>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button className="btn_login" type="submit">Login</button>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionAndHook;