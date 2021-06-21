import { React } from 'react';
import Sound from 'react-sound';
import lofisong from '../media/lofisong.opus'

const LofiSound =(
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {

    return(
        <div>
            <Sound 
                url={lofisong}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                // onLoading={handleSongLoading}
                // onPlaying={handleSongPlaying}
                // onFinishedPlaying={handleSongFinishedPlaying}
                loop={true}
                volume={5}
            />
        </div>
    )
}

export default LofiSound
