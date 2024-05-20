import React, { useState, useEffect } from "react";
import "../Sass/MessageComponent.scss";
import MessageCard from "./common/MessageCard";

export default function MessageComponent({currentUser}) {
    const [modalOpen, setModalOpen]= useState(true);
    const [isEdit, setIsEdit] = useState(true)
    return (
        <>
            <div>
                <div className="post-status">
                    <button
                        className="open-post-modal"
                        onClick={() => {
                            setModalOpen(!modalOpen);
                            setIsEdit(!isEdit);
                        }}
                    >
                        Start Messaging...
                    </button>
                    {modalOpen? <h1></h1>:<MessageCard currentUser={currentUser}/>}
                </div>
            </div>
        </>
    );
}
