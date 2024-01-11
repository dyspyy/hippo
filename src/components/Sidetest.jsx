import React, { useState } from 'react';
import DataHealth from './DataHealth';

export default function DashboardStatsGrid() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { label: 'Образ жизни' },
    { label: 'Питание' },
    { label: 'Физиология' },
    { label: 'Лабораторные исследования' },
    { label: 'Опросники' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex mb-4">
        {tabsData.map((tab, index) => (
          <BoxWrapper
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            <div className="">
              <span className={`text-sm font-light ${index === activeTab ? 'text-gray-900' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </div>
          </BoxWrapper>
        ))}
      </div>

      {activeTab === 0 && <DataHealth />}
    </div>
  );
}

function BoxWrapper({ children, onClick, isActive }) {
  const baseClasses = 'p-4 flex-2 border-b-2 border-gray-300 flex items-center cursor-pointer';
  const activeClasses = 'bg-white text-gray-900 border-b-4 border-amber-300';

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : ''}`}
      onClick={onClick}
      role="button"
    >
      {children}
    </div>
  );
}
