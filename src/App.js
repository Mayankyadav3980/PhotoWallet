import './App.css';
import Navbar from './components/Navbar/Navbar';
import AlbumsPage from './components/AlbumsPage';
import PhotosPage from './components/PhotosPage'
// import InputBox from './components/InputBox/InputBox';
// import AlbumList from './components/AlbumList/AlbumList';

function App() {
  return (
    <div className="app">
      <Navbar/>
      {/* <AlbumsPage/> */}
      <PhotosPage/>
      {/* <InputBox/>
      <AlbumList/> */}
    </div>
  );
}

export default App;
