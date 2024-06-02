import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Video from './Video/video'
import { VIDEOS } from './mocks'
import './App.css'

function App() {
  return (
    <>
      <ul className="video-container">
        {VIDEOS.map((video) => (<Video key={video.id} title={video.title} channelName={video.channelName} img={video.img} />))}
      </ul>
    </>
  )
}

export default App
