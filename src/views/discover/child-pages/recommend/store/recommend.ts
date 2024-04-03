import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getArtistList, getBanners, getHotRecommend, getNewAlbum, getPlaylistDetail } from '@/views/discover/child-pages/recommend/service/recommend';
import { IRecommendState } from '@/views/discover/child-pages/recommend/store/interface';

export const getRecommendDataAction = createAsyncThunk(
    'getData',
    (_, { dispatch }) => {
        // 获取轮播图数据
        getBanners().then(res => {
            dispatch(changeBannersAction(res.banners));
        });
        getHotRecommend(8).then(res => {
            dispatch(changeHotRecommendAction(res.result));
        });
        getNewAlbum().then(res => {
            dispatch(changeNewAlbumAction(res.albums));
        });
        getArtistList(5).then(res => {
            dispatch(changeSettleSingersAction(res.artists));
        });
    }
);

const rankingIds: number[] = [19723756, 3779629, 2884035];
const promises: Promise<any>[] = [];
export const getRankingDataAction = createAsyncThunk(
    'rankingData',
    (_, { dispatch }) => {
        for (let id of rankingIds) {
            promises.push(getPlaylistDetail(id));
        }
        Promise.all(promises).then(res => {
            const playlists = res.map(item => item.playlist);
            dispatch(changeRankingAction(playlists));
        });
    }
);

const initialState: IRecommendState = {
    banners: [],
    hotRecommend: [],
    newAlbums: [],
    rankings: [],
    settleSingers: []
};

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction (state, { payload }) {
            state.banners = payload;
        },
        changeHotRecommendAction (state, { payload }) {
            state.hotRecommend = payload;
        },
        changeNewAlbumAction (state, { payload }) {
            state.newAlbums = payload;
        },
        changeRankingAction (state, { payload }) {
            state.rankings = payload;
        },
        changeSettleSingersAction (state, { payload }) {
            state.settleSingers = payload;
        }
    }
});

export const {
    changeBannersAction,
    changeHotRecommendAction,
    changeNewAlbumAction,
    changeRankingAction,
    changeSettleSingersAction
} = recommendSlice.actions;
export default recommendSlice.reducer;