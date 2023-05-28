import logo from "./logo.svg";
import "./App.css";
import person_icon from "./icons/person_icon.png";
// import password_icon from "./icons/eye_icon.png"
import login_person_icon from "./icons/login_person_icon.png"
import React, { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const changeLogging = () => {
    setIsLoggedIn (prev => !prev )
  }

  const logOut = () => {
    setUserName ("");
    changeLogging ();
  }
  
  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="registration_box">
          <img src={person_icon} className="human_icon" />
          <h3>{userName}</h3>
          <img src={login_person_icon} className="login_person" />
          <button className="blue_button" onClick={logOut}>LOG OUT</button>
        </div>
      ) : (
        <div className="registration_box">
          <img src={person_icon} className="human_icon" />
          <h3>Login</h3>
          <p>Hello My Friend</p>
          <div className="input_div">
            <input type="email" placeholder="Email" onChange={changeLogging}/>
            <img src={person_icon} className="input_icon" />
          </div>
          <div className="input_div">
            <input
              type="password"
              placeholder="Password"
            />
            {/* <img src={password_icon} className="input_icon" /> */}
          </div>
          <button className="blue_button" onClick={() => setIsLoggedIn(true)}>
            LOG IN
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
