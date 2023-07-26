const { createSlice } = require("@reduxjs/toolkit");




const LeftBarCollapse = createSlice({
  name: 'LeftBarCollapse',
  initialState: {
    ShowModal: true,
    ShowMinModal: false
  },
  reducers: {
    modalLeftBar: ( state, action ) => {
      state.ShowModal = action.payload
    },
    minModalHandler: ( state, action ) => {
      state.ShowMinModal = action.payload
    }
}
})


export const { modalLeftBar, minModalHandler } = LeftBarCollapse.actions
export default LeftBarCollapse.reducer