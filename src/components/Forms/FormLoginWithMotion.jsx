import { useState } from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../Modals/ModalInfo.jsx";
import { initialState } from "../../store/features/Form/FormSlice.js";
import { useDispatch } from "react-redux";
import { setUsername } from "../../store/features/Form/FormSlice.js";
import { setEmail } from "../../store/features/Form/FormSlice.js";
import { setPassword } from "../../store/features/Form/FormSlice.js";
import { useSelector } from 'react-redux'


// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch();
    const { formData, handleChange, resetForm } = useForm(initialState);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("succes");
    const passwordinicial = useSelector((state) => state.form.password);

    const handleSubmit = (e) => {
        e.preventDefault();
        //debugger;
        if (passwordinicial === formData.password) {
            dispatch(setUsername( formData.username));
            dispatch(setEmail( formData.email));
            console.log('datos del formulario', formData);
            setModalType("success");
            setShowModal(true);
        }
        else {
            console.log('passwordinicial', passwordinicial);
            console.log('passwordingresado', formData.password);
            setModalType("warning");
            setShowModal(true);
        }
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
                <table>

                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>

                            <tr>
                                <td>
                                    <label style={{ marginLeft: "15px" }}>Module:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="module"
                                        value={formData.module} readOnly disabled
                                    />
                                </td>
                            </tr>

                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>

                            <tr>
                                <td>
                                    <label style={{ marginLeft: "2px" }}> Username:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username} onChange={handleChange} required
                                    />
                                </td>
                            </tr>

                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>

                            <tr>
                                <td>
                                    <label style={{ marginLeft: "35px" }}> Email:</label>
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email} onChange={handleChange} required
                                    />
                                </td>
                            </tr>

                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>

                            <tr>
                                <td>
                                    <label style={{ marginLeft: "10px" }}> Password:</label>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password} onChange={handleChange} required
                                    />
                                </td>
                            </tr>

                        </div>
                    </motion.div>
                </table>
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