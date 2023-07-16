import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar} from "./components";
import { Services, About, ContactUs, Home, Pricing } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
