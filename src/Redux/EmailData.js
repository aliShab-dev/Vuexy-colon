const { createSlice } = require("@reduxjs/toolkit");



const EmailData = createSlice({
  name: 'EmailData',
  initialState: {
    isFetching: true,  
    emails: []
  },
  reducers: {
    fetchData: (state,action) => {
      state.emails = action.payload
    },
    refreshing: (state) => {
      state.isFetching = true
    },
    refreshed: state => {
      state.isFetching = false
    }
  }

})

export default EmailData.reducer
export const { fetchData,refreshing,refreshed } = EmailData.actions