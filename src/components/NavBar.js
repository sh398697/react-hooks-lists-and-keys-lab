import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];




  const linksArray = links.map((link) => {
    const relativeURL = `#${link}`;
    return <a href={relativeURL} key={link}>{link}</a>;
  });

  return <nav>{linksArray}</nav>;
}

export default NavBar;
