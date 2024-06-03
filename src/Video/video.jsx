import { useState } from 'react';
import './video.css'

function Video(props) {
    const {title, channelName, img} = props;
    const [likesCount, setLikesCount] = useState(0);
    
    const increaseLikesCount = () => {
        setLikesCount(likesCount + 1);
    }
    return (
        <li className='video'>
            <img className='video-img' src={img} alt="video image" />
            <p>{title}</p>
            <p>{channelName}</p>
            <div className='video-footer'>
                <p>Лайки: {likesCount}</p>
                <button onClick={increaseLikesCount}>Лайк</button>
            </div>
        </li>
    );
}

export default Video;