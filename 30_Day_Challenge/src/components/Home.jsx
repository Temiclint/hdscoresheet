import React from 'react'
import axios from 'axios'
import Tableinfo from './Tableinfo';
import { useState, useEffect } from 'react';
import MainData from './MainData';
import DailyTask from './DailyTask';
import JoinSection from './JoinSection';
import Register from './Register';

const Home = () => {
  
  const [users, setUsers] = useState([]);

	useEffect (()=>{
		const fetchUsers = async () => {
			const response = await fetch('http://localhost:3000/api/Users/getAll');
			
			const users = (await response.json());

			// if (response.ok) {
			// setUsers(json)
			// }
			setUsers(users)
		
			};

			fetchUsers();
	}, []);
   console.log(user)
  return (
    <>
    <div>
      {users && users.map((user)=>(
        <Tableinfo key={user.id} user={user}/>
      )
      )}
      <MainData />
    <DailyTask />
    <JoinSection />
    <Register />
    </div>
    
    
    </>
  )
}

export default Home