import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { SiMicrogenetics } from 'react-icons/si';
import { HiOutlineLogout } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:no-underline rounded-sm text-base';

export default function Sidebar() {
  return (
    <div className="w-60 p-3 flex flex-col">
    <div className="flex items-center gap-2 px-1 py-3">
      <SiMicrogenetics fontSize={36} color= "black" />
      <span className="text-neutral-400 text-lg text-black ">Hippocrates</span>
    </div>
    <div className="py-8 flex flex-1 flex-col gap-1.5">
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
}

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
        {React.cloneElement(link.icon, {
        })}
      </span>
      {link.label}
    </Link>
  );
}
