import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import SigninInput from './components/SigninInput'
import SignupInput  from './components/SignupInput'

function App() {
  const [isSignin, setIsSignin] = useState(true); // Initialize state for deciding which input to show

  const toggleSignin = () => {
    setIsSignin(true);
  };

  const toggleSignup = () => {
    setIsSignin(false);
  };

  return (
    <>
    <div className='flex flex-row-reverse '>
      <Signin onSigninClick={toggleSignin} />
      <Signup onSignupClick={toggleSignup} />
    </div>
      {isSignin ? <SigninInput /> : <SignupInput />}
    </>
  )
}

export default App
