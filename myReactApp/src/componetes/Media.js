import React from 'react'

function Media() {

  let nrAlunos = 25;
  let nrPosts = 100;
  return (
    <>

      <h3>Media de Posts: {nrPosts/nrAlunos}</h3>

    </>
  )
}

export default Media

//comando para gerar componente React : rfce
// comando para refrescar as branches : git fecth
//comando para ir buscar alterações : git pull
//comando para visualizr a branch : git branch