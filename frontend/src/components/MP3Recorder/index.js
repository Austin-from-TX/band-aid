import MicRecorder from 'mic-recorder-to-mp3';
import { useState, useEffect } from 'react';
import RecorderForm from './RecorderForm';

const recorder = new MicRecorder({ bitRate: 128 });

function Mp3Recorder() {
    const [isRecording, setIsRecording] = useState(false)
    const [mp3Url, setMp3Url] = useState('')
    const [micAuth, setMicAuth] = useState(false)
    const [track, setTrack] =useState('')

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

                 //TODO:  following code to POST to backend upload route 
                 
                //  setTrack([new File(buffer, `Audio-Recording[${Date.now()}]`, {
                //      type: blob.type, 
                //      lastModified: Date.now()
                //  })] )

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
            <header className='mp3recorder-header'  >
               {!isRecording ? <button className='btn btn-header cyan darken-4 text-lighten-5' style={{marginBottom: '45px' }} onClick={start} >Record</button> :
               <button className='btn btn-header red darken-3 text-lighten-5' style={{marginBottom: '45px' }} onClick={stop} >Stop</button>} 
                <audio src={mp3Url} controls="controls" />
                {track && <RecorderForm track={track}/>}
            </header>
        </div>
    )
}

export default Mp3Recorder