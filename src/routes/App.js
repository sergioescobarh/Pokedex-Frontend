import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {Home} from '../pages/Home/Home'
import {Pokedex} from '../../src/pages/Pokedex/Pokedex';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}/>
    <Route path='/Pokedex' element={<Pokedex/>}/>
    </>
  ))

  return (
    <div> 
      
      <RouterProvider router={router}/>
        
    </div>
  );
}

export default App;
