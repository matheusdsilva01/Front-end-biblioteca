import React from 'react'

export default function List({id, titulo, editora, foto}) {
    return (
        <li key={id}>
            {titulo} - {editora} - {foto}
        </li>
    )
}
