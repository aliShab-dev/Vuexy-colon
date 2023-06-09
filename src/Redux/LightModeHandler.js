const { createSlice } = require("@reduxjs/toolkit");




const LightModeHandler = createSlice({
  name: 'LightModeHandler',
  initialState: {
    lightMode: true
  },
  reducers: {
    ModeHandler: (state) => {
    state.lightMode = !state.lightMode
  } 
}
})


export const { ModeHandler  } = LightModeHandler.actions
export default LightModeHandler.reducer