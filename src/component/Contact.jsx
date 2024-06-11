import REact from 'react';
import '/app.css';
import '/index.css';

function Contact({id, title}) {
    return (
        <div className="contact" id={id}>
            <h1>{title}</h1>

        <ContactForm/>
        </div>
    );
}

export {Contact};
