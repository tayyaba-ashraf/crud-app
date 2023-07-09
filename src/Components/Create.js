// we will insert data into api from form which will be filled by user
// className are the classes of Bootsrtap

import axios from 'axios';
import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Create() {
  
  /*data from form will be captured in these state variables ,then from these data will send to api
  we can say that we will send data on server*/
  const [EmployeeName, setEmployeeName] = useState("");
  const [EmployeeAge, setEmployeeAge] = useState("");
  const [EmployeeEmail, setEmployeeEmail] = useState("");

  const SubmitData =(e)=>{
   //it will stop page from reloading ,when form is submitted
   e.preventDefault(); 
   axios.post('https://642167e986992901b2b293d1.mockapi.io/Employee',{
    
    E_name:EmployeeName,
    E_age:EmployeeAge,
    E_email:EmployeeEmail

    /*point 1**/   /**we send data to server in form of object means key-value pair form */
    /**we say that ,this formate is JSON  */

    /*point 2**/ /** when request using axios becomes successful then promised is returned named as then*/
    /**when promised is resolved ,then part is executed  */
    /**when promised is rejected ,catch part is executed  */
   }).then(()=>{
    navigate('/');
   }).catch((err)=>{
    console.log(err);

   })
   
  }

  /**hook function to navigate between pages */
  const navigate=useNavigate();

  return (
    <> 
    <div className='container bg-secondary'>
    <div className='row'>
    
    <div className='col-md-6 container mt-20 '  >
    <div className='text-light p-4 text-center '>
      <h3>Data Form</h3>  
    </div>
    
    <div className="mb-2 mt-2">
        {/* / is route name which is defined in App.js */}
        <Link to='/'> 
        <button className="btn btn-primary">View Data</button>
        </Link>
    </div>
    <form onSubmit={SubmitData}>
        <div className='form-group ' >
        <label className='text-light'> Enter Name :</label>
        <input type='text' placeholder='Enter your name' className='form-control' onChange={(e)=>{setEmployeeName(e.target.value)}}></input>

        </div>
        <div className='form-group'>
        <label className='text-light'> Enter Age :</label>
        <input type='number' placeholder='Enter your age' className='form-control' onChange={(e)=>{setEmployeeAge(e.target.value)}}></input>

        </div>
        <div className='form-group'>
        <label className='text-light'> Enter Email :</label>
        <input type='email' placeholder='Enter your Email' className='form-control' onChange={(e)=>{setEmployeeEmail(e.target.value)}}></input>

        </div>
        <br/>
        <div className='d-grid'>
        <input type='submit' value='Submit' className='btn btn-dark'></input>
        </div>
        
    </form>

    </div>

    </div>

    </div>
    </>
  )
}

export default Create;