import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultLayout from './pages/DefaultLayout';
import Contact from "./pages/Contact";
import PageMovies from "./pages/Movies";
import Home from "./pages/Home";
import About from "./pages/about";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={defaultLayout}>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/movies' Component={PageMovies} />
          <Route path='/movies/:id' Component={Details} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;