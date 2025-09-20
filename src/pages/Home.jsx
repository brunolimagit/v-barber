
import { useState } from "react";
import Drawer from "../Components/Drawer.jsx";
import Header from "../Components/Header.jsx";

export default function Home() {
  const [open, setOpen]= useState(false)
  return (
    <>
      <Header  setOpen={setOpen} />
      
      <Drawer open={open} setOpen={setOpen}/>
  
    </>
  );
}