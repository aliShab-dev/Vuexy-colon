const { createSlice } = require("@reduxjs/toolkit");

const ContactModal = createSlice({
  name: 'ContactModal',
  initialState: {
    isOpen: false
  },
  reducers : {
    ContactModalHandler:( state, action ) => {
      state.isOpen = action.payload
    }
  }
})

export const { ContactModalHandler } = ContactModal.actions
export const ConatactModal = ContactModal.reducer