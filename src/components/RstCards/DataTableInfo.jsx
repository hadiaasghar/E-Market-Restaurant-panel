import PropTypes from "prop-types";

const DataTableInfo = ({ entries, totalentries }) => {
  return (
    <div className="bg-primary-100 rounded-b-lg">
      <div className="flex items-center justify-between px-6 text-sm text-gray-400 py-3 mb-10">
        <h1>
          Showing 1 to {entries} of {totalentries} entries
        </h1>
        <div className="flex items-center gap-3">
          <h1>Previous</h1>
          <button className="text-white bg-black px-2 py-1 rounded">1</button>
          <h1>Next</h1>
        </div>
      </div>
    </div>
  );
};

DataTableInfo.propTypes = {
  entries: PropTypes.number.isRequired,
  totalentries: PropTypes.number.isRequired,
};

export default DataTableInfo;
