// GetEmployee.js
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchEmployeeByName } from './employeeSlice';


export default function GetEmployee() {

const[name,setName]=useState('');
const dispatch=useDispatch();

   const handleChange=(event)=>
   {
    setName(event.target.value)
   }

   const handleSubmit=async ()=>
   {
    const emp=await dispatch(fetchEmployeeByName(name));
    console.log(emp.json());
   }

    return (
        <div>

<form onSubmit={handleSubmit}>
            <div>
                <input
                placeholder='Enter employee name'
                    type="text"
                    id="inputField"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}
