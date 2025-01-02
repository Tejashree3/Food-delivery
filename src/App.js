import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Settings from './Components/Navbar/Setting';
import { useEffect, useState } from 'react';
import Banner from './Components/Banner/Banner';
import Services from './Components/services/Services';
import About from './Components/About/About';
import Download from './Components/download/Download';
import Brand from './Components/Brand/Brand';
import Contact from './Components/conact/Contact';
import Footer from './Components/footer/Footer';
import Slider from './Components/Slider/Slider';

function App() {
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("primaryColor") || "#ff6b6c"
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);
  return (
   <>

<div className='overflow-x-hidden'>

<UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}
    >

      <Navbar/>
      <Settings setPrimaryColor={setPrimaryColor} /> 
<Banner/>
    </UpdateFollower>
   
    <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'black',
        zIndex: 999,
        followSpeed: 1.5,
      }}
    >
<Services/>
<About/>
<Slider/>
<Download/>
</UpdateFollower>
<Contact />
<Brand/>
<Footer/>
    </div>
   </>
  );
}

export default App;
