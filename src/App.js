import {Routes,Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom'
import './App.css';
import Index from './pages/Index'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
