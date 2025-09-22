
import { useState } from "react";
import Drawer from "../Components/Drawer.jsx";
import Header from "../Components/Header.jsx";
import InFooter from "../Components/inFooter.jsx";
import QuemSomos from "../Components/QuemSomos.jsx";
import Valores from "../Components/Valores.jsx";

export default function Home() {
  const [open, setOpen]= useState(false)
  return (
    <>
      <Header  setOpen={setOpen} />
      <Valores/>
      <QuemSomos setOpen={setOpen}/>
      <InFooter/>
      
      <Drawer open={open} setOpen={setOpen}/>
  
    </>
  );
}