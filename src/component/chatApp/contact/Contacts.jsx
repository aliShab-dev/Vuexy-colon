import { Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import { Connection } from './components/Connection';
import { ContactItem } from './components/ContactsItem';
import { SearchBar } from './components/SearchBar';
import { Title } from './components/Title';

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

      <SearchBar />

      <Title title={'Chats'} />

      <ContactItem/>

      <Title title={'Contacts'} />

      <Connection />
      
    </Stack>
  )
}
