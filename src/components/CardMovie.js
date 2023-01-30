import React from 'react'
import {Link} from 'react-router-dom'


const CardMovie = ({mov}) => {
  return (
    <div>
    <Link to={`/movie/${mov.id}`}>
    <div className='card' key={mov.id}>
    <img src={`https://image.tmdb.org/t/p/w500/`+mov.backdrop_path} alt=""/>
    <div className='text'>
      <p>اسم الفيلم: {mov.title}</p>
      <p>تاريخ الاصدار : {mov.release_date}</p>
      <p>عددالمقيمين: {mov.vote_count}</p>
      <p>التقييم: {mov.vote_average}</p>
    </div>
    </div>
    </Link>
    </div>
  )
}

export default CardMovie
