import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { SingerWrapper } from '@/views/discover/child-pages/recommend/components/settle-singer/style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { useAppSelector } from '@/store';
import { getImageSize } from '@/utils/format';
import { shallowEqual } from 'react-redux';

interface IProps {
    children?: ReactNode;
}

const SettleSinger: FC<IProps> = (props) => {
    const { settleSingers } = useAppSelector(state => ({
        settleSingers: state.recommend.settleSingers
    }),shallowEqual);
    return (
        <SingerWrapper>
            <AreaHeaderV2 title="入驻歌手" moreText="查看全部 &gt;" moreLink="/discover/artist"/>
            <div className="artists">
                {
                    settleSingers.map(item => {
                        return (
                            <a href="/discover/artist" className="item" key={ item.id }>
                                <img src={ getImageSize(item.picUrl, 62) } alt=""/>
                                <div className="info">
                                    <div className="name">{ item.name }</div>
                                    <div className="alia">{ item.alias.join(' ') }</div>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
            <div className="apply-for">
                <a href="#/">申请成为网易音乐人</a>
            </div>
        </SingerWrapper>
    );
};

export default memo(SettleSinger);
