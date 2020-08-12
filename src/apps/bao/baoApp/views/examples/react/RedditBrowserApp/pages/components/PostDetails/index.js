import React from 'react';
import { Card, Carousel, Comment, Tag, List } from 'antd';
import { UserOutlined, LinkOutlined } from '@ant-design/icons';
import './index.scss'

const PostDetails = (props) => {
    const { data, userPostData } = props
    const {title, author, url, selftext, preview, thumbnail } = data

    const imgUrl = preview ? preview.images[0].source.url : ''
    const getPostViaAuthorApi = `https://www.reddit.com/user/${author}.json`

    const listData = [];
    for (let i = 0; i < userPostData.length; i++) {
        listData.push({
            href: userPostData[i].url || userPostData[i].link_permalink,
            title: userPostData[i].title || userPostData[i].link_title,
            avatar: '',
            link_url: userPostData[i].link_url,
        });
    }

    return (
        <Card
            cover={
                <Carousel effect="fade">
                    <img
                        alt="thumbnail"
                        src={thumbnail || 'https://servicechannel.com/wp-content/uploads/2020/01/2020-home-hero-image-rev.png'}
                    />
                    {imgUrl && <img
                        alt="preImg Forbidden 403"
                        src={imgUrl}
                    />}
                </Carousel>
            }
        >
            {!author && <div>Please go through step 1 _> step 2,  then you'll see the post info here</div>}
            {author && (
                <>
                    <p className="postTitle">{title}</p>
                    <Comment
                        author={<Tag color="success">Author: {author}</Tag>}
                        avatar={<UserOutlined />}
                        content={
                            <>
                                <LinkOutlined />Current Link:<a target="_blank" rel="noopener noreferrer" href={url}>{url}</a>
                                <p>{selftext ? selftext : '(NO text)'}</p>
                            </>
                        }
                    />
                    <h5>Author posts list:(<a target="_blank" rel="noopener noreferrer" href={getPostViaAuthorApi}>{getPostViaAuthorApi}</a>)</h5>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 6,
                        }}
                        dataSource={listData}
                        renderItem={(item, index) => (
                            <List.Item
                                key={item.title}
                            >
                                <List.Item.Meta
                                    title={<a target="_blank" rel="noopener noreferrer" href={item.href}>{item.title}</a>}
                                    // description={item.description}
                                />
                                {/* {item.content} */}
                            </List.Item>
                        )}
                    />
                </>
            )}
        </Card>
    );
}

export default PostDetails