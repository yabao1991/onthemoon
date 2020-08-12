import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Spin } from 'antd';
import { connect } from "react-redux";
import './LineChart.scss'

const Chart = (props) => {
  const { salesData } = props
  const { data } = salesData
  const { chartSalesDataArr } = data

  return (
    <>
      <p className="chartTitle">Retail Sales</p>
      <div style={{ width: '100%', height: 400, background: '#fff' }}>
        {chartSalesDataArr ?  (
          <ResponsiveContainer>
            <LineChart
              data={chartSalesDataArr}
            >
              <XAxis dataKey="month"/>
              <YAxis yAxisId="left" hide={true}/>
              <YAxis yAxisId="right" hide={true}/>
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="retailSales"
                stroke="#61A6F0"
                strokeWidth={4}
                dot={false}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="wholesaleSales"
                stroke="#9DA6BD"
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : <Spin className="spinWrap_chart" size="large" />}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  salesData: state.salesData
});

export default connect(
  mapStateToProps,
)(Chart);
