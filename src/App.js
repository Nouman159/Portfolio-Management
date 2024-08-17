import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import ProjectDetails from './Components/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project/details/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
