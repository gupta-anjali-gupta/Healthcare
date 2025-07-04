import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
};

const cloudinaryFilesSlice = createSlice({
  name: 'cloudinaryFiles',
  initialState,
  reducers: {
    setCloudinaryFiles: (state, action) => {
      console.log('Action payload===>:', action.payload);
      const isExist = state.files.find(file => file.id === action.payload.id);
      if (!isExist) {
        state.files.push(action.payload);
      }
      // console.log('Updated files in state:', state.files);
    },
  },
});

export const { setCloudinaryFiles } = cloudinaryFilesSlice.actions;
export default cloudinaryFilesSlice.reducer;
