import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { Provider } from 'react-redux';
import store from './utils/store';


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
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
