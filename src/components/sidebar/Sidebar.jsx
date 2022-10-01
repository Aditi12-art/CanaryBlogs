//import { Link } from "react-router-dom";

import "./sidebar.css";
import Aditi2 from "./Aditi2.jpeg";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
        src={Aditi2}
          alt=""
        />
              <p><h4>Hi, I am Aditi Mittal pursuing b.tech</h4>
              <h4>cse at Chitkara University</h4>
              {"\u00a0\u00a0"}
              <h3>Pseudonym :----Canary</h3>
              </p>
              <i> <p> I write what i feel!!!</p></i>
                
                  
       
        
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i class="sidebarIcon fa-brands fa-linkedin"></i>
       
        </div>
      </div>
    </div>
  );
}
