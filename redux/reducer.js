import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [],
    },
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload;
        },
        clearArticles: (state) => {
            state.articles = [];
        },
    },
});

export const { setArticles, clearArticles } = newsSlice.actions;
export default newsSlice.reducer;
