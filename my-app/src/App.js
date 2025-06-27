import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefukGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component" name="Lerzos"/>
    </div>
  );
}

export default App;
