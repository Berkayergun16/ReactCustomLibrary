import React from 'react'
import Button from '../Components/Button'
import Uniforms from '../Components/Uniforms/Uniforms';
import {Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';

//? Tables
import Table from '../Components/Table/Basic/Table';
import FooterTable from '../Components/Table/Footers/FooterTable';
import SortingTable from '../Components/Table/Sorting/SortingTable';
import FilteringTable from '../Components/Table/Filtering/FilteringTable';


const Dashboard = () => {
    const title = "Custom Button";

  return (
    
    <div className="App">
      <Navbar/>


      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/button" element={<Button title={title} />} />
        <Route path="/uniform" element={<Uniforms/>} />
        <Route path="/basic-table" element={<Table/>} />
        <Route path="/footer-table" element={<FooterTable/>} />
        <Route path="/sorting-table" element={<SortingTable/>} />
        <Route path="/filtering-table" element={<FilteringTable/>} />
      </Routes>
    </div>



  )
}

export default Dashboard