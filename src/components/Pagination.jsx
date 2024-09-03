export const Pagination = ({ currentPage, maxPage, updatePage }) => {
  return (
    <div className="join mx-auto items-center">
      <button onClick={() => updatePage(1)} className={`join-item btn ${currentPage == 1 ? 'btn-disabled': ''}`}>First</button>
      <button onClick={() => updatePage(currentPage - 1)} className={`join-item btn ${currentPage == 1 ? 'btn-disabled': ''}`}>Prev</button>
      <button className="join-item btn btn-active">{currentPage}</button>
      <button onClick={() => updatePage(currentPage + 1)} className={`join-item btn ${currentPage == maxPage ? 'btn-disabled': ''}`}>Next</button>
      <button onClick={() => updatePage(maxPage)} className={`join-item btn ${currentPage == maxPage ? 'btn-disabled': ''}`}>Last</button>
    </div>
  )
}
