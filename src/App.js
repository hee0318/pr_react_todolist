import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Todo from './pages/Todo/Todo';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  );
}

export default App;
