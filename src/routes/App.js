import './App.css';
import {Header} from '../../src/components/organisms/Header/Header';
import {Home} from '../pages/Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className='App-main'>
        <Home/>
      </main>
      <footer className='App-footer'>
nnnn
      </footer>
    </div>
  );
}

export default App;
