import { useState, useRef, useEffect } from 'react'
import useSound from 'use-sound'
import styles from '../styles/AudioPlayer.module.scss'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { FaPlay, FaPause } from 'react-icons/fa'

import living from '../musics/livingfailures.mp3'

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)

    const [play, {pause, duration, sound}] = useSound()

    const audioPlayer = useRef();

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
        if (!isPlaying) {
            play()
            // audioPlayer.current.play()
        } else {
            pause()
            // audioPlayer.current.pause()
        }
    }

    return (
        <div className={styles.audioPlayer}>
            {/* <audio ref={audioPlayer} src={test} preload="medata"></audio> */}
            <button className={styles.forwardBackward}><BsArrowLeftShort /> 30s</button>
            <button onClick={togglePlayPause} className={styles.playPause}>
                {!isPlaying ? <FaPlay className={styles.play} /> : <FaPause />}
            </button>
            <button className={styles.forwardBackward}>30s<BsArrowRightShort /></button>

            <div className={styles.currentTime}>0:00</div>
            <div><input className={styles.progressBar} type="range"></input></div>
            <div className={styles.duration}>3:45</div>
        </div>
    )
}
