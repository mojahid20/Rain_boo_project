import React from 'react';

const Login = () => {
    return (
        <>
 <div class="hero min-h-screen  mt-10 ">
  <div class="hero-content flex-col w-1/2">
    
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
            <h1 className='text-center text-3xl mb-4 font-bold'>Plese Login</h1>
         
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
         
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
          <button class="btn btn-primary">Login</button>
       
        <small class="divider">OR</small>
        
          <button class="btn btn-outline-dark">Sign in With Google</button>
        
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;