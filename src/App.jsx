
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <h1>Future Developer</h1>
      <Outlet />
    </div>
  );
}

export default App;
