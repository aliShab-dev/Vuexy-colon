import { SideBarContainer } from '@/component/eMail/sideBar/sideBar';
import { useSelector } from 'react-redux';
import { Connection } from './components/Connection';
import { ContactItem } from './components/ContactsItem';
import { SearchBar } from './components/SearchBar';
import { Title } from './components/Title';




export const Contacts = () => {
  const showContactModal = useSelector(state => (state.ConatactModal.isOpen))

  return (
    <SideBarContainer
     bgcolor='background.paper'
     contact>

      <SearchBar />

      <Title title={'Chats'} />

      <ContactItem/>

      <Title title={'Contacts'} />

      <Connection />
      
    </SideBarContainer>
  )
}
