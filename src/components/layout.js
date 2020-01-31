import React, {Fragment}from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout