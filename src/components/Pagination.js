import React from "react";

const Pagination = ({
  goToNextPage,
  goToPrevPage,
  handlePageChange,
  noOfPages,
  currentPage,
}) => {
  return (
    <div className="pagenation-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={() => goToPrevPage()}
      >
        👈
      </button>

      {[...Array(noOfPages).keys()].map((n) => (
        <button
          className={"page-number" + (n === currentPage ? " active" : "")}
          key={n}
          onClick={() => handlePageChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentPage === noOfPages - 1}
        className="page-number"
        onClick={goToNextPage}
      >
        👉
      </button>
    </div>
  );
};

export default Pagination;
