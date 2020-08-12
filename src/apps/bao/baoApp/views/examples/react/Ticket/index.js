// Bao - Hello world from JS
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../../../../components/Navbars/IndexNavbar.js";
import DemoFooter from "../../../../components/Footers/DemoFooter.js";
import SectionDark from "../../../../views/index-sections/SectionDark.js";

// index sections
import Home from "./pages/Home"

function Ticket() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <SectionDark />
      <Home />

      <div className="main">
        <DemoFooter />
      </div>
    </>
  );
}

export default Ticket;
