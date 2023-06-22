const { createSlice } = require("@reduxjs/toolkit");

const EmailModelSlicer = createSlice({
  name: 'EmailModalSlicer',
  initialState: {
    isOpen: false,
    data: []
  },
  reducers : {
    OpenEmailModal:(state, action) => {
      state.isOpen = true
      state.data =  action.payload
    },
    CloseEmailModal: (state) => {
      state.isOpen = false
      state.data = []
    }
  }
})

export const {OpenEmailModal, CloseEmailModal} = EmailModelSlicer.actions
export const EmailModalReducer = EmailModelSlicer.reducer