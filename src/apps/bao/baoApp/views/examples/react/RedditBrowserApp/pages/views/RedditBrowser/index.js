import React from 'react';
import axios from "axios";
import axiosUtil from '../../axios';
import {
    Layout,
    Row,
    Col,
    Input,
    Button
} from 'antd';
import { Highlighter } from 'react-highlight-words'
import SubredditList from '../../components/SubredditList';
import PostList from '../../components/PostList'
import PostDetails from '../../components/PostDetails'
import { DEFAULT_SUBREDDIT_API, DEFAULT_POST_API } from '../../utils/Constants'
import './index.scss'

const { Header, Footer } = Layout;

export default class RedditBrowser extends React.Component {
    state = {
        subredditListData: [],
        subredditListSelectedRowKeys: [],
        postListData: [],
        postListSelectedRowKeys: [],
        postDetailData: {},
        url: '',
        selectedPostAuthor: '',
        userPostData: [],
        searchText: '',
        searchedColumn: ''
    };

    componentDidMount() {
        const requestSubredditListData = axios.get(DEFAULT_SUBREDDIT_API);
        const requestPostListData = axios.get(DEFAULT_POST_API);
        axios.all([requestSubredditListData, requestPostListData])
            .then(axios.spread((...responses) => {
                const responseSubredditListData = responses[0].data.data.children.map((obj, index) => {
                    return {
                        ...obj.data,
                        key: index
                    }
                });
                const responesPostListData = responses[1].data.data.children.map((obj, index) => {
                    return {
                        ...obj.data,
                        key: index
                    }
                });
                this.setState({ 
                    subredditListData: responseSubredditListData,
                    postListData: responesPostListData
                });
            }))
            .catch(errors => {
                console.error(`Failed on ${errors}`)
            })
    }

    updateUrl = (url, rowIndex) => {
        this.setState({
            subredditListSelectedRowKeys:[rowIndex],
            postListSelectedRowKeys: []
        });
        if (url) {
            axiosUtil.GET({
                url:`${url}hot.json`
            }).then(res => {
                const postListData = res.map((obj, index) => {
                    return {
                        ...obj.data,
                        key: index
                    }
                });
                this.setState({ 
                    url,
                    postListData
                });
            });
        }
    }

    updatePostData = (data, rowIndex) => {
        axiosUtil.GET({
            url:`user/${data.author}.json`
        }).then(res => {
            const userPostData = res.map((obj, index) => {
                return {
                    ...obj.data,
                    key: index
                }
            });
            this.setState({
                postDetailData: data,
                postListSelectedRowKeys: [rowIndex],
                selectedPostAuthor: data.author,
                userPostData
            })
        });
    }

    updateRowKeys = (selectedRowKeys, type) => {
        this.setState({ [type]: selectedRowKeys })
    }

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        // console.log("selectedKeys", selectedKeys)
        // console.log("dataIndex", dataIndex)
        this.setState({
            searchText: selectedKeys[0],
            // searchedColumn: dataIndex
        })
    }

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
              <Input
                ref={node => {
                  this.searchInput = node;
                }}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                // onPressEnter={() => { console.log("selectedKeys", selectedKeys)}}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
              />
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                // onClick={() => { console.log("selectedKeys", selectedKeys)}}
                // icon={<SearchOutlined />}
                size="small"
                style={{ width: 90, marginRight: 8 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </div>
          ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
        this.state.searchedColumn === dataIndex ? (
            <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
            />
        ) : (
            text
        ),
    })

    handleReset = (clearFilters) => {
        clearFilters()
        this.setState({
            searchText: ''
        })
    }

    render() {
        const {
            subredditListData,
            subredditListSelectedRowKeys,
            postListData,
            postListSelectedRowKeys,
            selectedPostAuthor,
            postDetailData,
            url,
            userPostData
        } = this.state

        const commonProps = {
            handleUpdateRowKeys: this.updateRowKeys,
            url: url,
        }

        const subredditListProps = {
            ...commonProps,
            handleUpdateUrl: this.updateUrl,
            data: subredditListData,
            selectedRowKeys: subredditListSelectedRowKeys,
            handleGetColumnSearchProps: this.getColumnSearchProps
        }

        const postListProps = {
            ...commonProps,
            handleUpdatePostData: this.updatePostData,
            data: postListData,
            author: selectedPostAuthor,
            selectedRowKeys: postListSelectedRowKeys
        }

        return (
            <Layout>
                <Header> RedditBrowser </Header>
                <Row className="contenWrap">
                    <Col xs={24} sm={24} md={11} lg={6} xl={6} className="subredditList">
                        <SubredditList {...subredditListProps} />
                    </Col>
                    <Col xs={24} sm={24} md={11} lg={6} xl={6} className="postList">
                        <PostList {...postListProps} />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={10} xl={10} className="postDetails">
                        <PostDetails data={postDetailData} userPostData={userPostData}/>
                    </Col>
                </Row>
                <Footer>RedditBrowser for Service Channel @ Lin Zhang</Footer>
            </Layout>
        )
    }
}