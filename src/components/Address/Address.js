import React from 'react'
import './Address.css'
import { useForm } from 'react-hook-form';

function Address() {

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data.uf);
            setValue('address', data.logradouro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);

            if (data.uf == 'DF') {
                alert("Que legal! Estamos disponiveis em " + data.localidade + ", marque já sua consulta.")
            } else {
                alert("Infelizmente ainda não estamos disponiveis " + (data.uf == 'RJ' ? " em " : "no ") + data.uf + " :(")
            }
        });


    }
    return (
        <div className='local-area'>
            <div id="address">
                <i className="bi bi-geo-alt-fill"></i>
                <div id="address-details">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            CEP:
                            <input type="text" {...register("cep")} onBlur={checkCEP} />
                        </label>
                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </div>
            <div className="about-location">
                <h3>Local</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur aperiam debitis consectetur natus optio tempora laborum et! Corrupti blanditiis ex numquam quae ipsa odit provident quaerat deleniti laboriosam animi.</p>
            </div>
        </div>
    )
}

export default Address