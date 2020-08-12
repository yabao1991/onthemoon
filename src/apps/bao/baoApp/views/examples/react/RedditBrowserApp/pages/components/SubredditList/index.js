import React from 'react';
import { Table, Tag } from 'antd';
import { DEFAULT_SUBREDDIT_API } from '../../utils/Constants'

const SubredditList = (props) => {
  const {
    data,
    url,
    selectedRowKeys,
    // handleUpdateRowKeys,
    handleGetColumnSearchProps
  } = props

  const SubredditListColumns = [
    {
        title: 'Title',
        dataIndex: 'title',
        ...handleGetColumnSearchProps('title')
    },
  ]

  const onRowClick = (rowdata, rowIndex) => {
    const { handleUpdateUrl } = props
    return {
      onClick: handleUpdateUrl(rowdata.url, rowIndex),
    }
  }
  // const rowSelection = {
  //   type:'radio',
  //   selectedRowKeys,
  //   onChange: (keys) => handleUpdateRowKeys(keys, 'subredditListSelectedRowKeys'),
  // };
  const rowSelection = undefined;
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div className="tableHeader">
        <Tag color="#108ee9">Step 1: Select a subreddit</Tag>
        {hasSelected
          ? <p>{`Selected url: ${url} `}</p>
          : <p>Selected url: (No selection)</p>}
      </div>
      <Table
        onRow={(record, index) => {
            return {
              onClick: () => {
                  onRowClick(record, index)
              }
            }
        }}
        rowSelection={rowSelection}
        columns={SubredditListColumns}
        dataSource={data}
        expandable={{
            expandedRowRender: record => (
              <div>
                <p style={{ margin: 10 }}>Api url:</p>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.reddit.com${record.url}hot.json`} style={{ margin: 5 }}>https://www.reddit.com{record.url}hot.json</a>
              </div>
            ),
            rowExpandable: record => record.name !== 'Not Expandable',
        }}
        pagination={{
            defaultCurrent: 1,
            defaultPageSize: 27,
        }}
        scroll={{ y: 350 }}
      />
      <p>default data from: {DEFAULT_SUBREDDIT_API}</p>
    </div>
  );
}

export default SubredditList