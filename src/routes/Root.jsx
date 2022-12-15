import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../globalComponent/Navigation";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactsIcon from "@mui/icons-material/Contacts";

const Root = () => {
  const darkThemeStyle = {
    backgroundColor: "rgba(25,25,25,.8)",
    color: "white",
  };
  const lightThemeStyle = {
    backgroundColor: "rgba(255,255,255)",
    color: "black",
  };
  if (!window.localStorage["currentTheme"])
    window.localStorage["currentTheme"] = "light";

  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage["currentTheme"] === "light"
      ? darkThemeStyle
      : lightThemeStyle
  );
  const [isScrollingDown, setIsScrollingDown] = useState();

  var lastScrollTop = 0;

  const handleThemeChange = () => {
    window.localStorage["currentTheme"] =
      window.localStorage["currentTheme"] === "light" ? "dark" : "light";
    setCurrentTheme(
      window.localStorage["currentTheme"] === "light"
        ? darkThemeStyle
        : lightThemeStyle
    );
  };
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  if (window.innerWidth <= 1080) {
    document.addEventListener(
      "scroll",
      function () {
        // or window.addEventListener("scroll"....
        const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          setIsScrollingDown(true);
          // downscroll code
        } else {
          setIsScrollingDown(false);
          // upscroll code
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  }
  document.querySelector("body").style.background =
    currentTheme.backgroundColor;
  return (
    <>
      <header
        style={{
          position: "fixed",
          width: window.innerWidth >= 1080 ? "300px" : "100vw",
          zIndex: window.innerWidth <= 720 ? 1 : 99,
          height: isScrollingDown ? "0px" : "initial",
          opacity: isScrollingDown ? 0 : 1,
          transition: "all .1s linear",
          borderBottom:"1px solid lightgray",
          ...currentTheme,
        }}
      >
        <Navigation
          handleThemeChange={handleThemeChange}
          currentTheme={currentTheme}
        />
      </header>
      <main
        id="appRoot"
        style={{
          position:"relative",
          paddingTop: "8.5em",
          paddingLeft: window.innerWidth >= 1080 ? "300px" : "none",
          ...currentTheme,
        }}
      >
        <div
          className="main-image"
          style={{
            height:"100%",
            position:"absolute",
            top:0,
            left:0,
            opacity:.05,
            backgroundImage:
              window.localStorage["currentTheme"] === "dark"
                ? "url(/images/dice.jpg)"
                : "",
          }}
        />
        <Outlet />
      </main>
      <footer
        style={{
          ...currentTheme,
        }}
      >
        <div>
          <a href="https://twitter.com/?lang=fr">
            <TwitterIcon className="icons" />
          </a>
          <a href="https://www.instagram.com/?hl=fr">
            <InstagramIcon className="icons" />
          </a>
          <a href="https://fr-fr.facebook.com/">
            <FacebookIcon className="icons" />
          </a>
          <a href="mailto:vdubuisson@normandiewebschool.fr">
            <ContactsIcon className="icons" />
          </a>
        </div>
        <a href="https://www.twitch.tv/gsdc_">
          <img
            style={{ color: "blue" }}
            className="icons"
            src="/images/twitch.svg"
            alt="twitch logo"
          />
        </a>
      </footer>
    </>
  );
};

export default Root;
