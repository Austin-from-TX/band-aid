import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux' 
import { objectSelectorString } from 'materialize-css'

function TrackPlayer () {

    const tracks = useSelector((state) => Object.values(state.tracks))

    const playlist = tracks.map(track => (
        { name: track.title, musicSrc : track.source}
    ))

    console.log('playlist ----', playlist)

    // const [audioList, setAudioList] = useState(playlist)
   
    // useEffect(() => {
    //     setAudioList(playlist)
    // },[playlist])
    

                


    return (
        <>
                <ReactJkMusicPlayer
                    audioLists={ playlist }
                    mode={"full"}
                    showDownload={false}
                    toggleMode={false}
                    autoPlay={false}
                    showLyric={false} 
                    autoPlayInitLoadPlayList={false}
                    />
        </>
    )
}

export default TrackPlayer