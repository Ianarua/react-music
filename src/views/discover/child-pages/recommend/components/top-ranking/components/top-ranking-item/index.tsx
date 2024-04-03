import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingItemWrapper } from '@/views/discover/child-pages/recommend/components/top-ranking/components/top-ranking-item/style';
import { getImageSize } from '@/utils/format';
import { Link } from 'react-router-dom';

interface IProps {
    children?: ReactNode;
    itemData: any;
}

const TopRankingItem: FC<IProps> = (props) => {
    const { itemData } = props;
    const { tracks = [] } = itemData;

    return (
        <RankingItemWrapper>
            <div className="header">
                <div className="image">
                    <img src={ getImageSize(itemData.coverImgUrl, 80) } alt=""/>
                    <a href="" className="sprite_cover"/>
                </div>
                <div className="info">
                    <div className="name">{ itemData.name }</div>
                    <div>
                        <div className="sprite_02 btn play"></div>
                        <div className="sprite_02 btn favor"></div>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item: any, index: number) => {
                        return (
                            <div className="item" key={ item.id }>
                                <div className="index">{ index + 1 }</div>
                                <div className="info">
                                    <div className="name">{ item.name }</div>
                                    <div className="operator">
                                        <button className="btn sprite_02 play"/>
                                        <button className="btn sprite_icon2 add"/>
                                        <button className="btn sprite_02 favor"/>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="footer">
                <Link to="/discover/ranking">查看全部 &gt;</Link>
            </div>
        </RankingItemWrapper>
    );
};

export default memo(TopRankingItem);
