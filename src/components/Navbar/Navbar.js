import React from "react";
import navStyles from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={navStyles.nav_container}>
        <h3 className={navStyles.brand_name}>PhotoWallet</h3>

        <input className={navStyles.search_box} placeholder="search here" />
      </nav>
    </>
  );
};

export default Navbar;
