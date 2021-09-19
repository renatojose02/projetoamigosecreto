import React, { useState }from "react";

export default function Primeiro(props) {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Olá mundo {props.name}!</h1>;
            <p>Você clicou {contador}.</p>
            <button onClick={() => setContador(contador +1)}>
                Click Aqui
                </button>
            </div>
    );

}