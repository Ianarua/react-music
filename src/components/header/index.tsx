import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderLeft, HeaderRight, HeaderWrapper } from '@/components/header/style';

import headerTitles from '@/assests/data/header_titles.json';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


interface IProps {
    children?: ReactNode;
}

const Header: FC<IProps> = (props) => {
    // 组件展示逻辑
    function showItem (item: any) {
        if (item.type === 'path') {
            return <NavLink to={ item.link }>
                { item.title }
                <i className="icon sprite_01"></i>
            </NavLink>;
        } else {
            return <a href={ item.link } target="_blank">{ item.title }</a>;
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a className="logo sprite_01" href="/">网易云音乐</a>
                    <div className="title-list">
                        {
                            headerTitles.map(item => {
                                return (
                                    <div className="item" key={ item.title }>
                                        { showItem(item) }
                                    </div>
                                );
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <span className="search">
                        <Input placeholder="音乐/视频/电台/用户" prefix={ <SearchOutlined/> } style={ { borderRadius: '16px' } }/>
                    </span>
                    <span className="center">创作者中心</span>
                    <span className="login">登录</span>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    );
};

export default memo(Header);