import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets/assets";
import { Context } from "../../Context/Context";
import { useContext } from "react";

const Main = () => {
  const {
    onSent,
    recentPrompts,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSent(input); // Trigger the send function on Enter
    }
  };

  return (
    <div className="main">
      {/* Navbar */}
      <div className="nav">
        <p>
          Expria-Gemini {""}
          <img className="logo" src={assets.logo} alt="Logo" />
        </p>
        <img className="user" src={assets.user3} alt="User Icon" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            {/* Greeting */}
            <div className="greet">
              <p>
                <span>Hello, Verma.</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            {/* Cards Section */}
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places in Bangalore</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>

              <div className="card">
                <p>Briefly summarize this concept: Urban Planning</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>

              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>

              <div className="card">
                <p>Improve the readability of the following text</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {/* Display the Result */}
            <div className="result-title">
              <img src={assets.user3} alt="User Icon" />
              <p className="prompt-header">{recentPrompts}</p>
            </div>

            <div className="result-data">
              <img className="logo" src={assets.logo} alt="Logo" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        {/* Bottom Section with Input Field */}
        <div className="main-bottom">
          <div className="searchBox">
            {/* Input field bound to 'input' state */}
            <input
              value={input} // controlled input
              onChange={(e) => setInput(e.target.value)} // update state on change
              type="text"
              placeholder="Enter a prompt here"
              onKeyPress={handleKeyPress} // Handle Enter key press
            />

            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              {/* Trigger onSent when clicking the send icon */}
              {input ? (
                <img
                  onClick={() => onSent(input)}
                  src={assets.send_icon}
                  alt="Send Icon"
                />
              ) : null}
            </div>
          </div>

          {/* Information Section */}
          <p className="bottomInfo">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <span>
              <a href="/">Your privacy & Gemini Apps</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
