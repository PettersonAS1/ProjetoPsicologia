import React from 'react'
import emailjs from 'emailjs-com'
import './Main.css'

function Main() {

    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_cdq4tsv', e.target, 'ZoQr9wvXAw9XTzssF')
            .then((result) => {
                alert('Mensagem enviada com sucesso!')
            }, (error) => {
                alert(error.message)
            });
        e.target.reset();
    }
    return (
        <div className='event-desc'>
            <div className="event-warning">
                <h2>Em construção!!!</h2>
                <p className="event-about">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Horários de funcionamento:</p>
                <p className="event-date">Segunda a Sexta das 09h as 17h</p>
            </div>
            <div className="form-area">
                <p>Agende sua consulta.</p>
                <form onSubmit={enviarEmail}>
                    <div className="form-group">
                        <label for="name">Nome</label>
                        <input type="text" name="name" placeholder="Digite seu nome." />
                    </div>
                    <div className="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" placeholder="Digite seu E-mail." />
                    </div>
                    <div className="form-group">
                        <label for="phone">Telefone</label>
                        <input type="text" name="phone" placeholder="Digite seu número." />
                    </div>
                    <input type="submit" class="btn" value="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default Main