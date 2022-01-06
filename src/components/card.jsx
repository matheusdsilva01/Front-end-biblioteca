import React from 'react'
import './card.css'

export default function List({id, titulo, editora, foto}) {
    return (
        <div className="card" key={id}>
            <h1>{titulo}</h1>
             <h2>{editora}</h2>
             <img src={foto} alt={foto} />
        </div>
    )
}
