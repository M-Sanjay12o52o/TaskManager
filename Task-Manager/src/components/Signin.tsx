import React from "react";

const Signin = ({ onSigninClick }) => {
  const handleSigninClick = () => {
    onSigninClick();
  }

  return <div>
    <button onClick={handleSigninClick} className="bg-black text-white w-20 rounded-full m-4">Signin</button>
  </div>
}

export default Signin;