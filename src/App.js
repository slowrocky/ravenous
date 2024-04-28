import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList/>
    </div>
  );
}

export default App;
