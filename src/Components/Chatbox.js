import "./Chatbox.css";
import { useState, useEffect, useRef } from "react";
import { GiDevilMask } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import vimalLogo from "./images/chat/vimal.jpg";
import io from "socket.io-client";

const ENDPOINT = "https://chat-box.onrender.com/";

const Chatbox = ({ setChatClick }) => {

    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [joinedChat, setJoinedChat] = useState(false);
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEnd = useRef(null);
    const socketRef = useRef(null);

    const joinChat = (event) => {
        event.preventDefault();
        if (username.trim()) {
            setLoading(true);
            socketRef.current = io(ENDPOINT);
            //Sending the username while joining chat
            socketRef.current.emit("join", username, (response) => {
                // Handle the response received from the server
                // console.log("Response from server:", response);

                if (response.status === "success") {
                    //First updating messages list
                    setMessages(response.data?.messages);
                    //Subscribing for users list and messages
                    socketRef.current.on("users", handleUserUpdate);
                    socketRef.current.on("newMessage", handleNewMessages);
                    setJoinedChat(true);
                    setLoading(false);
                } else {
                    handleLogout();
                    return;
                }
            });
        }
    }

    const handleUserUpdate = (usersList) => {
        setUsers(usersList);
    }

    const handleNewMessages = (messagesList) => {
        setMessages((prevMessages) => [...prevMessages, messagesList]);
    }

    const handleClose = () => {
        setChatClick(false);
    }

    const handleMessageSubmit = async (event) => {
        event.preventDefault();
        if (!newMessage.trim())
            return;
        const lineNumber = messages.length;
        const newMessageObj = {
            "text": newMessage,
            "person": "user",
            "line": lineNumber
        };
        let payload = {
            "username": username,
            "messageObj": newMessageObj
        };
        try {
            socketRef.current.emit("sendMessage", payload);
        } catch (error) {
            console.log(error)
        }
        setNewMessage("");
    }

    const handleLogout = async () => {
        try {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null
            }
        } catch (error) {
            console.log(error);
        }
        setUsername("");
        setJoinedChat(false);
        setMessages([]);
        setNewMessage("");
    }

    const scrollToBottom = () => {
        messagesEnd.current?.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div id="chatbox">
            {/* Header */}
            <div className="chat-header">
                <img alt="vimal" src={vimalLogo} className="vimalLogo" />How Can I help you?
                <button title="close" className="close-button" onClick={handleClose}>X</button>
                {joinedChat ? <LogoutIcon className="logout" onClick={handleLogout} /> : null}
            </div>

            {joinedChat ? <div className="users-online">
                <strong>Online Users:</strong> <span className="users">{username}{users.find(user => user.username === "admin") ? ", Admin" : null }</span>
            </div> : null}

            {/* Chat Body */}
            <div className="chat-body">
                {!joinedChat ?

                    // Create User
                    (<div className="start-chat">
                        <span className="welcome-text">Welcome user, Enter username to start the live chat.
                            I will try to reply you when I get connected.</span>
                        <form onSubmit={joinChat}>
                            <input className="username-input" placeholder="Type username!" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <Button variant="contained" color="warning" onClick={joinChat}>
                                Enter
                            </Button >
                        </form>
                    </div>) :

                    // Live chat
                    (<div className="chat-started">
                        <span className="welcome-message">
                            Welcome {username}! 🙏, Start chat I will try to get connected as soon as possible!!
                        </span>
                        {/* <span title="refresh">
                            <RefreshIcon className="refresh-icon" onClick={handleRefreshClick} />
                        </span> */}

                        {loading ?
                            <div className="loading">
                                Creating user Chat, please be patient!<br />Sometimes it takes upto 1 minute.
                            </div>
                            : messages.map((message, index) => {
                                return <div key={index} className={message.person === "admin" ? "admin" : "user"}>
                                    <span className="person">
                                        {message.person === "admin" ? <GiDevilMask /> : <AiOutlineUser />}{message.person === "admin" ? "admin:" : `${username}`}
                                    </span>
                                    {message.text}
                                    <div ref={messagesEnd} />
                                </div>
                            })
                        }
                    </div>)
                }
            </div>

            {/* Chat Input */}
            {!loading && joinedChat ?
                <div className="chat-input">
                    <form onSubmit={handleMessageSubmit}>
                        <input value={newMessage} className="input-para" placeholder="Type your message here..." onChange={(e) => setNewMessage(e.target.value)} />
                        <button type="submit" title="send" value={newMessage} className="input-send" onClick={handleMessageSubmit}>{">"}</button>
                    </form>
                </div> : null
            }

            {/* Credits label */}
            <div className="chat-credit">chat box created by vimal</div>
        </div>
    )
}

export default Chatbox;