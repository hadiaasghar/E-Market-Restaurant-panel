import React, { useState } from "react";
import Entries from "../Table/Entries";
import TableHeader from "../Table/TableHeader";
import PropTypes from 'prop-types'
import TableRow from "../Table/TableRow";
import TablePagination from "../Table/TablePagination";
import OrdersTable from "../Table/OrdersTable";
import { BsEnvelopeArrowDownFill } from "react-icons/bs";

// Search Input Component
const SearchInput = () => (
  <div>
  <label htmlFor="">Search: </label>
  <input
    type="text"
    placeholder="Search"
    className="p-1 border rounded"
  />
  </div>
  
);

const Orders = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Get current entries
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);


  // Change page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Change entries per page
  const handleEntriesChange = (value) => {
    setEntriesPerPage(Number(value));
    setCurrentPage(1); // Reset to first page on entries change
  };

  const totalPages = Math.ceil(data.length / entriesPerPage);

  console.log('Data:', data);
  console.log('Current Entries:', currentEntries);
  console.log('Current Page:', currentPage);
  console.log('Entries Per Page:', entriesPerPage);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center p-4">
        <Entries
          entriesPerPage={entriesPerPage}
          onEntriesChange={handleEntriesChange}
        />
        <SearchInput />
      </div>
      <OrdersTable data={entriesPerPage}/>
      {/* <table className="min-w-full bg-white border">
        <TableHeader />
        <tbody>
          {currentEntries && currentEntries?.length > 0 ? (
            currentEntries?.map((entry, index) => (
              <TableRow key={index} entry={entry} />
            ))
          ) : (
            <tr>
              <td colSpan="9" className="p-4 text-center">
                No Record Found
              </td>
            </tr>
          )}
        </tbody>
      </table> */}
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

Orders.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Orders;
