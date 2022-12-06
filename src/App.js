import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
