import React, { useState } from 'react';
import Filter from '../Filter';

const LeftMenu: React.FC = () => {
  const [sideBar, setSideBarOpen] = useState<boolean>(false);
  return (
    <div
      className={`fixed w-[300px] left-0 transition-transform transform md:translate-x-0 ${
        sideBar ? '' : '-translate-x-full'
      } h-screen  md:relative md:flex-1 bg-primary text-white p-4`}
    >
      <div className="relative mb-8">
        <h4 className="text-center font-bold tracking-wider uppercase bg-red-700 rounded-4xl">
          News Aggretator
        </h4>
        <button
          className="w-[50px] h-[50px] absolute right-[-80px] top-0 bottom-0 m-auto flex items-center justify-center rounded border border-primary md:hidden cursor-pointer"
          onClick={() => {
            setSideBarOpen(!sideBar);
          }}
        >
          <span className="w-8/12 h-[3px] bg-white inline-block relative before:content-[''] before:absolute before:left-0 before:bg-white before:top-[-10px] before:w-full before:h-full after:content-[''] after:absolute after:left-0 after:bg-white after:bottom-[-10px] after:w-full after:h-full"></span>
        </button>
      </div>
      {/* filters */}
      <div>
        <h3 className="text-lg mb-4">Filters</h3>
        <Filter
          title="Select Category"
          type="select"
          options={['Technology', 'Business', 'Health', 'Sports']}
          value={'category'}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
};

export default LeftMenu;
