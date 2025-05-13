import { useState } from "react";
import { SideBar } from "./component/Sidebar"



const drawerWidth = 240;
const collapsedWidth = 80;
function App({ open, setOpen, navigate, location }) {

  return (
    <>
      {/* <BrowserRouter basename="/"> */}
      <h1>Hello</h1>
      <SideBar
        open={open}
        setOpen={setOpen}
        drawerWidth={drawerWidth}
        collapsedWidth={collapsedWidth}
        navigate={navigate}
        locationParent={location}
      />
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
