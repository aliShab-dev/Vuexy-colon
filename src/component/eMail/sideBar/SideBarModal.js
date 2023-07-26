const { createSlice } = require("@reduxjs/toolkit");

const SidebarModal = createSlice({
  name: 'SidebarModal',
  initialState: {
    isOpen: false
  },
  reducers : {
    modalHandler:( state, action ) => {
      state.isOpen = action.payload
    }
  }
})

export const { modalHandler } = SidebarModal.actions
export const SideModal = SidebarModal.reducer