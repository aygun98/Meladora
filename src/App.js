
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//routing sistem
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import BizKimik from './components/Routing/BizKimik';
import Baglarimiz from './components/Routing/Baglarimiz';
import Mehsullarimiz from './components/Routing/Mehsullarimiz';
import Xidmetlerimiz from './components/Routing/Xidmetlerimiz';
import SosialMesuliyyet from './components/Routing/SosialMesuliyyet';
import Elaqe from './components/Routing/Elaqe';
import ScrollToTop from './components/ScrollToTop';






function App() {
  return (
    <>
<BrowserRouter>
<ScrollToTop/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/bizkimik' element={<BizKimik/>}/>

<Route path='/baglarimiz' element={<Baglarimiz/>}/>
<Route path='/mehsullarimiz' element={<Mehsullarimiz/>}/>
<Route path='/xidmetlerimiz' element={<Xidmetlerimiz/>}/>
<Route path='/sosialmesuliyyet' element={<SosialMesuliyyet/>}/>
<Route path='/elaqe' element={<Elaqe/>}/>

</Routes>
<ScrollToTop/>
</BrowserRouter>


    </>
  );
}

export default App;
