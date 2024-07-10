import React from 'react'
import { Route, Routes } from 'react-router-dom';
import DashBoard from '../pages/dashboard/dashBoard';
import Orders from '../pages/orders/Orders';


const AllRoutes = () => {
  return (
    
    <div style={{height:'100%'}}>
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/Orders' element={<Orders/>}/>
            <Route path='/Customers' element={<Orders/>}/>
            <Route path='/Inventory' element={<Orders/>}/>
            <Route path='/Conversations' element={<Orders/>}/>
            <Route path='/Settings' element={<Orders/>}/>
        </Routes>
    </div>
                
            
  )
}

export default AllRoutes;
