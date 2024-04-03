import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { AnchorWrapper } from '@/views/discover/child-pages/recommend/components/hot-anchor/style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { hotRadios } from '@/assests/data/local_data';

interface IProps {
    children?: ReactNode;
}

const HotAnchor: FC<IProps> = (props) => {
    return (
        <AnchorWrapper>
            <AreaHeaderV2 title="热门主播"/>
            <div className="anchors">
                {
                    hotRadios.map(item => {
                        return (
                            <div className="item" key={item.picUrl}>
                                <a href="" className="image">
                                    <img src={ item.picUrl } alt=""/>
                                </a>
                                <div className="info">
                                    <div className="name">{ item.name }</div>
                                    <div className="desc">{ item.position }</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </AnchorWrapper>
    );
};

export default memo(HotAnchor);
