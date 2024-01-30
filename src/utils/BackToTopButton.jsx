import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <NavLink className="btn-arrow-up" onClick={scrollUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            fill="currentColor"
            className="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
          </svg>
        </NavLink>
      )}
    </>
  );
};

export default BackToTopButton;
