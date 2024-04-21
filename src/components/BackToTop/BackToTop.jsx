import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the page is scrolled down beyond the first viewport height
  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    // eslint-disable-next-line
    <a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top p-2"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up" />
    </a>
  );
};

export default React.memo(BackToTop);
