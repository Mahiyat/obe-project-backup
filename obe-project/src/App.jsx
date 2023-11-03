import { Outlet } from 'react-router-dom';

import PageTemplate from './COMPONENTS/PageTemplate';

import './App.css';

function App() {
  return (
    <div className="App">
      <PageTemplate />
      <Outlet />
    </div>
  );
}

export default App;
