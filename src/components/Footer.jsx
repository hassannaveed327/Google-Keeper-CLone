import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Hassan Naveed</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
