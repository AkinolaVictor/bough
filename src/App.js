import logo from './logo.svg';
// import './App.css';
import './display.css';
import Start from './Start'
import Desktop from './Boughous/Desktop/Desktop';
import MainContextProvider from './Context/Maincontext';
import DesktopMobile from './Boughous/Desktop/DesktopMobile';

function App() {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  return (
    <div className="App">
      <MainContextProvider> 
        {
          mediaQuery.matches?
          <Desktop />:
          <DesktopMobile />
        }
        {/* <Desktop /> */}
        {/* <DesktopMobile /> */}
      </MainContextProvider>
    </div>
  );
}

export default App;
