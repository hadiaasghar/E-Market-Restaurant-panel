import PropTypes from 'prop-types'
// Entries Select Component
const Entries = ({ entriesPerPage, onEntriesChange }) => (
  <div className="flex items-center">
    <label htmlFor="entries" className="mr-2 text-sm font-medium">
      Show
    </label>
    <select
      id="entries"
      className="p-2 border rounded"
      value={entriesPerPage}
      onChange={(e) => onEntriesChange(e.target.value)}
    >
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <span className="ml-2 text-sm">entries</span>
  </div>
);

Entries.propTypes = {
  entriesPerPage: PropTypes.number.isRequired,
  onEntriesChange: PropTypes.func.isRequired,
};

export default Entries