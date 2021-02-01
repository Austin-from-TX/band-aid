import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux' 


function TrackPlayer () {

    const tracks = useSelector((state) => Object.values(state.tracks))

    const playlist = tracks.map(track => (
        { name: track.title, musicSrc : track.source, singer : track.bandName}
    ))             


    return (
        <>
                <ReactJkMusicPlayer
                    audioLists={ playlist }
                    mode={"full"}
                    showDownload={true}
                    toggleMode={false}
                    autoPlay={false}
                    showLyric={false} 
                    autoPlayInitLoadPlayList={false}
                    quietUpdate={true}
                    loadAudioErrorPlayNext={false}
                    showThemeSwitch={false}
                    showReload={false}
                    showPlayMode={false}
                    glassBg={true}
                    seeked={false}
                    once={true}

                    />
        </>
    )
}

export default TrackPlayer