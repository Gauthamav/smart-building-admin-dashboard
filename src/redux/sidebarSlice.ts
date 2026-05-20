import { createSlice } from '@reduxjs/toolkit';

type SidebarProps = {
  isOpen: boolean;
};
const initialState: SidebarProps = {
  isOpen: false,
};
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
