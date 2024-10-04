import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees=createAsyncThunk('/api/v2/getAll',async()=>
{
    const response=await axios.get('http://localhost:8090/api/v2/getAll');
    return response.data;
});

export const fetchEmployeeByName=createAsyncThunk('employee/getEmployee',async(employeeName)=>
{
    const response=await axios(`http://localhost:8090/api/v2/getByName/${employeeName}`);
    return response.data;
});


export const addEmployee = createAsyncThunk('employees/addEmployee', async (newEmployee) => {
    const response = await axios.post('http://localhost:8090/api/authentication/register', newEmployee); // Replace with your API endpoint
    return response.data;
  });

  export const deleteEmployees=createAsyncThunk('employee/deleteEmployee',async(employeeId)=>
{
    const response=await axios.delete(`http://localhost:8090/api/v2/deleteEmployee/${employeeId}`);
    return response.data;
});

const employeeSlice=createSlice(
    {
        name:'employees',
        initialState:
        {
            list:[],
            loading:false,
            error:null,
        },
        reducers:{},
       extraReducers:(builder)=>
       {
        builder.addCase(fetchEmployees.pending,(state)=>
        {
            state.loading=true;
        });
        builder.addCase(fetchEmployees.fulfilled,(state,action)=>
        {
            state.loading=false;
            state.list=action.payload;
        });

        builder.addCase(fetchEmployees.rejected,(state,action)=>
        {
            state.loading=false;
            state.error=action.payload;
        });

        builder.addCase(addEmployee.fulfilled, (state, action) => {
            state.list.push(action.payload);
          });
       }
    }
)
export default employeeSlice.reducer;