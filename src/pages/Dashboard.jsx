import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import Sidetest from '../components/Sidetest'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import PopularProducts from '../components/PopularProducts'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 pt-20>Здоровье</h1>
      <Sidetest/>
      {/* <DashboardStatsGrid /> */}
      <div className="flex flex-row gap-4 w-full">
        {/*<TransactionChart />*/}
        {/* <BuyerProfilePieChart /> */}
      </div>
      <div className="flex flex-row gap-4 w-full">
        {/*<RecentOrders />*/}
        {/*<PopularProducts />*/}
      </div>
    </div>
  )
}
