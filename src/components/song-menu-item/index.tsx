import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { IHotRecommend } from '@/views/discover/child-pages/recommend/store/interface';
import { MenuItemWrapper } from '@/components/song-menu-item/style';
import { formatCount, getImageSize } from '@/utils/format';

interface IProps {
    children?: ReactNode;
    itemData: IHotRecommend;
}

const SongMenuItem: FC<IProps> = (props) => {
    const { itemData } = props;
    return (
        <MenuItemWrapper>
            <div className="top">
                <img src={ getImageSize(itemData.picUrl, 140) } alt=""/>
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"/>
                            <span className="count">{ formatCount(itemData.playCount) }</span>
                        </span>
                        <i className="play sprite_icon"/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                { itemData.name }
            </div>
        </MenuItemWrapper>
    );
};

export default memo(SongMenuItem);
