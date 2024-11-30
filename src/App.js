import './App.css';
import Navbar from './components/Navbar/Navbar';
import InputBox from './components/InputBox/InputBox';
import AlbumList from './components/AlbumList/AlbumList';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <InputBox/>
      <AlbumList/>
    </div>
  );
}

export default App;
