import { use } from "react";
import { Link } from "react-router";
import AuthContext from "../../AuthContext/AuthContext";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const {login}=use(AuthContext)
  const notify = () => toast("Login is Succesfull");
  


  // login button 
    const handleLogin=(e)=>{
        e.preventDefault()
        
        const name =e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password)
        login(email,password)
        .then((userCredential) => {
          console.log(userCredential)
    
  })
  .catch((error) => {
    console.log(error)
  });
  notify()

    }

    // main box 
    return (
        <div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-2">
      <div className="card-body">
        <form  onSubmit={handleLogin} className="fieldset">
            <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Email" />
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div className=" font-medium text-green-500"> You are new User ? <Link to={'/Register'} ><span className="link link-hover text-red-500">Register</span></Link></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <ToastContainer></ToastContainer>
        </form>
      </div>
    </div>
  

            
        </div>
    );
};

export default Login;