const { createSlice } = require("@reduxjs/toolkit");




const LightModeHandler = createSlice({
  name: 'LightModeHandler',
  initialState: {
    lightMode: false
  },
  reducers: {
    modeHandler: (state) => {
    state.lightMode = !state.lightMode
  } 
}
})


export const { modeHandler  } = LightModeHandler.actions
export default LightModeHandler.reducer