import React,{useEffect,useState } from 'react'
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import Details from './components/Details';
import {Container} from 'react-bootstrap'
import axios from 'axios'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  const [movies, setmovies] =useState([]);
  const [pageCount, setpageCount] = useState(0);
  // get All Movies by axios
  const getAllMovies = async() => {
    const res =  await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1922ec463f37cd4719c1f323a018f371&language=ar-US&page=1")
    setmovies(res.data.results)
    setpageCount(res.data.total_pages)
  }
  useEffect(() => {
    getAllMovies();
  }, []);
  
  // get The data of the page by it's number
  const getPage = async(PageNo) => {
    const res =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1922ec463f37cd4719c1f323a018f371&language=ar-US&page=${PageNo}`)
    setmovies(res.data.results)
    setpageCount(res.data.total_pages)
  }
  // search
  const Onsearch = async(In) => {
  if (In==="") {
    getAllMovies();
    
  }else{
    const respo =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1922ec463f37cd4719c1f323a018f371&query=${In}&language=en-ar`)
    setmovies(respo.data.results)
    setpageCount(respo.data.total_pages)
  }
  }



  return (
    <div className='font color-body'>
      <NavBar Onsearch={Onsearch}/>
      
      <Container>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>}/>
            <Route path="/movie/:id" element={<Details/>}/>
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
