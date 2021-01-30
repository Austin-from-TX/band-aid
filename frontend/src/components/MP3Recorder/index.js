import MicRecorder from 'mic-recorder-to-mp3';
import { useState, useEffect } from 'react';
import RecorderForm from './RecorderForm';
import ffmpeq from 'ffmpeg'

const recorder = new MicRecorder({ bitRate: 128 });

function Mp3Recorder() {
    const [isRecording, setIsRecording] = useState(false)
    const [mp3Url, setMp3Url] = useState('')
    const [micAuth, setMicAuth] = useState(false)

        const start = () => {
            if(micAuth === false) {
                    console.log("User's mic is denied access")
                } else {
                recorder.start()
                        .then(() => { 
                        setIsRecording(true)
                    }).catch((e) => console.error(e))
                 }
                }
            

       const stop = () => {
            recorder.stop().getMp3()
                    .then(([buffer, blob]) => {
                        
                 setMp3Url(URL.createObjectURL(blob))
                 setIsRecording(false)

                  const file = new File(buffer, mp3Url, {
                     type: blob.type, 
                     lastModified: Date.now()
                 })   

                   


         }).catch((e) => {
             alert('We could not retrieve your recording')
             console.log(e)})
         }
        

        useEffect(() => {
            //get permission from browser to utilize microphone 
            navigator.mediaDevices.getUserMedia({ audio: true})
                .then(function(stream) {
                    console.log('Permission Granted')
                    setMicAuth(true)
                })
                .catch(function(e) { console.log('Permission Denied')
                setMicAuth(false)})
        }, []);

    return (
        <div className='mp3recorder'>
            <header className='mp3recorder-header'>
               {!isRecording ? <button onClick={start} >Record</button> :
               <button onClick={stop} >Stop</button>} 
                <audio src={mp3Url} controls="controls" />
                {mp3Url && <RecorderForm />}
            </header>
        </div>
    )
}

export default Mp3Recorder