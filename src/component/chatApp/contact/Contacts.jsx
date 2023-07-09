import { SideBarContainer } from '@/component/eMail/sideBar/sideBar';
import { Connection } from './components/Connection';
import { ContactItem } from './components/ContactsItem';
import { SearchBar } from './components/SearchBar';
import { Title } from './components/Title';




export const Contacts = () => {
  return (
    <SideBarContainer contact>
      <SearchBar />

      <Title title={'Chats'} />

      <ContactItem/>

      <Title title={'Contacts'} />

      <Connection />
      
    </SideBarContainer>
  )
}
