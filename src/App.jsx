import { useState } from "react";
import { SideBar } from "./component/Sidebar";

const drawerWidth = 240;
const collapsedWidth = 80;
function App({ open, setOpen }) {
  return (
    <>
      <SideBar
        open={open}
        setOpen={setOpen}
        drawerWidth={drawerWidth}
        collapsedWidth={collapsedWidth}
      />
    </>
  );
}

export default App;
