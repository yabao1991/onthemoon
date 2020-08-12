import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetSalesData } from "../../../redux/Actions";
import {
  Link,
} from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Layout, Card,
  // Spin,
  Drawer,
  Button,
  // Radio,
  // Space
} from 'antd';
import {
  MenuOutlined
} from '@ant-design/icons';

// core components
import HeaderSection from "../../../components/Header"
// import SideBar from "../../../components/SideBar"
import FooterSection from "../../../components/Footer"

// inside section components 
// import LineChart from "../../../components/LineChart"
import MobileChart from "../../../components/LineChart/MobileChart"
import MobileTable from "../../../components/Table/Mobile"

// import { mockData } from "../../../assets/mockData/data"
// import UtilFunctions from "../../../utils/UtilFunctions"

import "./Sales.scss";

const { Content } = Layout;
// const { Sider } = Layout;
const { Meta } = Card;

function Sales(props) {
  // const [salesData, setSalesData] = React.useState({}) 
  React.useEffect(() => {
    document.title = 'Sales - Retail'
    // setSalesData(UtilFunctions.getForm
    const { GetSalesData } = props.action;
    GetSalesData()
  }, [props.action]);

  // console.log("salesData", salesData)
  const { salesData } = props
  const { data } = salesData 

  const [visible, setVisible] = React.useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };
  return (
    <Layout>
      <HeaderSection />
      {/* <SideBar sideBarSalesData={data} /> */}
      {/* <ToastContainer /> */}
      {/* <SideBar /> */}
      
      <Card
        style={{ width: '80%', marginTop: 90, marginLeft: 75 }}
        // cover={data.image ? <img alt="product" src={data.image} /> : <Spin className="spinWrap" size="large" />}
      >
        <Meta title={data.title} />
        <Button onClick={() => showDrawer()} style={{ marginTop: -20, position: 'absolute' }}>
          <MenuOutlined />
        </Button>
      </Card>
        
      <Layout className="mainLayoutWrap_mobile">
        <Content>
          {/* <LineChart chartSalesDataArr={salesData.chartSalesDataArr}/> */}
          {/* <LineChart chartSalesDataArr={salesData.sales}/> */}
          {/* <Chart chartSalesDataArr={data.chartSalesDataArr} /> */}
          <MobileChart />
          {/* <Table tableSalesDataArr={data.sales}/> */}
          <MobileTable />
        </Content>
        <FooterSection />
      </Layout>
      <Drawer
          title="Menu"
          placement={'bottom'}
          closable={false}
          onClose={()=>onClose()}
          visible={visible}
          key={'bottom'}
        >
          <Link to="/retail/mobile/overview">OVERVIEW</Link>
          <br />
          <Link to="/retail/mobile/sales">SALES</Link>
        </Drawer>
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
