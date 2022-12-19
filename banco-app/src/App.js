import Home from './components/Home'
import TransfResultsProvider from './context/TransfResults';

function App() {
  return (
    <TransfResultsProvider>
      <Home />
    </TransfResultsProvider>
  );
}

export default App;
