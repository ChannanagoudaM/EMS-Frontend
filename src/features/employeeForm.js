// src/components/EmployeeForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeeSlice';
const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[role,setRole]=useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ name,email,role,password }));
    setName('');
  };
  return (
   <div style={{marginTop:'20px',border:'2px solid',height:'200px',width:'100%',display:'flex',justifyContent:'center'}}>
     <form onSubmit={handleSubmit}>
     <br />
     <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Doe"
        required
      />
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="abcd123@gmail.com"
        required
      />
      <br />
      <br />

      <input
        type="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="ROLE_USER"
        required
      />
      <br/>
      <br/>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Employee password"
        required
      />

      <br />
      <br />
      
      <button type="submit">Add Employee</button>
    </form>
   </div>
  );
};

export default EmployeeForm;
