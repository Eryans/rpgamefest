import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../globalComponent/Navigation";

const Root = () => {
  const [isScrollingDown, setIsScrollingDown] = useState();
  var lastScrollTop = 0;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
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

  return (
    <>
      <header
        style={{
          position: "fixed",
          width: "100vw",
          zIndex: 99,
          height: isScrollingDown ? "0px" : "initial",
          opacity: isScrollingDown ? 0 : 1,
          transition: "all .1s linear"
        }}
      >
        <Navigation />
      </header>
      <main id="appRoot" style={{paddingTop:'8.5em'}}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
