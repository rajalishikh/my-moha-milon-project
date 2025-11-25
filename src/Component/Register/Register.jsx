
const Register = () => {
    return (
        <div>
            <h2>Welcome to the Register page </h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-2">
      <div className="card-body">
        <fieldset className="fieldset">
         
          <label className="label">Name</label>
          <input name="name" type="name" className="input" placeholder="Name" />
           <label className="label">Email</label>
           <input name="email" type="email" className="input" placeholder="Email" /> 
            <label className="label">Phone Number </label>
           <input name="phone_number" type="number" className="input" placeholder="Phone_Number"/>
           <label className="label">Password</label>
           <input type="password" className="input" placeholder="Password" />
           <label className="label">Country Name </label>
           <input type="text" className="input" placeholder="Country name" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Register;