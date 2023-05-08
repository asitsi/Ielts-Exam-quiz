import React, { useState, useRef, useEffect } from 'react'
import styles from "../../styles/audioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import HistoryIcon from '@mui/icons-material/History';
import UpdateIcon from '@mui/icons-material/Update';
import audio from '../../assets/audio/audio.mp3';
import audioPlayerImage from '../../assets/images/audioPlayerColor.jpg';
import { calculateTime } from '../utils/calculateTime';

const AudioPlayer = (props) => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    console.log(props.audioLink)

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
        // console.log(seconds, duration, currentTime)
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    useEffect(() => {
        if (duration === currentTime) { setIsPlaying(false) }
    }, [currentTime,duration])


    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 5);
        changeRange();
    }

    return (
        <div className={styles.audioPlayer}>
            <img src={audioPlayerImage} alt='audio player' className={isPlaying ? `${styles.audioPlayerImage} ${styles.rotate}` : styles.audioPlayerImage} />
            <div className={styles.audioPlayerFlex}>
                {/* current time */}
                <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                {/* progress bar */}
                <div>
                    <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
                </div>

                {/* duration */}
                <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </div>
            <div className={styles.audioPlayerFlex}>

                <audio ref={audioPlayer} src={`${props.audioLink}`} preload="metadata"></audio>
                <button className={styles.forwardBackward} onClick={backThirty}><HistoryIcon /> 30</button>
                <button onClick={togglePlayPause} className={styles.playPause}>
                    {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
                </button>
                <button className={styles.forwardBackward} onClick={forwardThirty}>30 <UpdateIcon /></button>

            </div>
        </div>
    )
}

export default AudioPlayer;