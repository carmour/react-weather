import './App.css';

const api = {
  key: "be520ce17cb65a32424217c0d7665159",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div>
      <div>
        <div className="search-box">
          <div type='text' className='search-bar' placeholder='Search'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
