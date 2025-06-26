import { useTranslation } from "react-i18next";

const TopBar = () => {
  const [t, i18n] = useTranslation("global");

  const languages = [
    {
      code: "es",
      label: "ES",
      flag: (
        <img
          src={"../img/icons/chile_18293.ico"}
          alt="CL"
          style={{ width: "0.8em", verticalAlign: "middle" }}
        />
      ),
    },
    {
      code: "en",
      label: "EN",
      flag: (
        <img
          src={"../img/icons/estados-unidos.png"}
          alt="CL"
          style={{ width: "0.8em", verticalAlign: "middle" }}
        />
      ),
    },
    {
      code: "por",
      label: "POR",
      flag: (
        <img
          src={"../img/icons/brasil.png"}
          alt="CL"
          style={{ width: "0.8em", verticalAlign: "middle" }}
        />
      ),
    },
  ];

  const currentLang = i18n.language || "es";
  const currentLangObject = languages.find((l) => l.code === currentLang);
  const currentFlag = currentLangObject?.flag || "🌐";

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
        <div className="language-switcher position-relative">
          {/* Bandera del idioma actual */}
          <span
            className="current-flag"
            style={{
              fontSize: "1.5rem",
              marginRight: "0.5rem",
              verticalAlign: "middle",
            }}>
            {currentFlag}
          </span>
          <select
            name="select"
            id="select"
            className="language-switcher-input"
            value={currentLang}
            onChange={(e) => i18n.changeLanguage(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
