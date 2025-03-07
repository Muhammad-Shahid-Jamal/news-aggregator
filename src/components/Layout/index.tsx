import React, { JSX } from 'react';
import LeftMenu from '../LeftMenu';

type Props = {
  children: JSX.Element | JSX.Element[];
};
const Layout: React.FC<Props> = ({ children }) => {
  //   return <div>{children}</div>;
  return (
    <div className="font-lato md:flex">
      <LeftMenu />
      <div className="md:flex-1/2">
        <header className="p-4 bg-secondary">search</header>
        <main className="p-4 h-[calc(100vh-56px)] bg-lightgray overflow-scroll">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
