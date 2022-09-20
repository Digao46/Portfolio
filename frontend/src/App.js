import "./assets/scss/globals.scss";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
