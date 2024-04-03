export interface RootObjectArtist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
    picId_str: string;
    transNames: string[];
    img1v1Id_str: string;
}

export interface RootObjectArtists {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
    img1v1Id_str: string;
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

export interface IHotRecommend {
    id: number;
    type: number;
    name: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: string;
}

export interface INewAlbums {

    name: string;
    id: number;
    type: string;
    size: number;
    picId: number;
    blurPicUrl: string;
    companyId: number;
    pic: number;
    picUrl: string;
    publishTime: number;
    description: string;
    tags: string;
    company: string;
    briefDesc: string;
    artist: RootObjectArtist;
    alias: any[];
    status: number;
    copyrightId: number;
    commentThreadId: string;
    artists: RootObjectArtists[];
    paid: boolean;
    onSale: boolean;
    picId_str: string;
}

export interface IRecommendState {
    banners: IBannerData[];
    hotRecommend: IHotRecommend[];
    newAlbums: INewAlbums[];
    rankings: any[]
    settleSingers: any[]
}