import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Signup/>} /> 
        <Route path='/signin' element={<Signin />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
