const { createSlice } = require("@reduxjs/toolkit");




const NavbarTooltip = createSlice({
  name: 'NavbarTooltip',
  initialState: {
    isShow: false,
    tooltipName: ''
  },
  reducers: {
    setShow: (state, action) => {
    state.isShow = true
    state.tooltipName = action.payload 
  },
    setClose: (state) => {
      state.isShow = false
      state.tooltipName = ''
    }
}
})


export const { setShow, setClose } = NavbarTooltip.actions
export default NavbarTooltip.reducer