import React from "react";
import Header from "../components/header/Header";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main className="mt-5 px-5">{children}</main>
      </div>
    </>
  );
};

export default LayoutWrapper;
