import React from 'react'
import Tableinfo from '@/components/Tableinfo';
import { useState, useEffect } from 'react';
import MainData from '@/components/MainData';
import DailyTask from '@/components/DailyTask';
import JoinSection from '@/components/JoinSection';
import Register from '@/components/Register';

const Home = () => {
  

return (
<>
<div>
   
    <MainData />
    <Tableinfo />
    <DailyTask />
    <JoinSection />
    <Register />
    
  </div>
    
    </>
)
}

export default Home