const { createSlice } = require("@reduxjs/toolkit");

const SelectedHandler = createSlice({
  name: 'SelectedHandler',
  initialState: {
    user:  {gender:"female",
    name:{first: 'Paula', last: 'Pérez'},
    comment: 'how can I buy it from...',
    job: 'MySQL/MongoDB',
    picture:
    {large: 'https://randomuser.me/api/portraits/women/82.jpg', medium: 'https://randomuser.me/api/portraits/med/women/82.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/82.jpg'}
    }
  },
  reducers : {
    handleUser:(state, action) => {
      state.user =  action.payload
    }
  }
})

export const {handleUser} = SelectedHandler.actions
export const ConteactSelector = SelectedHandler.reducer