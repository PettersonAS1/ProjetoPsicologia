import React from 'react'
import './Address.css'

function Address() {
    return (
        <div className='local-area'>
            <div id="address">
                <i className="bi bi-geo-alt-fill"></i>
                <div id="address-details">
                    <p>Rua Brasilia, 1733</p>
                    <p>Bairro das Emas</p>
                    <a href=""><button className='btn btn-primary'>Consultar Disponibilidade</button></a>
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