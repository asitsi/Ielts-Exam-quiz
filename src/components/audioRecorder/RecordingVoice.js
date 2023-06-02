import React, { useState } from 'react';
import './Recorder.css';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import useTimer from './timer';

const VoiceRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener('dataavailable', event => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
          const audioURL = URL.createObjectURL(audioBlob);
          setAudioBlob(audioBlob);
          setAudioURL(audioURL);
        });

        mediaRecorder.start();
        setRecording(true);
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.stop();
        setRecording(false);
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
  };

  return (
    <div className="voice-recorder">
      <button
        className={`record-button ${recording ? 'recording' : ''}`}
        onClick={startRecording}
        disabled={recording}
      >
      <SettingsVoiceIcon style={{display:'inline'}}/>
        {recording ? 'Recording...' : 'Start Recording'}
      </button>
      <button
        className="stop-button"
        onClick={stopRecording}
        disabled={!recording}
      >
        Stop Recording
      </button>
      {audioURL && (
        <div className="audio-player">
          <audio src={audioURL} controls />
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
