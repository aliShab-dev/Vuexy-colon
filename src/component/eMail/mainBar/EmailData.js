const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const fetchEmail = createAsyncThunk('fetch/email',
(num) => {
  return fetch(`https://randomuser.me/api/?results=${num}`)
  .then(res => res.json())
  .then(data => data)
})

const EmailData = createSlice({
  name: 'EmailData',
  initialState: {
    isLoading: false,  
    emails: [],
    isError: false,
    error: '' 
  },

  reducers: {
    deleteEmail: (state,action) => {
    state.emails.results = state.emails.results.filter(email => email.cell !== action.payload)
   } 
  },

  extraReducers: builder => {
    builder.addCase(fetchEmail.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchEmail.fulfilled, (state, action) => {
      state.isLoading = false
      state.emails = action.payload
    })
    builder.addCase(fetchEmail.rejected, (state,action) =>{
      state.isLoading = false
      state.isError = true
      state.error = action.error.message
    })
  }

})

export default EmailData.reducer
export const { deleteEmail, fetchData, refreshing, refreshed } = EmailData.actions