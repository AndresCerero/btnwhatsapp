import React from "react";
import PropTypes from "prop-types";

type props = {
    logo: string
    phone: string
    message: string  
    width: number  
    height: number
}

const whatsappbtn = ({ logo, phone, message , width , height}:props) => {
    return(
        <div className="fixed bottom-2 right-2 flex flexColumn z-3">
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer noopener">
                <img 
                    src={logo}
                    alt={message}
                    width={width}
                    height={height}
                />
            </a>
        </div>
    )
}

whatsappbtn.propTypes = {
    logo: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}

whatsappbtn.defaultProps = {
    logo: "logo.png", 
    phone: "3116669992",
    message: "Hola desde default",
    width: 100,
    height: 100
}

whatsappbtn.schema = {
    title:"Boton de whatsapp",
    type: "object",
    properties: {
        logo:{
                title:"Logo de Whatsapp",
                type: "string",
                description:"Agrega por favor, el logo",
                widget:{
                    "ui:widget":"image-uploader"
                }
        },
        phone: {
                title: "telefono",
                type: "string",
                description:"Agrega por favor, el numero de telefono"
        },
        message:{
                title: "mensaje",
                type:"string",
                description:"Agrega por favor , el mensaje que quieres para tu cliente",
                widget:{
                    "ui:widget":"textarea"
                }
        },
        width:{
                title:"logo",
                type:"string",
                description:"Agrega por favor, el ancho"
        },
        height: {
                title:"logo",
                type:"string",
                description:"Agrega por favor, el alto"
        }
    }
}

export default whatsappbtn;
