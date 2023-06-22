const { createSlice } = require("@reduxjs/toolkit");

const SideBarHandler = createSlice({
  name: 'EmailSentModal',
  initialState: {
    name: 'inbox'
  },
  reducers : {
    selectItem:(state, action) => {
      state.name =  action.payload
    }
  }
})

export const {selectItem} = SideBarHandler.actions
export const SideBar = SideBarHandler.reducer