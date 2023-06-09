const { createSlice } = require("@reduxjs/toolkit");


const NavbarSearch = createSlice({
  name: 'NavbarSearch',
  initialState: {
    isOpen: 'none'
  },
  reducers: {
    displayHandler: (state,action) => {
      state.isOpen = action.payload
    }
  }
})

export const { displayHandler } = NavbarSearch.actions
export default NavbarSearch.reducer