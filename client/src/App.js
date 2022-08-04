import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import GolfForm from './components/GolfForm';
import EditGolf from './components/EditGolf';
import GolfDetails from './components/GolfDetails';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <h1 className="main-header">Golf-Pals</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayAll />} />
        <Route path='/new' element= {<GolfForm />} />
        <Route path='/edit/:id' element= {<EditGolf />} />
        <Route path='/GolfDetails/:id' element= {<GolfDetails />} />
        <Route path='/ContactForm/:id' element= {<ContactForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
