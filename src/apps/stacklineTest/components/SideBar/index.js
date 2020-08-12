import React from "react";
import { Layout, Menu, Card, Tag, Spin } from 'antd';
import {
  HomeOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { connect } from "react-redux";
import {
  Link,
} from "react-router-dom";

import './SideBar.scss';

const { Sider } = Layout;
const { Meta } = Card;

function SideBar(props) {
  const { salesData } = props
  const { data } = salesData

  const showTags = (data) => {
    let TagEle = []
    data.map((item, index) => TagEle.push(<Tag key={`tag_${index}`}>{item}</Tag>))
    return TagEle
  }
  return (
    <Sider>
      <Card
        style={{ width: 200 }}
        cover={data.image ? <img alt="product" src={data.image} /> : <Spin className="spinWrap" size="large" />}
      >
        <Meta title={data.title} description={data.subtitle} />
      </Card>
      <div className="tagWrap">
        {data.tags && showTags(data.tags)}
      </div>
      <Menu theme="" mode="inline" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/retail/overview">OVERVIEW</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />}>
          <Link to="/retail/sales">SALES</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

const mapStateToProps = state => ({
  salesData: state.salesData
});

export default connect(
  mapStateToProps,
)(SideBar);
