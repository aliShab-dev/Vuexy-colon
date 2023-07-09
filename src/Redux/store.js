const { configureStore } = require("@reduxjs/toolkit");
import { EmailModalReducer } from "../component/eMail/index/EmailModalSlicer";
import LightModeHandler from "./LightModeHandler";
import NavbarSearch from "./NavbarSearch";
import DashboardHeaders from "./DashboardHeaders";
import EmailData from "../component/eMail/mainBar/EmailData"; 
import NavbarTooltip from "./NavbarTooltip";
import { SentModal } from "../component/eMail/sent/EmailSentModal";
import { SideBar } from "../component/eMail/sideBar/EmailsidBarHandler";
import { ConteactSelector } from "@/component/chatApp/contact/slicer/SelectedHandler";
import SetInput from "../component/chatApp/chatBar/slicer/SetInput";



const store = configureStore({
  reducer: {
    EmailModal : EmailModalReducer,
    NavbarSearch,
    LightModeHandler,
    DashboardHeaders,
    EmailData,
    NavbarTooltip,
    SentModal,
    SideBar,
    ConteactSelector,
    SetInput,
  }
})

export default store


