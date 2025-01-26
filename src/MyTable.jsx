// Import React and required libraries
import React from 'react'; // React for building UI components
import {
  useReactTable, // React Table hook for managing table states
  getCoreRowModel, // Core row model for basic rendering
  getPaginationRowModel, // Enables pagination
  getSortedRowModel, // Enables sorting
  getFilteredRowModel, // Enables filtering
  flexRender, // Utility to render table cells
} from '@tanstack/react-table';
import axios from 'axios'; // Axios for making API calls

const MyTable = () => {
  // State management
  const [data, setData] = React.useState([]); // Holds the table data fetched from the API
  const [globalFilter, setGlobalFilter] = React.useState(''); // Global filter for table search
  const [sorting, setSorting] = React.useState([]); // State for sorting table columns
  const [loading, setLoading] = React.useState(true); // Loading indicator while fetching data

  // Fetch data from the Dummy Products API
  React.useEffect(() => {
    // Fetching data asynchronously
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products'); // API request
        setData(response.data.products); // Store data in state
        setLoading(false); // Turn off loading indicator
      } catch (error) {
        console.error('Error fetching data:', error); // Handle API errors
        setLoading(false);
      }
    };
    fetchData(); // Call the function
  }, []); // Runs only once after component mounts

  // Define table columns
  const columns = React.useMemo(
    () => [
      {
        accessorKey: 'id', // Data key for the 'ID' column
        header: 'ID', // Header name
      },
      {
        accessorKey: 'title', // Data key for the 'Product Name' column
        header: 'Product Name',
        cell: ({ getValue }) => (
          <span className="font-medium">{getValue()}</span> // Custom cell rendering
        ),
      },
      {
        accessorKey: 'price', // Data key for the 'Price' column
        header: 'Price',
        cell: ({ getValue }) => `$${getValue()}`, // Format price as currency
      },
      {
        accessorKey: 'category', // Data key for the 'Category' column
        header: 'Category',
      },
      {
        accessorKey: 'rating', // Data key for the 'Rating' column
        header: 'Rating',
        cell: ({ getValue }) => getValue() ?? 'N/A', // Handle null or undefined ratings
      },
    ],
    [] // Memoize columns to avoid unnecessary re-renders
  );

  // Initialize the table instance using @tanstack/react-table
  const table = useReactTable({
    data, // Table data
    columns, // Table columns
    state: {
      globalFilter, // Table search state
      sorting, // Table sorting state
    },
    onGlobalFilterChange: setGlobalFilter, // Update search state
    onSortingChange: setSorting, // Update sorting state
    getCoreRowModel: getCoreRowModel(), // Basic row model
    getSortedRowModel: getSortedRowModel(), // Sorting row model
    getFilteredRowModel: getFilteredRowModel(), // Filtering row model
    getPaginationRowModel: getPaginationRowModel(), // Pagination row model
  });

  // Show a loading message while data is being fetched
  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  // Render the table UI
  return (
    <div className="p-4 flex flex-col items-center">
      {/* Search Input */}
      <div className="mb-4 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search..." // Placeholder text
          value={globalFilter ?? ''} // Current search value
          onChange={(e) => setGlobalFilter(e.target.value)} // Update search value
          className="w-full px-4 py-2 border border-gray-300 rounded-md" // Tailwind CSS for styling
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full max-w-7xl">
        <table className="min-w-full border-collapse border border-black mx-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()} // Sorting handler
                    className="border border-black px-4 py-2 bg-gray-200 cursor-pointer text-xs md:text-base" // Tailwind CSS styling
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼', // Ascending sort indicator
                      desc: ' 🔽', // Descending sort indicator
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="odd:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-black px-4 py-2 text-center text-xs md:text-base" // Tailwind CSS styling
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 w-full max-w-3xl">
        <div className="flex">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md mr-2 disabled:opacity-50" // Previous page button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()} // Disable if no previous page
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50" // Next page button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()} // Disable if no next page
          >
            Next
          </button>
        </div>
        <span className="mt-2 sm:mt-0">
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <div className="mt-2 sm:mt-0">
          Go to page:{' '}
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1} // Current page index
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0; // Convert input to page index
              table.setPageIndex(page); // Update page index
            }}
            className="w-16 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MyTable; // Export the component
