import * as React from 'react'
import Layout from '../components/Layout'
import BackgroundSlider from 'react-background-slider'
import useSound from 'use-sound'
import { div } from '../styles/index.module.scss'

import imagem1 from "../images/CPU.jpg"
import imagem2 from "../images/ehsobreisso.jpg"

import song0 from "../source/song0.mp3"
import song1 from "../source/song1.mp3"
import song2 from "../source/song2.mp3"
import song3 from "../source/song3.mp3"
import song4 from "../source/song4.mp3"
import song5 from "../source/song5.mp3"
import song6 from "../source/song6.mp3"
import song7 from "../source/song7.mp3"
import song8 from "../source/song8.mp3"

const songs = [song0, song1, song2, song3, song4, song5, song6, song7, song8]

const IndexPage = () => {
  const [count, setCount] = React.useState(0);
  const [song, setSong] = React.useState(songs[count])
  const [play, {pause, stop}] = useSound(song);
  

  return (
    <div className={div}>
      <BackgroundSlider images={[imagem1, imagem2]} duration={2} transition={0.2} />
      <button type="button"  onMouseDown={() => pause()}onClick={() =>  play()}>
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
        stop()
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
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </div>

  )
}

export default IndexPage