import React from "react";
import { useTranslation } from "react-i18next";


const TopBar = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bx bx-phone d-flex align-items-center">
            <span>+56 9 20390272</span>
          </i>
          <i className="bx bx-time-five d-flex align-items-center ms-4">
            <span>{t("topbar.schedule")} </span>
          </i>
        </div>
        <label htmlFor="select" className="language-switcher">
          <select
            name="select"
            id="select"
            className="language-switcher-input"
            value={t.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="por">Portugués</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default TopBar;
