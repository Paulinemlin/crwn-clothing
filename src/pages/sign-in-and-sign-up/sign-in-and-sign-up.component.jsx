import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAnSignUp = () => (
    <div className='container mx-auto flex justify-between'>
        <SignIn /> 
        <SignUp /> 
    </div>
)

export default SignInAnSignUp