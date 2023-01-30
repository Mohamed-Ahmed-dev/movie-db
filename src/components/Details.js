import React,{useState,useEffect} from 'react'
import {Link ,useParams} from 'react-router-dom'
import axios from 'axios'


const Details = () => {
  const param =useParams();
  // details data
  const [movie, setmovie] =useState([]);
    // get the details of the movie
    const getDetails = async() => {
      const res =  await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=1922ec463f37cd4719c1f323a018f371&language=ar-US`)
      setmovie(res.data)
    }
// play the fun
  useEffect(() => {
    getDetails()
  }, []);


  return (
    <div className='Main'>
      <div className='details'>
        <div className='d-image'>
        <img src={`https://image.tmdb.org/t/p/w500/`+movie.backdrop_path} alt=""/>
        </div>
        <div className='d-text'>
        <h2>اسم الفيلم: {movie.title}</h2>
        <p>تاريخ الاصدار: {movie.release_date}</p>
        <p>عدد المقيمين: {movie.vote_count}</p>
        <p>التقييم: {movie.vote_average}</p>
        </div>
      </div>
      <div className='stoty'>
      <h3>قصة الفيلم:</h3>
      <p>{movie.overview}</p>
      </div>
      <div className='links'>
      <Link to="/">
      <button>عودة للرئيسية</button>
      </Link>
      <a href={movie.homepage}>
        <button>مشاهدة الفيلم</button>
      </a>
      </div>
    </div>
  )
}

export default Details
