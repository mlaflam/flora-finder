import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js'; // Import the ScrollToTop component
import './App.css';
import './style.css';

import ExplorePage from './pages/ExplorePage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import ErrorPage from './pages/ErrorPage';
import Contact from './components/Contact.js'
import ExamplePlantPage from './pages/ExamplePlantPage.js';


function App() {
  return (

    <BrowserRouter>
      <ScrollToTop /> {/* Include the ScrollToTop component */}
      <Routes>
        <Route index element={<ExplorePage />} />
        <Route path='/flora-finder/' element={<ExplorePage />} />
        <Route path='/flora-finder' element={<ExplorePage />} />
        <Route path='/flora-finder/Explore' element={<ExplorePage />} />
        <Route path="/flora-finder/PlantPage/:scientificName" element={<ExamplePlantPage />} />
        <Route path='/flora-finder/About' element={<AboutPage />} />
          
        <Route name="About" path="/flora-finder/About" handler={<AboutPage />}>
          <Route name="Contact" path="#Contact" handler={<Contact />} />
        </Route>

        <Route path='/flora-finder/SignIn' element={<SignInPage />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
      
      </BrowserRouter>
      



  );
}

export default App;
