import React from "react";

const Login: React.FC = () => {
  return (
    <div className="py-20 flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Log In Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="login-email" className="block text-gray-700 mb-2">
                Username or email address
              </label>
              <input
                type="text"
                id="login-email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="login-password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="login-password"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              Log In
            </button>
            <div className="text-right mt-4">
              <a href="#" className="text-gray-500 hover:underline">
                Lost Your Password?
              </a>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="register-email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="register-email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Your personal data will be used to support your experience throughout this website, to manage
              access to your account, and for other purposes described in our
              <a href="#" className="text-black underline ml-1">
                privacy policy
              </a>.
            </p>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
