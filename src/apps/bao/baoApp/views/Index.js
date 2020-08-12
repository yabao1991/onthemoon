// Bao - Hello world from JS
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter.js";

// index sections
// import SectionCarousel from "../views/index-sections/SectionCarousel.js";
import SectionDark from "../views/index-sections/SectionDark.js";
// import SectionContact from "../views/index-sections/SectionContact.js";
import SectionExamples from "../views/index-sections/SectionExamples.js";

function Index() {
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
      <IndexHeader />
      <div className="main">
        <SectionDark />
        <SectionExamples />
        {/* <SectionContact /> */}
        {/* <SectionCarousel /> */}
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
