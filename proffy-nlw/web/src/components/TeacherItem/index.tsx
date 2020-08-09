import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/37190318?s=460&u=da61e29b008732fc908e946862196e17a378382d&v=4" alt="Arthur Santos" />
                <div>
                    <strong>Arthur Santos</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Lorem ipsum
                <br /><br />
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 7,77</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;