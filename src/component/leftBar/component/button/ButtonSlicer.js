const { createSlice } = require("@reduxjs/toolkit");

const ButtonSlicer = createSlice({
  name: 'ButtonSlicer',
  initialState: {
    selectedBtn: ''
  },
  
  reducers: {
    btnHandler: (state, action) => {
      state.selectedBtn = action.payload
      localStorage.setItem('app', JSON.stringify(action.payload))
  },
}
})


export const { btnHandler } = ButtonSlicer.actions
export default ButtonSlicer.reducer