import "./Chatbox.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { GiDevilMask } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from "@mui/material/CircularProgress";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import vimalLogo from "./images/chat/vimal.jpg";

const Chatbox = ({setChatClick}) => {

    const [newName, setNewName] = useState(true);
    const [chatInputDisplay, setChatInputDisplay] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [localName, setLocalName] = useState("");
    const [userData, setUserData] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const messagesEnd = useRef(null)

    const fetchData = async() => {
        try{
            setLoading(true);
            let getName = localStorage.getItem("name");
            const fetched = await axios.get("https://chat-box.onrender.com/" + getName);
            setUserData(fetched.data);
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    const newChat = async(name) => {
        try{
            const object = {"name": name};
            await axios.post("https://chat-box.onrender.com/", object);
        }catch(error){
            console.log(error);
        }
    }

    const handleClose = () => {
        setChatClick(false);
    }

    const handleNameEntered = (event) => {
        const name = event.target.value;
        localStorage.setItem("name", name);
        setLocalName(name);
        setNewName(false);
        setChatInputDisplay(true);
        newChat(name);
        fetchData();
    }
    
    const handleNameInput = (event) => {
        const name = event.target.value;
        setNameInput(name);
    }

    const handleNewMessage = (event) => {
        const message = event.target.value;
        setNewMessage(message);
    }

    const handleRefreshClick = () => {
        fetchData();
    }

    const handleMessageSubmit = async(event) => {
        const message = event.target.value;
        if(!message)
            return
        const newLine = userData.message.length + 1;
        const name = userData.name;
        const newMessageObj = {
            "text" : message,
            "person": "user",
            "line": newLine
        }
        let newObj = {
            "name": name,
            "message": [newMessageObj]
        }
        try{
            await axios.patch("https://chat-box.onrender.com/", newObj);
        }catch(error){
            console.log(error)
        }
        const oldMessage = userData.message;
        newObj = {
            "name": name,
            "message": [...oldMessage, newMessageObj]
        }
        setUserData(newObj)
        setNewMessage("")
        fetchData();
    }

    const handleClearChat = async() => {
        try{
            await axios.delete("https://chat-box.onrender.com/" + localName);
        }catch(error){
            console.log(error)
        }
        localStorage.clear();
        setNewName(true);
        setChatInputDisplay(false);
    }

    const checkNameStatus = () => {
        let getName = localStorage.getItem("name");
        if(getName){
            setNewName(false);
            setChatInputDisplay(true);
            setLocalName(getName);
        }else{
            setNewName(true);
            setChatInputDisplay(false);
        }
    }

    const scrollToBottom = () => {
        messagesEnd.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [userData]);

    useEffect(() => {
        checkNameStatus();
        if(chatInputDisplay)
            fetchData();
    }, [chatInputDisplay]
    )

    return(
        <div id="chatbox">
            <div className="chat-header">
                <img alt="vimal" src={vimalLogo} className="vimalLogo" />How Can I help you?
                <button title="close" className="close-button" onClick={handleClose}>X</button>
                {chatInputDisplay ?<LogoutIcon className="logout" onClick={handleClearChat} /> : ""}
            </div>
            <div className="chat-body">
                {newName ? 
                    <div className="start-chat">
                        <span className="Welcome-name-para">Welcome user, Enter you name to start the live chat.
                        I will try to reply you when I get connected.</span>
                        <input  className="name-input" placeholder="Type your name!" onChange={handleNameInput} />
                        <Button variant="contained" value={nameInput} onClick={handleNameEntered}>Enter</Button >
                    </div>:
                    <div className="chat-started">
                        <span className="welcome-message">
                            <NotificationsNoneIcon />Welcome user 🙏, Start chat I will try to get connected as soon as possible!!
                        </span>
                        <span title="refresh">
                            <RefreshIcon className="refresh-icon" onClick={handleRefreshClick} />
                        </span>
                        {loading ? <div className="loading"><CircularProgress />Loading messages</div> : 
                        userData.message.map((item, index) => {
                            return <div key={index} className={item.person === "admin" ? "admin" : "user"}>
                                <span className="person">
                                    {item.person === "admin" ? <GiDevilMask /> : <AiOutlineUser />}{item.person === "admin" ? "admin:" : `${localName}:`}
                                </span><br />
                                {item.text}
                                <div ref={messagesEnd} />
                            </div>
                        })
                        }
                    </div>
                }
            </div>
            {chatInputDisplay ? 
                <div className="chat-input">
                    <input value={newMessage} className="input-para" placeholder="Type your message here..." onChange={handleNewMessage} />
                    <button title="send"  value={newMessage} className="input-send" onClick={handleMessageSubmit}>{">"}</button>
                </div>:" "
            }
            <div className="chat-credit">chat box created by vimal</div>
        </div>
    )
}

export default Chatbox;