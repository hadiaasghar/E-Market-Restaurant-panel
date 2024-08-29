import PropTypes from 'prop-types';

// Pagination Component
const TablePagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between items-center p-4">
    <span className="text-sm">
      Showing {currentPage} of {totalPages} pages
    </span>
    <div className="flex">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 border rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 border rounded ml-2 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  </div>
);

TablePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default TablePagination;