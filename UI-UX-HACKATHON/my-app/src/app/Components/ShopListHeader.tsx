import { BsFilter, BsGrid, BsListUl } from 'react-icons/bs'


export default function ShopListHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-[#FAF4F4] px-6 py-4">
      {/* Left Section */}
      <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <button className="inline-flex items-center gap-2 rounded-md border bg-white px-4 py-2 text-sm hover:bg-gray-50">
          <BsFilter className="text-lg" />
          <span>Filter</span>
        </button>
        
        <div className="flex items-center gap-2 border-l pl-4">
          <button className="p-2 text-lg text-gray-600 hover:text-gray-900" aria-label="Grid view">
            <BsGrid />
          </button>
          <button className="p-2 text-lg text-gray-600 hover:text-gray-900" aria-label="List view">
            <BsListUl />
          </button>
        </div>

        <div className="text-sm text-gray-600">
          Showing 1–16 of 32 results
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <label htmlFor="show-select" className="text-sm text-gray-600">Show</label>
          <select 
            id="show-select"
            className="h-9 rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors hover:bg-gray-50"
            defaultValue="16"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-sm text-gray-600">Short by</label>
          <select 
            id="sort-select"
            className="h-9 rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors hover:bg-gray-50"
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
    </div>
  )
}

