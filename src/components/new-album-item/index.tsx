import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { AlbumWrapper } from '@/views/discover/child-pages/recommend/components/new-album/style';
import { INewAlbums } from '@/views/discover/child-pages/recommend/store/interface';
import { getImageSize } from '@/utils/format';
import { AlbumItemWrapper } from '@/components/new-album-item/style';

interface IProps {
    children?: ReactNode;
    itemData: INewAlbums;
}

const NewAlbumItem: FC<IProps> = (props) => {
    const { itemData } = props;
    return (
        <AlbumItemWrapper>
            <div className="top">
                <img src={ getImageSize(itemData.picUrl, 100) } alt=""/>
                <a href="" className="cover sprite_cover"></a>
            </div>
            <div className="bottom">
                <div className="name">{ itemData.name }</div>
                <div className="artist">{ itemData.artist.name }</div>
            </div>
        </AlbumItemWrapper>
    );
};

export default memo(NewAlbumItem);
