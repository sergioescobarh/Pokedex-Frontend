import './App.css';
import {Navbar} from './components/atoms/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            {<Navbar options={['sdfsd','dfgdg']}/>} 
        </div>
        <img className='logo' src="/images/logo2.jpg" alt='logo' />
        <div>
            {<Navbar options={['sdfsd','dfgdg']}/>} 
        </div>
      </header>
      <main className='App-main'>
        <div className='Main-left'>g</div>
        <div className='Main-center'></div>
        <div className='Main-right'>y</div>
      </main>
      <footer className='App-footer'>
nnnn
      </footer>
    </div>
  );
}

export default App;
