import React, { useState, useEffect } from "react";
import "../Sass/MessageComponent.scss";
import MessageCard from "./common/MessageCard";
import messageIcon from "../assets/messageIcon.png"

export default function MessageComponent({ currentUser }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [messageData, setMessageData] = useState([]);
    const [typingData, setTypingData] = useState(false);
    function handleSubmit(data) {
        setMessageData([...messageData, data]);
    }

    function setType(data) {
        setTypingData(data);
    }
    return (
        <>
            <div>
                <div className="post-status">
                    <div className="container">

                    <div
                        className="open-post-modal"
                        onClick={() => {
                            setModalOpen(false);
                            setIsEdit(false);
                        }}
                    >
                        Messages
                    </div>
                    <img src={messageIcon} style={{width:"20px", display:"inline-block", position:"relative", top:"-0.7vh"}} alt="" srcset="" />
                    </div>
                    {modalOpen ? <h1></h1> : <MessageCard handleSubmit={handleSubmit} setType={setType} />}
                    {messageData.map((ele) => {
                        return <p className="message-row">{ele}</p>;
                    })}
                    {typingData ? <p style={{fontStyle:"italic", marginLeft:"2vw", fontSize:"small"}}>typing....</p> : <p></p>}
                </div>
            </div>
        </>
    );
}
