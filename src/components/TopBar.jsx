import React from "react";

const TopBar = () => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bx bx-phone d-flex align-items-center">
            <span>+56 9 20390272</span>
          </i>
          <i className="bx bx-time-five d-flex align-items-center ms-4">
            <span> Lun-Sab: 12:30 - 23:00</span>
          </i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
            <li>
              <a href="#">Po</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
