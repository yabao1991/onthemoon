import React from "react";
import { Card } from 'antd';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import './LineChart.scss'

const LineChart = React.memo(({ chartSalesDataArr }) => {
  const cols = {
    month: {
      range: [0, 1],
    },
    retailSales: {
      type: 'pow',
      nice: true,
    },
    wholesaleSales: {
      type: 'pow',
      nice: true,
    },
  };

  return (
    <Card>
      <p className="chartTitle">Retail Sales</p>
      <Chart height={400} data={chartSalesDataArr} scale={cols} forceFit>
        <Legend />
        <Axis name="month" />
        <Axis
          name="retailSales"
          label={null}
        />
        <Axis
          name="wholesaleSales"
          label={null}
        />
        {/* <Tooltip
          crosshairs={{
            type: "y"
          }}
        /> */}
        <Geom
          type="line"
          position="month*retailSales"
          size={4}
          color={"#61A6F0"}
          shape={"smooth"}
        />
        <Geom
          type="line"
          position="month*wholesaleSales"
          size={4}
          color={"#9DA6BD"}
          shape={"smooth"}
        />
      </Chart>
      
    </Card>
  );
})

export default LineChart;
