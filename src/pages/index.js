import * as React from 'react'
import Layout from '../components/Layout'
import BackgroundSlider from 'react-background-slider'
import useSound from 'use-sound'
import { div } from '../styles/index.module.scss'

import imagem0 from "../images/0.jpg"
import imagem1 from "../images/1.jpg"
import imagem2 from "../images/2.jpg"
import imagem3 from "../images/3.jpg"
import imagem4 from "../images/4.jpg"
import imagem5 from "../images/5.jpg"
import imagem6 from "../images/6.jpg"
import imagem7 from "../images/7.jpg"
import imagem8 from "../images/8.jpg"
import imagem9 from "../images/9.jpg"
import imagem10 from "../images/10.jpg"
import imagem11 from "../images/11.jpg"
import imagem12 from "../images/12.jpg"
import imagem13 from "../images/13.jpg"
import imagem14 from "../images/14.jpg"
import imagem15 from "../images/15.jpg"
import imagem16 from "../images/16.jpg"

import song0 from "../source/song0.mp3"
import song1 from "../source/song1.mp3"
import song2 from "../source/song2.mp3"
import song3 from "../source/song3.mp3"
import song4 from "../source/song4.mp3"
import song5 from "../source/song5.mp3"
import song6 from "../source/song6.mp3"
import song7 from "../source/song7.mp3"
import song8 from "../source/song8.mp3"
import song9 from "../source/song9.mp3"

const songs = [song0, song1, song2, song3, song4, song5, song6, song7, song8, song9]
const images = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12, imagem13, imagem14, imagem15, imagem16]

const IndexPage = () => {
  const [count, setCount] = React.useState(0);
  const [song, setSong] = React.useState(songs[count])
  const [play, {pause, stop}] = useSound(song);
  

  return (
    <div className={div}>
      <BackgroundSlider images={images} duration={2} transition={0.25}  />
      <button type="button"  onMouseDown={() => pause()} onClick={() =>  play()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
        </svg>
      </button>
      <button type="button" onClick={() => {pause()}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
          <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>
      <button type="button" onMouseDown={() => {
        stop();
        setCount((count+1)%songs.length);
        setSong(songs[count]);
      }}
      onClick={() => play()}
      >
      
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward" viewBox="0 0 16 16">
          <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z" />
        </svg>
      </button>

      <Layout pageTitle="Aniversário do Duds">
        <h3><br/><br/><br/>"Parabéns Duds"<br/>- Beatriz</h3>
        <h3><br/><br/><br/>"Me paga canalha"<br/>- Gian</h3>
        <h3><br/><br/><br/>"Nenhuma"<br/>- Sarah</h3>
        <h3><br/><br/><br/>"Como que eu passei 15 anos sendo amigo desse mlk nmrl"<br/>- Lechner</h3>
        <h3><br/><br/><br/>"Mentira a gente é quase irmão"<br/>- Lechner também</h3>
        <h3><br/><br/><br/>"Fdc n sei fazer site e o fundo cortou que incrível"<br/>- Lechner de novo</h3>
        <h3><br/><br/><br/>"I SAID OOOOOOOOOOOOOOOO"<br/>- Blinding Lights but he said ooh at 0:50</h3>
        <h3><br/><br/><br/>"Min da meu singaro"<br/>- Algum mendigo q o Duds conhece sla algo do tipo</h3>
        <h3><br/><br/><br/>"DIÁRIO DE UM BANANAKKK MUITO BOM"<br/>- Orgulho de ter etero</h3>
        <h3><br/><br/><br/> NÓS TE AMAMOS IRMÃO * emoji de coração * <br/><p/></h3>
        <p>Playlist:<br/>Blinding Lights - The Weeknd<br/>Instant Crush - Daft Punk (ft. Julian Casablancas)<br/>Harder, Better, Faster, Stronger - Daft Punk<br/>Saveiro Pega no Breu - ???<br/>Fazer Dinheiro - Teto (ft. Doode)<br/>Camisinha de Sabor - Bonde da Stronda<br/>Rap do Zoro - 7 Minutoz<br/>Playsson Raiz - Bonde da Stronda<br/>Rap do Barba Branca - Tauz<br/>One More Time* - Daft Punk<br/>*: Mais Uma Vez, pq a playlist repete tlgd?<br/>**LÊ ISSO ANTES o player demora pra carregar então se apertar o skip dms ele toca um monte ao msm tempo :)</p>
      </Layout>
    </div>

  )
}

export default IndexPage