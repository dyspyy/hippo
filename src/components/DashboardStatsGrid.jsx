import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';
import { TbBinaryTree } from 'react-icons/tb';

export default function DashboardStatsGrid() {
  return (
    <div className="rounded-full flex gap-4 bg-white">
      <BoxWrapper>
        <div className=" h-12 w-12 flex items-center justify-center">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light flex items-center">Риск заболеваний</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold"></strong>
            <span className="text-sm text-green-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className=" h-12 w-12 flex items-center justify-center">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light flex items-center">Питание</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold"></strong>
            <span className="text-sm text-green-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light flex items-center">Спорт</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold"></strong>
            <span className="text-sm text-red-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light flex items-center">Эффективность лекарств</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold"></strong>
            <span className="text-sm text-red-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 flex items-center">{children}</div>;
}
