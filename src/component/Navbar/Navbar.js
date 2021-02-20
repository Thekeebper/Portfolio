import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  const handleToggle = () => {
    settoggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <header className={`${toggle ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fas fa-home fs"></i>
              </span>
              <span className="title">หน้าหลัก</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/skills">
              <span class="icon">
                <i class="fa fa-cogs fs"></i>
              </span>
              <span class="title">ทักษะความสามารถ</span>
            </Link>
          </li> */}
        </ul>
      </header>
      <div
        className={`toggle ${toggle ? "active" : ""}`}
        onClick={handleToggle}
      ></div>
    </>
  );
}

export default Navbar;
