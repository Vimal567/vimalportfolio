import "./Landingpage.css";
import { useState } from "react";
import Loader from "./Loader";
import Header from './Header';
import SocialIcons from './SocialIcons';
import Home from './Home';
import Chatbox from './Chatbox';
import About from './About';
import Skills from "./Skills"
import Projects from './Projects';
import Education from "./Education"
import Contact from './Contact';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

const Landingpage = () => {
    const [chatClick, setChatClick] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleChatClick = () => {
        setChatClick(true);
    }

    const timer = () => setTimeout(() => setLoading(false), 1500);
    timer();

    return(
        <>
            {loading ? (
                <Loader />
            ) : (
            <div>
                <div className="pc-device">
                    <SocialIcons />
                </div>
                <Header />
                <div className='chat'>
                    {chatClick ? <Chatbox setChatClick={setChatClick} />: 
                        <div className="chatbutton" onClick={handleChatClick}>
                            <Fab color="warning" className="bubble" ><ChatIcon /></Fab>
                        </div>
                    }
                </div>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </div>
        )}
        </>
    )
}

export default Landingpage;