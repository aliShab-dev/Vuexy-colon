const { createSlice } = require("@reduxjs/toolkit");

const EmailSentModal = createSlice({
  name: 'EmailSentModal',
  initialState: {
    isOpen: false,
    data: []
  },
  reducers : {
    OpenSentModal:(state, action) => {
      state.isOpen = true
      state.data =  action.payload
    },
    CloseSentModal: (state) => {
      state.isOpen = false
      state.data = []
    }
  }
})

export const {OpenSentModal, CloseSentModal} = EmailSentModal.actions
export const SentModal = EmailSentModal.reducer