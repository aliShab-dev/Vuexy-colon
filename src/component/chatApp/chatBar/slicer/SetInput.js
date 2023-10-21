const { createSlice } = require("@reduxjs/toolkit");


const SetInput = createSlice({
  name: 'SetInput',
  initialState: {
     massage: [
      {
      id: 1,
      text:[`How can we help? We're here for you!😄`],
      isSeen: true,
      time:'10:00 AM'
    },
      {
      id: 2,
      text:[`Hey John, I am looking for the best admin template.`,`
      Could you please help me to find it out? 🤔`,`It should be Bootstrap 5 compatible.`],
      time:'10:02 AM'
    },
      {
      id: 3,
      text:[`Vuexy has all the components you'll ever need in a app.`],
      isSeen: true,
      time:'10:03 AM'
    },
      {
      id: 4,
      text:[`Looks clean and fresh UI. 😃`, `It's perfect for my next project.`,`How can I purchase it?`],
      time:'10:05 AM'
    },
      {
      id: 5,
      text:[`Thanks, you can purchase it.`],
      isSeen: true,
      time:'10:07 AM'
    },
      {
      id: 6,
      text:[`I will purchase it for sure. 👍`, `Thanks.`],
      time:'10:09 AM'
    },
      {
      id: 7,
      text:[`Great, Feel free to get in touch.`],
      isSeen: true,
      time:'10:11 AM'
    },
      {
      id: 8,
      text:[`Do you have design files for Vuexy?`],
      time:'10:11 AM'
    },
      {
      id: 9,
      text:[`Yes that's correct documentation file, Design files are included with the template.`],
      isSeen: false,
      time:'10:15 AM'
    },
   ],
     newMassage: []
  },
  reducers: {
    sendInput: ( state,action ) => {
      state.massage = [...state.massage, action.payload]
    },
    setNewMassage: ( state, action ) => {
      state.newMassage = [...state.newMassage, action.payload]
    }
  }
})

export const { sendInput, setNewMassage } = SetInput.actions
export default SetInput.reducer