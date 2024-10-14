import React from 'react'
import { BarDasboardCharts, CustomActiveBar, LineDashboardCharts } from '../Charts/Charts'

export default function Home() {
  return (
    <div className=''>

<div className='w-[90%] mx-auto mt-12'>

<BarDasboardCharts/>
</div>
<div className='w-[90%] mx-auto mt-12'>

<LineDashboardCharts/>
</div>
     
    </div>
  )
}
