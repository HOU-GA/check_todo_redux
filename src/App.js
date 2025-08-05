
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    

<div className="app-container">
<div className="main-content">
      <h1>TO DO LIST</h1>
      <AddTask/>
      <ListTask/>
    </div></div>
  );
}

export default App;
