import './App.css';
import ParentComponent from './ClassComponents/ParentComponent';
import ParentComponents from './FunctionalComponent/ParentComponents';
import Parent from './Udemy/Components/Parent';

function App() {
  return (
      <div className="App">
        <ParentComponent />
        <ParentComponents />
        <Parent />
      </div>
  );
}

export default App;
