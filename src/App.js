import React from "react";
import Dashboard from "./component/Dashboard/Dashboard";
import { ProSidebarProvider } from 'react-pro-sidebar';

function App (){
  return (
  <ProSidebarProvider>
   <Dashboard />
  </ProSidebarProvider>

  
   
  
  );

}
export default App;


