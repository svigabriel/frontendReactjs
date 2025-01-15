import { useSelector } from 'react-redux'
import { useState } from 'react';

const About = () => {
    //los hooks en react son funciones ya definidas
    //los hooks es siempre tienen el prefijo use
    //hook useState, use Effect, use Context, use Ref, use Transition
    //es posible crear nuetros propios hooks: useService, useImage, useForm
    //el hook useState me permite manejar variaable de estado
    const [ nameComponent, setNameComponent ] = useState('About');

    const count = useSelector((state) => state.product.initialValue);
 
    //const product = useSelector((state) => state.product.dataProduct)
    return (
        <>
            <p>Component {nameComponent} </p>
            
            <button onClick={() => {setNameComponent('Curso de React')}} />
<button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
            <span>Valor de InitialValue es { count }</span>
            <br />
            
        </>
    );
}
export default About;

