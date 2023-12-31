import React from "react";

const SigninInput = () => {
  return <div>
    <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    {/* <code>{JSON.stringify(import.meta.env)}</code>
                    <h1>Bla Bla Bla</h1> */}
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign In</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account? 
                    {/* <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Sign Up here
                    </a>. */}
                    <a href="#signup" className="no-underline border-b border-blue text-blue">
  Sign Up
</a>.
                </div>
            </div>
        </div>
  </div>
}

export default SigninInput;