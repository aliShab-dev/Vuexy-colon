const { createSlice } = require("@reduxjs/toolkit");


const DashboardHeader = createSlice({
  name: 'DashboardHeader',
  initialState: {
    isShow: false,
    ChartName: ''
  },
  reducers: {
    ShowModal: state => {
      state.isShow = true
    },
    HideModal: state => {
      state.isShow = false
      state.ChartName = ''
    },
    NameModal: (state, action) => {
      state.ChartName = action.payload
    }
  }
})


export default DashboardHeader.reducer
export const { ShowModal, HideModal, NameModal } = DashboardHeader.actions