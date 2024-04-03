import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { useAppDispatch } from '@/store';
import { getRankingDataAction, getRecommendDataAction } from '@/views/discover/child-pages/recommend/store/recommend';
import TopBanner from '@/views/discover/child-pages/recommend/components/top-banner';
import { RecommendWrapper } from '@/views/discover/child-pages/recommend/style';
import HotRecommend from '@/views/discover/child-pages/recommend/components/hot';
import NewAlbum from '@/views/discover/child-pages/recommend/components/new-album';
import TopRanking from '@/views/discover/child-pages/recommend/components/top-ranking';
import UserLogin from '@/views/discover/child-pages/recommend/components/user-login';
import SettleSinger from '@/views/discover/child-pages/recommend/components/settle-singer';
import HotAnchor from '@/views/discover/child-pages/recommend/components/hot-anchor';


interface IProps {
    children?: ReactNode;
}


const Recommend: FC<IProps> = (props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getRecommendDataAction());
        dispatch(getRankingDataAction());
    }, []);
    return (
        <RecommendWrapper>
            <TopBanner/>
            <div className="content wrap-v2">
                <div className="left">
                    <HotRecommend/>
                    <NewAlbum/>
                    <TopRanking/>
                </div>
                <div className="right">
                    <UserLogin/>
                    <SettleSinger/>
                    <HotAnchor/>
                </div>
            </div>
        </RecommendWrapper>
    );
};

export default memo(Recommend);
