import { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import request from '@/service';

interface IProps {
    children?: ReactNode;
}

export interface IBannerData {
    imageUrl: string;
    targetId: number;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url: string;
    exclusive: boolean;
    scm: string;
    bannerBizType: string;
}

const Recommend: FC<IProps> = (props) => {
    const [banners, setBanners] = useState<IBannerData[]>([]);
    useEffect(() => {
        request.get({
            url: '/banner'
        }).then((res: { banners: IBannerData[] }) => {
            setBanners(res.banners);
        });
    }, []);

    return (
        <div>
            {
                banners.map((item, index) => {
                    return (
                        <div key={ index }>{ item.imageUrl }</div>
                    );
                })
            }
        </div>
    );
};

export default memo(Recommend);
