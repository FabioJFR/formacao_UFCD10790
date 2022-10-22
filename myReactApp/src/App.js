import logo from './logo.svg';
import './App.css';
import Media from './componetes/Media';
import Comentario from './componetes/Comentario';

function App() {

  //variaveis
  const title = "Blog";
  let nrAlunos = 25;
  let nrPosts = 100;
  const atencao = "Numero de comentarios";

  //lista - em javascrip inicia-se com []
  const comentarios = [
    "1","2","3","4","Cinco","seis","sete","oito"
  ];

  /** 
  const comentarios2 = [
    {id: 1, texto: "Comentario um"},
    {id: 2, texto: "Comentario dois"},
    {id: 3, texto: "Comentario tres"},
    {id: 4, texto: "Comentario quatro"},
    {id: 5, texto: "Comentario cinco"},
    {id: 6, texto: "Comentario seis"},
    {id: 7, texto: "Comentario sete"}
  ];
  */
  const show = true;

/**
  //if/else
  if(corDoPorto == azul){
    "futuro campeão";
  }else{
    "não há liga";
  }

  //ternario
  corDoPorto == azul ? "futuro campeao" : "nao há liga";
 */

  return (

    <>

    <h1 className='meuEstilo'>{title}</h1>
    <p>Posts</p>
    <h3>Número de Posts : {nrPosts}</h3>

    {show ? <Media /> : null}

    <h5>{atencao.toUpperCase()} : {comentarios.length}</h5>
    <ul>
      {comentarios.map((comentario) => (
        <li key = {comentario}>{comentario}</li>
      ))}
    </ul>

      <Comentario />

     {/**<h5>{""} {atencao.toUpperCase()} : {comentarios2.length} {""}</h5>
    <ul>
      {comentarios2.map((comentario) => (
        <li key = {comentario.id}>{comentario.texto}</li>
      ))}
      </ul>*/}
    
    </>
  );



}

export default App;
