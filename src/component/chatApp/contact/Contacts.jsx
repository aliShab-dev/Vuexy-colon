import { Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import { Connection } from './components/Connection';
import { ContactItem } from './components/ContactsItem';
import { SearchBar } from './components/SearchBar';
import { Title } from './components/Title';

const contacts = [
  {name:{title: 'Mrs', first: 'Abby', last: 'Barrett'},
  gender:"male", 
  job: 'MySQL/MongoDB',
  picture:
  {large: 'https://randomuser.me/api/portraits/women/76.jpg', medium: 'https://randomuser.me/api/portraits/med/women/76.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/76.jpg'}},
  { name:{ title: 'Mr', first: 'Shaurya', last: 'Gupta'},
  job: 'Back-End Developer',
   picture:
   {large:"https://randomuser.me/api/portraits/men/79.jpg",medium:
     "https://randomuser.me/api/portraits/med/men/79.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/79.jpg"}},
 
  { name: {title: 'Ms', first: 'Brooke', last: 'Matthews'},
  gender:"female", 
  job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/63.jpg', medium: 'https://randomuser.me/api/portraits/med/women/63.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/63.jpg'}},
 
   {name:{title: 'Mrs', first: 'Samantha', last: 'Martin'},
   job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/79.jpg', medium: 'https://randomuser.me/api/portraits/med/women/79.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/79.jpg'}},
 
  { name:{title: 'Mr', first: 'Özkan', last: 'Demirbaş'},
  job: 'Back-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/23.jpg', medium: 'https://randomuser.me/api/portraits/med/men/23.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg'}},
 
   {name:{title: 'Mr', first: 'Alfredo', last: 'Serrano'},
   gender:"male", 
   job: 'Node JS Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/14.jpg', medium: 'https://randomuser.me/api/portraits/med/men/14.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg'}},
 
  { name:{title: 'Miss', first: 'Ana Luisa', last: 'Díaz'},
  job: 'Django Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/77.jpg', medium: 'https://randomuser.me/api/portraits/med/women/77.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg'}},
 
   {name:{title: 'Mr', first: 'Glen', last: 'Fowler'},
   gender:"male", 
   job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/67.jpg', medium: 'https://randomuser.me/api/portraits/med/men/67.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg'}},
 
   {name:{title: 'Mr', first: 'Jeppe', last: 'Madsen'},
   gender:"female", 
   job: 'Back-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/93.jpg', medium: 'https://randomuser.me/api/portraits/med/men/93.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/93.jpg'}},
 
  {name:{title: 'Mrs', first: 'Linnea', last: 'Ollila'},
  gender:"male", 
  job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/80.jpg', medium: 'https://randomuser.me/api/portraits/med/women/80.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg'}},
    {gender:"male", 
    name:{first: 'دارا', last: 'علی'},
    job: 'Front-End Developer',
    picture:
    {large: 'https://randomuser.me/api/portraits/men/91.jpg', medium: 'https://randomuser.me/api/portraits/med/men/91.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg'},
  }
]

export const Contacts = () => {
  const showContactModal = useSelector(state => (state.SideModal.isOpen))
  
  return (
    <Stack
     bgcolor='background.paper'
     sx={{
      maxWidth:  240,
      minWidth: 240,
      height: '100%',
      overflow: 'hidden',
      overflowY: 'auto',
      transition: '.3s ease-out' ,
      borderRight: '1px solid #434968',
      padding: '0 7px',
      '@media(max-width:940px)': {
        opacity: showContactModal ? 1 : .5,
        position: 'absolute',
        left: showContactModal ? 0 : -250,
        top: 0,
        zIndex: 10
      },
      '::-webkit-scrollbar':{
        display: 'none'
      },
     }}
     >

      <SearchBar contacts={contacts} />

      <Title title={'Chats'} />

      <ContactItem/>

      <Title title={'Contacts'} />

      <Connection contacts={contacts} />
      
    </Stack>
  )
}
