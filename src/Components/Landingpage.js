import "./Landingpage.css";
import { useState } from "react";
import Header from './Header';
import Home from './Home';
import SocialIcons from './SocialIcons';
import About from './About';
import Skills from "./Skills"
import Projects from './Projects';
import Education from "./Education"
import Contact from './Contact';
import Chatbox from './Chatbox';
import ChatIcon from '@mui/icons-material/Chat';

const Landingpage = () => {
    const [chatClick, setChatClick] = useState(false);

    const handleChatClick = () => {
        setChatClick(true);
    }

    return(
        <>
            <div className="pc-device">
                <SocialIcons />
            </div>
            <Header />
            <div className='chat'>
                {chatClick ? <Chatbox setChatClick={setChatClick} />: 
                    <div className="chatbutton" onClick={handleChatClick}>
                        <div className="bubble-box">Click here to chat live</div>
                        <div className="bubble" ><ChatIcon /></div>
                    </div>
                }
            </div>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </>
    )
}

export default Landingpage;