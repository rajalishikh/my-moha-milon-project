import { use } from "react";
import { Link } from "react-router";
import AuthContext from "../../AuthContext/AuthContext";

const Register = () => {
  const useContext=use (AuthContext)
  console.log(useContext)

    return (
        <div>
            <h2>Welcome to the Register page </h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-2">
      <div className="card-body">
        <form   className="fieldset">
         
          <label className="label">Name</label>
          <input name="name" type="name" className="input" placeholder="Name" />
           <label className="label">Email</label>
           <input name="email" type="email" className="input" placeholder="Email" /> 
           <label className="label">Phone Number </label>
           <input name="phone_number" type="tel" className="input" placeholder="Phone_Number"/>
           <label className="label">Password</label>
           <input type="password" className="input" placeholder="Password" />
           <label className="label">Country Name </label>
           <input type="text" className="input" placeholder="Country name" />
          <div className=" font-medium text-green-500"> You have All ready account ? <Link to={'/login'} ><span className="link link-hover text-red-500">Login</span></Link></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Register;