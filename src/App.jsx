
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div>
      <Nav/>
      <h1>Future Developer</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
