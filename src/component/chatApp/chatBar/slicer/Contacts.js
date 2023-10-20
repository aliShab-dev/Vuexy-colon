const { createSlice } = require("@reduxjs/toolkit");


const ContactSlicer = createSlice({
  name: 'ContactSlicer',
  initialState: {
    contacts: [
      {gender:"female",
      name:{first: 'Paula', last: 'Pérez'},
      comment: 'how can I buy it from...',
      job: 'MySQL/MongoDB',
      picture:
      {large: 'https://randomuser.me/api/portraits/women/82.jpg', medium: 'https://randomuser.me/api/portraits/med/women/82.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/82.jpg'}
      },
      {
      gender:"male", 
      name:{first: 'بردیا', last: 'علیزاده'},
      comment: 'I am intrested how do you...',
      job: 'Djanjo Developer',
      picture:
      {large: 'https://randomuser.me/api/portraits/men/91.jpg', medium: 'https://randomuser.me/api/portraits/med/men/91.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg'},
      },
      {
      gender:"male",
      name:{first: 'Matt', last: 'Murray'},
      comment: 'can you help me with React...',
      job: 'Front-End Devloper',
      picture:
      {large: 'https://randomuser.me/api/portraits/men/43.jpg', medium: 'https://randomuser.me/api/portraits/med/men/43.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/43.jpg'}
      }
      ]
  },
  reducers: {
    addContact: (state,action) => {
      state.contacts = [...state.contacts, action.payload]
    },
    deleteContact : ( state, action ) => {
      state.contacts = state.contacts.filter( contact => 
        contact.name.first !== action.payload 
       )
    }

  }
})

export const { addContact, deleteContact } = ContactSlicer.actions
export default ContactSlicer.reducer