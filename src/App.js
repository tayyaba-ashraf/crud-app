
import './App.css';
import Create from './Components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './Components/Read';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="container">
    <Routes>
      {/* exact is a prop to match exact path which is requested */}
      <Route exact path='/' element={<Read/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      <Route exact path='/edit' element={<Edit/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
