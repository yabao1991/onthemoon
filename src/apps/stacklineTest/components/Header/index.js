import React from "react";
import { Layout } from 'antd';
import stack from "../../assets/img/stackline_logo.png";
import "./Header.scss";

const { Header } = Layout;

function HeaderSection() {
  return (
    <Header>
      <img src={stack} className="logo" alt="stackline logo" />
    </Header>
  );
}

export default HeaderSection;
