import useForm from "../Hooks/useForm.js";
const FormLoginwithHook =({ titleForm })=>{
   const {formData,handleChange} = useForm({
     username: '',
     email: '',
   });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };
   
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm} + Hook </h3>
                <div>
                    <label>
                        Username:
                        <input type="text" name="username" required value = {formData.username}
                         onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" required value = {formData.email}
                         onChange={handleChange}/>
                    </label>
                </div>
                <button type="submit">Enviar</button>

            </form>
        </>
    );
};
export default FormLoginwithHook;