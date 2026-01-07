"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const WrapperNav = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={openNavHandler}></Nav>
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default WrapperNav;
