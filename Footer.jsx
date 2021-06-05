import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Project Done By roshan shaji</p>
      <br />
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}
export default Footer;
