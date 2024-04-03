import { ElementRef, memo, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from '@/views/discover/child-pages/recommend/components/top-banner/style';
import { Carousel } from 'antd';
import classNames from 'classnames';


interface IProps {
    children?: ReactNode;
}

const TopBanner: FC<IProps> = (props) => {
    // 定义内部数据
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

    // 从store获取数据
    const { banners } = useAppSelector(state => ({
        banners: state.recommend.banners
    }), shallowEqual);

    // 事件处理函数
    function handleAfterChange (cur: number) {
        setCurrentIndex(cur);
    }

    function handlePrevClick () {
        bannerRef.current?.prev();
    }

    function handleNextClick () {
        bannerRef.current?.next();
    }

    // 获取背景图片
    let bgImageUrl = banners[currentIndex]?.imageUrl;
    if (bgImageUrl) {
        bgImageUrl = bgImageUrl + '?imageView&blur=40x20';
    }

    return (
        <BannerWrapper style={ { background: `url('${ bgImageUrl }') center center / 6000px` } }>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel
                        dots={false}
                        effect={ 'fade' }
                        autoplay
                        ref={ bannerRef }
                        afterChange={ handleAfterChange }
                    >
                        {
                            banners.map(item => {
                                return (
                                    <div className="banner-item" key={ item.imageUrl }>
                                        <img className="image" src={ item.imageUrl } alt={ item.typeTitle }/>
                                    </div>
                                );
                            })
                        }
                    </Carousel>
                    <ul className="dots">
                        {
                            banners.map((item, index) => {
                                return (
                                    <li key={ item.imageUrl }>
                                        <span className={ classNames('item', { active: index === currentIndex }) }></span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={ handlePrevClick }></button>
                    <button className="btn right" onClick={ handleNextClick }></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    );
};

export default memo(TopBanner);
