import React from 'react'
import ReactPaginate from 'react-paginate';


const PaginationComponent = ({getPage,pageCount}) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1)
  }
  
  return (
    <div className='pag d-flex'>
    <ReactPaginate
    breakLabel="...."
    nextLabel="التالي"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="السابق"
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    containerClassName={"pagination d-flex p-3 justify-content-center "}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
  />
  </div>
  )
}

export default PaginationComponent
