import React from "react";
import Dashboard from "./Dashboard";
import { ProSidebarProvider } from 'react-pro-sidebar';


function FinalDashboard() {
    return (
        <ProSidebarProvider>
            <Dashboard />
        </ProSidebarProvider>
    )
}
export default FinalDashboard;