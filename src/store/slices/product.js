import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        hashTag: '0',
    },
    reducers: {
        toggleHashTag: (state, action) => {
            const hashTagKey = `${action.payload}`;
            if (state.hashTag === hashTagKey) {
                state.hashTag = '0';
            } else {
                state.hashTag = hashTagKey;
            }
        },
    },
});

export default productSlice.reducer;
export const { toggleHashTag } = productSlice.actions;

// hashTag: {},
// const hashTagKey = action.payload
// const checked = state.hashTag[hashTagKey]
// state.hashTag[hashTagKey] = !checked
