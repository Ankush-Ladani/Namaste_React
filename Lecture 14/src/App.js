import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body />,
    children : [
      {
        path : "/",
        element : <MainContainer />
      },
      {
        path : "/watch",
        element : <WatchPage />
      }
    ]
  },
])

function App() {
  return (
    <div className="App m-5">
      <Header />
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
