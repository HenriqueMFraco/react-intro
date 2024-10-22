import { useState } from 'react';
import '../index.css';

export default function PostInsta() {
    const [likes, setLikes] = useState(5489);
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
        setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1);
    };

    return (
        <div className="card">
            <div className="top">
                <div className="userDetails">
                    <img src="https://i.redd.it/mkozxqcsgoxc1.jpeg" alt="user" className="profileImg" />
                    <h3>Serjão<br /><span>Web Designer</span></h3>
                </div>
            </div>
            <img src="https://pbs.twimg.com/media/ESvauE9WAAAKXAQ.jpg" alt="post" className="imgBg" />
            <div className="btns">
                <span 
                    className={`heart ${liked ? 'liked' : ''}`} 
                    onClick={toggleLike}
                    role="button"
                    aria-pressed={liked}
                >
                    {liked ? '❤️' : '🤍'}
                </span>
            </div>
            <h4 className="likes">{likes} likes</h4>
            <h4 className="message">
                Mascara pronto pra noite
                <span>#Skol</span>
                <span>#Mascara</span>
            </h4>
            <h5 className="postTime">5 hours ago</h5>
        </div>
    );
}
