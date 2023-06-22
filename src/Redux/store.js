const { configureStore } = require("@reduxjs/toolkit");
import { EmailModalReducer } from "./EmailModalSlicer";
import LightModeHandler from "./LightModeHandler";
import NavbarSearch from "./NavbarSearch";
import DashboardHeaders from "./DashboardHeaders";
import EmailData from "./EmailData"; 
import NavbarTooltip from "./NavbarTooltip";

const store = configureStore({
  reducer: {
    EmailModal : EmailModalReducer,
    NavbarSearch,
    LightModeHandler,
    DashboardHeaders,
    EmailData,
    NavbarTooltip,
  }
})

export default store