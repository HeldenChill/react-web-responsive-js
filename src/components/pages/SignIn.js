import React from 'react'
import Button from '../Button'
import './SignIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { checkValidAccount,selectorCheckAccount } from '../../features/CheckAccount'

const SignIn = () => {
	const dispatch = useDispatch()
	const validState = useSelector(selectorCheckAccount);
  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
				<form className="login100-form validate-form flex-sb flex-w">
					<span className="login100-form-title p-b-32">
						Account Login
					</span>

					<span className="txt1 p-b-11">
						Username
					</span>
					<div className="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
						<input className="input100" type="text" name="username" />
						<span className="focus-input100"></span>
					</div>
					
					<span className="txt1 p-b-11">
						Password
					</span>
					<div className="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
						<span className="btn-show-pass">
							<i className="fa fa-eye"></i>
						</span>
						<input className="input100" type="password" name="pass" />
						<span className="focus-input100"></span>
					</div>
					
					<div className="flex-sb-m w-full p-b-48">
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
							<label className="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="#" className="txt3">
								Forgot Password?
							</a>
						</div>
					</div>
                    <Button 
					buttonStyle='btn--outline' 
					buttonSize='btn--large' 
					buttonColor='white' 
					onClick={() => 
						{
							dispatch(checkValidAccount({
								username: 'admin',
								password: 'Hung'
							}));
							console.log(validState)
						}
					}
					> 
						{(String)(validState.isValid)}
					</Button>
				</form>
			</div>
		</div>
	</div>
  )
}

export default SignIn