import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/form-page' element={<FormPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
