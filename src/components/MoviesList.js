import React from 'react'
import CardMovie from './CardMovie';
import PaginationComponent from './PaginationCom'

const MoviesList = ({movies ,getPage ,pageCount}) => {
  return (
    <div className='cards'>
      {
        movies.length >=1 ? (movies.map((mov)=>{
          return(
            
            <CardMovie mov={mov} />
          )
        })) :<h2 className="text-center p-5">لا توجد افلام</h2>
      }
        <PaginationComponent getPage={getPage} pageCount={pageCount}/>
    </div>
  )
}

export default MoviesList
