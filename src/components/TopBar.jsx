import React from "react";
import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next)

const TopBar = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("EN");

  const getUserBrowserLanguage = () => {
    const lang = window.navigator.language;
    if (lang.includes("es")) return "es";
    if (lang.includes("en")) return "en";
    return "en";
  };

  const countryCodeToLangCode = (countryCode) => {
    const country = countryCode.toLowerCase();
    if (country.includes("us")) return "en";
    if (country.includes("es")) return "es";
    return "en";
  };

  const handleLangSelect = (countryCode) => {
    const currentLang = countryCodeToLangCode(countryCode);
    i18n.changeLanguage(currentLang);
    setLang(countryCode);
  };

  useEffect(() => {
    const userBrowserLang = getUserBrowserLanguage();
    i18n.changeLanguage(userBrowserLang);
    setLang(userBrowserLang);
  }, []);

  return (
    <div id="topbar" className="d-flex align-items-center">
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
          <ReactFlagsSelect
            countries={["US", "ES"]}
            customLabels={{ US: "EN", ES: "ES" }}
            selected={lang.toUpperCase()}
            onSelect={handleLangSelect}
          />
          {/* <ul>
            <li>Es</li>
            <li>
              <a href="#">En</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
