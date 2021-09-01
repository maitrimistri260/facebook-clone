import { Avatar } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import './MessageSender.css';
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from "../../../../StateProvider";
import db from '../../../../firebase';
import firebase from 'firebase';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageToPost,
        })


        setInput("");
        setImageToPost("");

    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }

    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input" type="text"
                        placeholder={`What's on your mind, ${user.displayName} ?`} />
                    <button onClick={handleSubmit} type="submit">HiddenSubmit</button>
                </form>
                {imageToPost && (
                    <div  onClick={removeImage} className="removal">
                        <img className="removal-image"src={imageToPost} alt="" />
                        <p onClick={removeImage}  className="image-text">Remove</p>
                    </div>

                )}
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div onClick={() => filePickerRef.current.click()} className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photos</h3>
                    <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden />
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
