import logo from './logo.svg';
// import './App.css';
import './display.css';
import Start from './Start'
import Desktop from './Boughous/Desktop/Desktop';
import MainContextProvider from './Context/Maincontext';

function App() {
  return (
    <div className="App">
      <MainContextProvider> 
        <Desktop />
      </MainContextProvider>
    </div>
  );
}

export default App;
