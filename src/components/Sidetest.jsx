import React, { useState } from 'react';
import DataHealth from './DataHealth';
import DataNutrition from './DataNutrition';

export default function Sidetest() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { label: 'Образ жизни' },
    { label: 'Питание' },
    { label: 'Физиология' },
    { label: 'Среда и социальный статус' },
    { label: 'События жизни' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        {tabsData.map((tab, index) => (
          <BoxWrapper
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            <div className="">
              <span className={`text-base font-light ${index === activeTab ? 'text-black' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </div>
          </BoxWrapper>
        ))}
      </div>

      {activeTab === 0 && <DataHealth />}
      {activeTab === 1 && <DataNutrition />}
    </div>
  );
}

function BoxWrapper({ children, onClick, isActive }) {
  const baseClasses = 'p-2 pl-4 pr-4 flex-2 border-b-2 border-gray-300 flex items-center cursor-pointer';
  const activeClasses = 'bg-white text-gray-900 border-b-2 border-amber-300 rounded-t-lg';

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
