import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Edit() {

    const [id, setEmployeeId] = useState(0)
    const [name, setEmployeeName] = useState('')
    const [age, setEmployeeAge] = useState('')
    const [email, setEmployeeEmail] = useState('')

    const navigate=useNavigate();

    useEffect(() => {
      /**now we will get data from local storage of our browser and will save in the states above are written */
      setEmployeeId(localStorage.getItem('id'));
      setEmployeeName(localStorage.getItem('name'));
      setEmployeeAge(localStorage.getItem('age'));
      setEmployeeEmail(localStorage.getItem('email'));
    
      
    }, [])

    const PostUpdatedData=(e)=>{
        e.preventDefault();
        axios.put(`https://642167e986992901b2b293d1.mockapi.io/Employee/${id}`,{
            /** E_name , E_age ,E_email are the keys created in api 
             * we created these in Create component
            */
            E_name:name,
            E_age:age,
            E_email:email
        }).then(()=>{
            navigate('/');
        }).catch((err)=>{
            console.log(err);
        
        })
        
    }
    
  return (
    <> 
    <div className='container bg-secondary'>
    <div className='row'>
    
    <div className='col-md-6 container mt-20 '  >
    <div className='text-light p-4 text-center '>
      <h3>Update Data Form</h3>  
    </div>
    
    <div className="mb-2 mt-2">
        {/* / is route name which is defined in App.js */}
        <Link to='/'> 
        <button className="btn btn-primary">View Data</button>
        </Link>
    </div>
    <form onSubmit={PostUpdatedData}>
        <div className='form-group ' >
        <label className='text-light'> Enter Name :</label>
        <input type='text' value={name} onChange={(e)=>{setEmployeeName(e.target.value)}} placeholder='Enter your name' className='form-control' ></input>

        </div>
        <div className='form-group'>
        <label className='text-light'> Enter Age :</label>
        <input type='number' value={age} onChange={(e)=>{setEmployeeAge(e.target.value)}} placeholder='Enter your age' className='form-control' ></input>

        </div>
        <div className='form-group'>
        <label className='text-light'> Enter Email :</label>
        <input type='email' value={email} onChange={(e)=>{setEmployeeEmail(e.target.value)}} placeholder='Enter your Email' className='form-control' ></input>

        </div>
        <br/>
        <div className='d-grid'>
        <input type='submit' value='Update' className='btn btn-dark'></input>
        </div>
        
    </form>

    </div>

    </div>

    </div>
    </>
  )
}

export default Edit;