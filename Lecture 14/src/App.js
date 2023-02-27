import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';

function App() {
  return (
    <div className="App m-5">
      <Header />
      <div className='flex'>
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
