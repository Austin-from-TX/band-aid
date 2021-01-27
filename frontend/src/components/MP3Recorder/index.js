import MicRecorder from 'mic-recorder-to-mp3';
import { useState, useEffect } from 'react';

const recorder = new MicRecorder({ bitRate: 128 });

function Mp3Recorder() {
    const [isRecording, setIsRecording] = useState(false)
    const [mp3Url, setMp3Url] = useState('')
    const [micAuth, setMicAuth] = useState(false)

        const start = () => {
            if(micAuth === false) {const start = () => {
                if(micAuth === false) {
                    console.log("User's mic is denied access")
                } else {
                recorder.start()
                        .then(() => {
                        setIsRecording(true)
                    }).catch((e) => console.error(e))
                 }
                }
            }}

       const stop = () => {
            recorder.stop().getMp3()
                    .then(([buffer, blob]) => {
                //  const file = new File(buffer, 'recording.mp3', {
                //      type: blob.type, 
                //      lastModified: Date.now()
                //  })
                 setMp3Url(URL.createObjectURL(blob))
                 setIsRecording(false)

                // const player = new Audio(mp3Url)
                // player.play()

         }).catch((e) => {
             alert('We could not retrieve your recording')
             console.log(e)})
         }
        

        useEffect(() => {
            //get permission from browser to utilize microphone 
            navigator.mediaDevices.getUserMedia({ audio: true})
                .then(function(stream) {
                    console.log('Permission Granted')
                    setMicAuth(false)
                })
                .catch(function(e) { console.log('Permission Denied')
                setMicAuth(true)})
        }, []);
        
    return (
        <div className='mp3recorder'>
            <header className='mp3recorder-header'>
                <button onClick={start} >Record</button>
                <button onClick={stop}  >Stop</button>
                <audio src={mp3Url} controls="controls" />
            </header>
        </div>
    )
}

export default Mp3Recorder