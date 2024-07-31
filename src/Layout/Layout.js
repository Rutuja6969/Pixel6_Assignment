import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <div className="layout">
        <Header />
        <div className="">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
