import React from "react";

// core components
import Header from "../../../components/Header"
import SideBar from "../../../components/SideBar"
import Footer from "../../../components/Footer"

// inside section components 
// import LineChart from "../../../components/LineChart"
// import Table from "../../../components/Table"


function Overview() {
  React.useEffect(() => {
    document.title = 'Overview - Retail'
  });
  return (
    <>
      <Header />
      <SideBar />
      <div>
        Overview
      </div>
      <Footer />
    </>
  );
}

export default Overview;
