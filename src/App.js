import { Routes, Route } from 'react-router-dom'
import Contactme from './Pages/Contactme/ContactMe';
import Home from "./Pages/Home"
import Education from "./Pages/Education/Education"
import Footer from "./components/Footer"
import Navbar from './components/Navbar';
import NotFound from './Pages/NotFound';
import Projects from './Pages/Project/Projects';




function App() {
  return (
    <>
  <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        <Route path='education' element={<Education/>}></Route>
        <Route path='contactme' element={<Contactme/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}


export default App;
