 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
  

 const Signup = () => {
 
 
    


    const [registerError, setRegisterError] = useState('');
   const [success, setSuccess] = useState('');
   const handleSignUp = e =>{
    e.preventDefault()
     const name = e.target.name.value;
     const photo = e.target.photo.value;
     const email = e.target.email.value;
     const password = e.target.password.value;
     const accepted = e.target.terms.checked;
    const user = {name, photo, email, password, accepted};
     console.log(user);


      //  password at least 6 characters
    if(password.length < 6){
      setRegisterError('password should be at least 6 characters or longer');
      return;
    }
    else if(!/[a-z]/.test(password)){
      setRegisterError('your password should have at least one lowar case characters.');
      return;
    }
    else if(!accepted){
      setRegisterError('please accepted our terms and conditions!');
      return;
    }
       
    //  reset user 
    setRegisterError('');
    setSuccess('');
    
   // create user
   createUserWithEmailAndPassword (auth, email, password)
     
   .then(result =>{
     console.log(result.user);
     setSuccess('User created successfully');
   })
   .catch(error => { 
     console.error(error);
     setRegisterError(error.message)
   })

  }

  return (
    <div>
     <div className='justify-self-end p-10 '>
        
        <Link to ='/' className="hover:bg-blue-400 hover:text-white mr-4">Home</Link> 
       
       <Link to ='/buy' className="hover:bg-blue-400 hover:text-white mr-4">Buy</Link> 
       
       <Link to ='/sell' className="hover:bg-blue-400 hover:text-white mr-4">Sell</Link> 
       
       <Link to ='/editorial' className="hover:bg-blue-400 hover:text-white mr-4">Editorial</Link> 
       
       <Link to ='/paintings' className="hover:bg-blue-400 hover:text-white mr-4">Paintings</Link> 
       
       <Link to ='/login' className="hover:bg-blue-400 hover:text-white bg-white p-2 rounded-lg text-black mr-4">Log In</Link> 
       
       <Link to ='/signup' className="hover:bg-blue-400 hover:text-white bg-black rounded-lg">Sign Up</Link> 
       
               </div>


    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
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
                <button className="btn btn-primary">Login</button>

                <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className='ml-2 mb-4' htmlFor='terms'>Accept our <a>Terms and Conditions</a></label>
            </div>
              </div>

              {/* terms and conditions */}
            
            </form>
            {
              registerError && <p className='text-red-700'>{registerError}</p>
            }
            {
              success && <p className='text-green-600'>{success}</p>
            }
            <p>You have already an account? please <Link to="/login">
            <button type='submit' className="btn btn-link">Login</button>
            </Link>
            </p>
            
          </div>
        </div>
      </div>
    </div>
   
      
  );
};

export default Signup;