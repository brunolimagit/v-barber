import Header from "./Components/Header.jsx";
import Drawer from "./Components/Drawer.jsx";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
