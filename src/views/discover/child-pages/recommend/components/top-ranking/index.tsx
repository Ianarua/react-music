import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingWrapper } from '@/views/discover/child-pages/recommend/components/top-ranking/style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import TopRankingItem from '@/views/discover/child-pages/recommend/components/top-ranking/components/top-ranking-item';

interface IProps {
    children?: ReactNode;
}

const TopRanking: FC<IProps> = (props) => {
    const { rankings } = useAppSelector(state => ({
        rankings: state.recommend.rankings
    }), shallowEqual);
    useEffect(() => {
        console.log('rankings', rankings);
    })
    return (
        <RankingWrapper>
            <AreaHeaderV1 title="榜单" moreLink="/discover/ranking"/>
            <div className="content">
                {
                    rankings.map((item: any, index: number) => {
                        return <TopRankingItem key={ index } itemData={ item }/>;
                    })
                }
            </div>
        </RankingWrapper>
    );
};

export default memo(TopRanking);
