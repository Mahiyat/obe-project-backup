import { Outlet } from 'react-router-dom';

import PageTemplate from './COMPONENTS/PageTemplate';
import FinalEvaluationSheet from './COMPONENTS/FinalEvaluationSheet';
import './App.css';



function App() {
  return (
    <div className="App">
      <PageTemplate />
      {/* <Outlet /> */}
      <FinalEvaluationSheet/>

    </div>
  );
}

export default App;
