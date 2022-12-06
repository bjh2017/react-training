import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Cart from "./components/cart";

function App() {
  const [rows, setRows] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 4 },
    { id: 3, value: 1 },
  ]);

  console.log("1", "state");

  useEffect(() => {
    console.log("2", "effect");
  }, [rows]);

  console.log("3", "render");

  return (
    <>
      <div className="container">
        <Header itemsCount={rows.length} />
        {/* <Navbar /> */}
      </div>
      <Cart rows={rows} setRows={setRows} />
      <Footer />
    </>
  );
}

export default App;
