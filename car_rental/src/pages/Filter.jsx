



import React from 'react'
import { ChevronDown } from 'lucide-react'

const filters = [
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'skoda', label: 'Skoda' },
        { value: 'volkswagen', label: 'Volkswagen' },
        { value: 'kia', label: 'Kia' },
        { value: 'hyundai', label: 'Hyundai' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'mg', label: 'MG' },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'All New Arrivals' },
        { value: 'sedan', label: 'Sedan' },
        { value: 'suv', label: 'SUV' },
        { value: 'hatchback', label: 'Hatchback' },
        { value: 'crossover', label: 'Crossover' },
      ],
    },
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White' },
        { value: 'black', label: 'Black' },
        { value: 'navy', label: 'Navy' },
        { value: 'silver', label: 'Silver' },
        { value: 'red', label: 'Red' },
        { value: 'grey', label: 'Grey' },
      ],
    }
  ]
  

const Filter = () => {
  return (
    
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
        {/* Top */}
        <div className="md:flex md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-xl font-bold">Cars</h1>
          </div>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <button
              type="button"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
            >
              Sort <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
              onClick={()=>filterItem("sedan")}
            >
              Category <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Color <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Brand <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
            {filters.map((filter) => (
              <div key={filter.id} className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900">{filter.name}</h3>
                <ul className="mt-2">
                  {filter.options.map((option) => (
                    <li key={option.value} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <input
                          id={`${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className="ml-3 text-sm font-medium text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Filter