 
import { Link } from 'react-router-dom';

const login = () => {
  
  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    const user = { email, password, accepted};
    console.log(user);

  }
  return (
    
    <div>
    
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin}  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          


          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Login</button>

            <div>
        <input type="checkbox" name="terms" id="terms" />
        <label className='ml-2 mb-4' htmlFor='terms'>Accept our <a>Terms and Conditions</a></label>
        </div>
          </div>
        </form>
      
        <p>You have not already an account? please <Link to="/signup">
        <button type='submit' className="btn btn-link">Sign Up</button>
        </Link> </p>

        <button className='btn'>Goole Login</button>
      </div>
    </div>
  </div>
  </div>
  );
};

export default login;