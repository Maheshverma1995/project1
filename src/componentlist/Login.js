import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-4 p-5 shadow-sm border rounded-3">
                <h2 className="text-center mb-4 text-primary">Login Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-primary" {...register("email", { required: true })} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {errors.email && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control border border-primary" {...register("password", { required: true })} id="exampleInputPassword1" />
                        {errors.password && <span className='text-danger'>This field is required</span>}
                    </div>
                    <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={()=>{
                            navigate("/")
                        }}  >Login</button>
                    </div>
                </form>
                <div className="mt-3">
                    <p className="mb-0  text-center">Don't have an account? 
                        <button classNameName='btn btn-primary' onClick={() => {
                            navigate("registration");
                        }}>sign up</button></p>
                </div>
            </div>
        </div>
    );
}

export default Login

