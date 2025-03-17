// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <h1>Cool New Style!</h1>
      <Outlet />
    </div>
  );
}

export default App;
