import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const FilterSidebar = ({ filterCategories,setFilteredUser, users }) => {
  const [openSections, setOpenSections] = useState({});
  

  const toggleSection = (sectionName) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionName]: !prevState[sectionName],
    }));
  };

  let updatedUsers

  const handleFilterChange = (e, filterType) => {
    if(e.target.checked){
        const selectedValue = e.target.id;
         updatedUsers = users.filter(
            (user) => user[filterType]?.toLowerCase() === selectedValue.toLowerCase()
        );
    }else{
        updatedUsers =(users)
    }
        
    setFilteredUser(updatedUsers)
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 ease-in-out md:translate-x-0 md:relative z-20">
      <nav className="mt-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 99px)' }}>
        <ul>
          <Link to="/dashboard">
            <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
              <Home size={14} className="mr-2" />
              Dashboard
            </li>
          </Link>
        </ul>


        {filterCategories.map((category) => (
          <div key={category.name}>
            <ul>
              <li
                className="p-4 pl-5 font-semibold uppercase bg-gray-100 cursor-pointer"
                onClick={() => toggleSection(category.name)}
              >
                {category.name}
              </li>


              {openSections[category.name] && (
                <div>
                  {category.options.map((option) => (
                    <li key={option} className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        id={option}
                        onChange={(e) => handleFilterChange(e, category.id)}
                      />
                      <label htmlFor={option}>{option.replace(/-/g, ' ').toUpperCase()}</label>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default FilterSidebar;
