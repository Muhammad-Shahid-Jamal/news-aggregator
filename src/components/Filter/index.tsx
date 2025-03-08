import type { FilterState } from '../../../hooks/useFilters';
// Defining a type for FilterProps
type FilterProps = {
  title: string;
  type: 'select' | 'date'; // specify the allowed input types
  options?: string[]; // Options for select input
  value: string; // the value type for the input (could be string, date, etc.)
  name: keyof FilterState;
  onChange: (name: keyof FilterState, value: string) => void;
};

const Filter = ({
  title,
  type,
  options,
  value,
  name,
  onChange,
}: FilterProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <label className="mb-2 block" htmlFor={name}>
        {title}
      </label>
      <div className="relative">
        {type === 'select' && options ? (
          <>
            <select
              name={name}
              title={name}
              className="appearance-none pr-4 w-full p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              value={value}
              onChange={(e) => onChange(name, e.target.value)}
              id={name}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <svg
              className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </>
        ) : (
          <input
            id={name}
            type="date"
            className="w-full p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            value={value} // casting because date input value is a string
            onChange={(e) => onChange(name, e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default Filter;
