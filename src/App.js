import "./App.css";
import { TbMessageChatbot } from "react-icons/tb";
import { CgMinimize } from "react-icons/cg";
import { WiTime8 } from "react-icons/wi";
import { HiDotsHorizontal } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const toggleModle = () => {
    setModal(!modal);
    if (modal) {
      setFullScreen(false);
    }
  };

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div className="App">
      <div className="toggle">
        <TbMessageChatbot className="icon" onClick={toggleModle} />
      </div>

      {modal && (
        <div className={`chatting-box overlay ${fullScreen ? "fullscreen" : ""}`}>
          <div className="chatting-div">
            <h4>Q&A Beta</h4>
            <p href=""><WiTime8 /></p>
            <p href=""><HiDotsHorizontal /></p>
            <p href=""><GiCancel onClick={toggleModle} /></p>
            <p  onClick={toggleFullScreen}>
            <CgMinimize />
            </p>
          </div>

          <div className="chatting-info">
            <h3>Hi Anika Kalaiselvan</h3>
            <h4>Q&A combines all of GPT-4's general knowledge with the unique context of your Notion workspaces. Ask me about anything!</h4>
          </div>

          <div className="d-flex chatting-detail">
            <h3><IoSearchCircle className="chatting-ser" />Find in</h3>
            <h3>Get unlimited AI</h3>
          </div>

          <div className="chatting-button mt-3">
            <form>
              <input type="search" placeholder="Ask AI anything" />
              <button type="search"><IoMdArrowRoundUp /></button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
