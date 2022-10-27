import React from "react";
import Feeds from "./Feeds";
import { ProSidebarProvider } from 'react-pro-sidebar';


function FinalDashboard() {
    return (
        <ProSidebarProvider>
            <Feeds />
        </ProSidebarProvider>
    )
}
export default FinalDashboard;