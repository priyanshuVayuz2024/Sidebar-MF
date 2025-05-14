import { useState } from "react";
import { SideBar } from "./component/Sidebar"



const drawerWidth = 240;
const collapsedWidth = 80;
function App({ open, setOpen, navigate, location }) {
  return (
    <>
      <SideBar
        open={open}
        setOpen={setOpen}
        drawerWidth={drawerWidth}
        collapsedWidth={collapsedWidth}
        navigate={navigate}
        locationParent={location}
      />
    </>
  )
}

export default App
