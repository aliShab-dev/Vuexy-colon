const { createSlice } = require("@reduxjs/toolkit");

const AccordianSlicer = createSlice({
  name: 'AccordianSlicer',
  initialState: {
    selectedIndex: 1,
    isOpen: true
  },
  
  reducers: {
    indexHandler: (state, action) => {
      state.selectedIndex = action.payload
    },
    accordianHandler: (state, action) =>{
      state.isOpen = action.payload
    }
}
})


export const { indexHandler, accordianHandler } = AccordianSlicer.actions
export default AccordianSlicer.reducer