import React from "react";
import { Table, Card } from 'antd';
import * as moment from 'moment';
import { connect } from "react-redux";
import './Table.scss'

const columns = [
  {
    title: 'WEEK ENDING',
    dataIndex: 'weekEnding',
    sorter: {
      compare: (a, b) => moment(a.weekEnding) - moment(b.weekEnding),
    },
    render: (record) => moment(record).format("DD-MM-YYYY"),
    align:'left',
  },
  {
    title: 'RETAIL SALES',
    dataIndex: 'retailSalesStr',
    sorter: {
      compare: (a, b) => a.retailSales - b.retailSales,
    },
    key: 'retailSalesStr',
    align:'right',
  },
  {
    title: 'WHOLESALE SALES',
    dataIndex: 'wholesaleSalesStr',
    sorter: {
      compare: (a, b) => a.mwholesaleSales - b.wholesaleSales,
    },
    align:'right',
  },
  {
    title: 'UNITS SOLD',
    dataIndex: 'unitsSold',
    sorter: {
      compare: (a, b) => a.unitsSold - b.unitsSold,
    },
    align:'right',
    responsive: ['md'],
  },
  {
    title: 'RETAILER MARGIN',
    dataIndex: 'retailerMarginStr',
    sorter: {
      compare: (a, b) => a.retailerMargin - b.retailerMargin,
    },
    align:'right',
    responsive: ['md'],
  },
];

const TableSection = (props) => {

  const { salesData } = props
  const { data } = salesData
  const { sales } = data

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  }
  return (
    <Card className="tableWrap_mobile">
      <Table 
        columns={columns} 
        dataSource={sales} 
        onChange={onChange} 
      />
    </Card>
  )
}

const mapStateToProps = state => ({
  salesData: state.salesData
});

export default connect(
  mapStateToProps,
)(TableSection);
