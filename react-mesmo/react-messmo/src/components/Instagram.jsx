import { useState } from 'react';
import { useMediaQuery } from 'react-responsive' //biblioteca do dark mode
import {useEffect} from 'react'
import Toggle from 'react-switch';
import '../index.css'

export default function PostInsta(){
    
    return(
        <>
        <body>
    <div class="card">
        <div class="top">
            <div class="userDeatils">
                <div class="profileImg">
                    <img src="https://i.redd.it/mkozxqcsgoxc1.jpeg" alt="user" class="cover" />
                </div>
                <h3>Serjão<br/><span>Web Designer</span></h3>
            </div>
            <div class="dot">
                <img src="dot.png" alt="dot"/>
            </div>
        </div>
        <div class="imgBg">
            <img src="https://pbs.twimg.com/media/ESvauE9WAAAKXAQ.jpg" alt="imagem teste 1"/>
        </div>
        <div class="btns">
            <div class="left">
                <img src="heart.png" alt="heart" class="heart" onclick="likeButton()"/>
                <img src="comment.png" alt="comment"/>
                <img src="share.png" alt="share"/>
            </div>
            <div class="right">
                <img src="bookmark.png" alt="bookmark"/>
            </div>
        </div>
        <h4 class="likes">5,489 likes</h4>
        <h4 class="message">
            <b>Serjão</b>
            Mascara pronto pra noite
            <span>#Skol</span>
            <span>#MAscara</span>
        </h4>
        <h4 class="comments">View all 546 comments</h4>
        <div class="addComments">
            <div class="userImg">
                <img src="User.jpg" alt="user" class="cover"/>
            </div>
            <input type="text" class="text" placeholder="Add a comment..."/>
        </div>
        <h5 class="postTime">5 hours ago</h5>
    </div>
</body>
    </>
    )
}