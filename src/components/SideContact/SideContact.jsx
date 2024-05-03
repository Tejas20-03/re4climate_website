import React from "react";

const SideContact = () => {
  return (
    <a
      href="/contact"
      style={{
        textDecoration: "none",
        position: "fixed",
        fontSize: "14px",
        color: "#000",
        fontWeight: "600",
        textTransform: "uppercase",
        borderRadius: "0",
        padding: "0 20px",
        border: "1px solid #f9f29e",
        top: "45%",
        right: "-68px",
        lineHeight: "44px",
        zIndex: "10",
        transform: "rotate(-90deg)",
        boxShadow: "0 10px 35px #00000025",
        background: "#ffae12",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.5s ease 0s",
      }}
    >
      Contact Experts
    </a>
  );
};

export default SideContact;
