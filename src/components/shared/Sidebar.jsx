import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants';
import { HiUserCircle } from "react-icons/hi";

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:no-underline rounded-sm text-base';

const Sidebar = ({ avatar, firstName, lastName, aboutMeLink }) => {
  const { pathname } = useLocation();

  return (
    <div className="w-50 p-3 flex flex-col mt-[-92px] h-screen">
      <div className="h-20 flex items-center gap-2 px-2 py-3 bg-white shadow-lg rounded-lg text-black">
        <HiUserCircle className="text-black text-6xl"/>
        <div>
          <p>Иван Иванов</p>
          <Link to="/profile" className="text-amber-400">
            О себе
          </Link>
        </div>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-1.5 ">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-1 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Выйти
        </div>
      </div>
    </div>
  );
};

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        'text-xl',
        'duration-700',
        'transition-all',
        'hover:bg-white hover:shadow-lg hover:rounded-lg hover:text-black',
        pathname === link.path ? 'bg-white shadow-lg rounded-lg text-black font-medium' : 'text-neutral-400',
        linkClass
      )}
    >
      <span className={classNames(
        'text-xl',
        'duration-300',
        pathname === link.path ? 'text-amber-400' : 'text-neutral-400',
      )}>
        {React.cloneElement(link.icon, {})}
      </span>
      {link.label}
    </Link>
  );
}

export default Sidebar;
