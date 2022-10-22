import React from 'react'

function Comentario() {

    const comentarios2 = [
        {id: 1, texto: "Comentario um"},
        {id: 2, texto: "Comentario dois"},
        {id: 3, texto: "Comentario tres"},
        {id: 4, texto: "Comentario quatro"},
        {id: 5, texto: "Comentario cinco"},
        {id: 6, texto: "Comentario seis"},
        {id: 7, texto: "Comentario sete"}
      ];

  return (
    <>
    
        <h5>{""} Numero de Comentários : {comentarios2.length} {""}</h5>
        <ul>
        {comentarios2.map((comentario) => (
            <li key = {comentario.id}>{comentario.texto}</li>
        ))}
        </ul>
    
    </>
  )
}

export default Comentario