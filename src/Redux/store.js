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
import LeftBarCollapse from "./LeftBarCollapse";
import { SideModal } from "@/component/eMail/sideBar/SideBarModal";
import { ConatactModal } from "@/component/chatApp/contact/slicer/ContactModal";

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
    LeftBarCollapse,
    SideModal,
    ConatactModal
  }
})

export default store


