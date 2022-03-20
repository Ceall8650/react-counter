import Counter from './components/Counter/index';

function App() {
  const counter = Array.from({ length: 5 })

  return (
    <div className="App">
      {
        counter.map((_, key) => <Counter key={key} /> )
      }
    </div>
  );
}

export default App;
