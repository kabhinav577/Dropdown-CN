import './App.css';
import Dropdown from './Dropdown';

function App() {
  // Creating dropdown Items Array and pass through the props in Dropdown Component
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="app">
      <h1>Should you use DropDown?</h1>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
