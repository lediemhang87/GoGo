import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Planner from './Components/Planner';
import Introduction from './Components/Introduction'

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/planner' element={<Planner/>}/>
        <Route path='/' element={<Introduction/>}/>

      </Routes>
    </Router>
  );
}

export default App;