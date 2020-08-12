import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetSalesData } from "../../../redux/Actions";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Layout } from 'antd';
import MediaQuery from 'react-responsive';

// core components
import HeaderSection from "../../../components/Header"
import SideBar from "../../../components/SideBar"
import FooterSection from "../../../components/Footer"

// inside section components 
// import LineChart from "../../../components/LineChart"
import Chart from "../../../components/LineChart/Chart"
import Table from "../../../components/Table"

// import { mockData } from "../../../assets/mockData/data"
// import UtilFunctions from "../../../utils/UtilFunctions"

import "./Sales.scss";

const { Content } = Layout;

function Sales(props) {
  // const [salesData, setSalesData] = React.useState({}) 
  React.useEffect(() => {
    document.title = 'Sales - Retail'
    // setSalesData(UtilFunctions.getForm
    const { GetSalesData } = props.action;
    GetSalesData()
  }, [props.action]);

  // console.log("salesData", salesData)
// const { salesData } = props
// const { data } = salesData 
  return (
    <Layout>
      <HeaderSection />
      {/* <SideBar sideBarSalesData={data} /> */}
      {/* <ToastContainer /> */}
      <MediaQuery query='(min-width:767px)'>
        <SideBar />
        <Layout className="mainLayoutWrap">
          <Content>
            {/* <LineChart chartSalesDataArr={salesData.chartSalesDataArr}/> */}
            {/* <LineChart chartSalesDataArr={salesData.sales}/> */}
            {/* <Chart chartSalesDataArr={data.chartSalesDataArr} /> */}
            <Chart />
            {/* <Table tableSalesDataArr={data.sales}/> */}
            <Table />
          </Content>
          <FooterSection />
        </Layout>
      </MediaQuery>
      
    </Layout>
  );
}

const mapStateToProps = state => ({
  salesData: state.salesData
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ GetSalesData }, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sales);
