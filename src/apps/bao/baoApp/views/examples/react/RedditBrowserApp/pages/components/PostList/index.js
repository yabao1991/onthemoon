import React from 'react';
import { Table, Tag } from 'antd';
import { PostListColumns, DEFAULT_POST_API } from '../../utils/Constants'

const PostList = (props) => {

  const onRowClick = (rowdata, rowIndex) => {
    const { handleUpdatePostData } = props
    return {
      onClick: handleUpdatePostData(rowdata, rowIndex),
    }
  }

  const {
    data,
    selectedRowKeys,
    author,
    // handleUpdateRowKeys
  } = props
  // const rowSelection = {
  //   type:'radio',
  //   selectedRowKeys,
  //   onChange: (keys) => handleUpdateRowKeys(keys, 'postListSelectedRowKeys'),
  // };

  const rowSelection = undefined;

  const hasSelected = selectedRowKeys.length > 0;
  
  return (

    <div>
      <div className="tableHeader">
          <Tag color="#87d068">Step 2: Select a post</Tag>
          {hasSelected
              ? <p>{`Selected author: ${author} `}</p>
              : <p>Selected author: (No selection)</p>}
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
          columns={PostListColumns}
          dataSource={data}
          pagination={{
              defaultCurrent: 1,
              defaultPageSize: 12,
          }}
          scroll={{ y: 350 }}
      />
      <p>default data from: {DEFAULT_POST_API}</p>
    </div>
  );
}

export default PostList