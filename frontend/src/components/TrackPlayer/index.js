import song from '../../lib/Bonobo - Cirrus.mp3'


function TrackPlayer () {

    return (
        <>
        <audio src='https://bandaidreact.s3.eu-west-1.amazonaws.com/1611860661188.mp3' controls='controls'></audio>
        <audio src={song} controls='controls'></audio>
        </>
    )
}

export default TrackPlayer