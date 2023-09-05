import React from "react";

const Signup = ({ onSignupClick }) => {
  const handleSignupClick = () => {
    onSignupClick();
  }

  return <div>
  <button onClick={handleSignupClick} className="bg-black text-white w-20 rounded-full m-4">Signup</button>
  </div>
}

export default Signup;