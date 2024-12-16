import { useDebugValue, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { login } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/login", {
        email,
        password,
      });
      const data = await res.data;
      toast.success(data.message);
      dispatch(login(data));
      navigate(`/${data.role}/profile`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="mt-4 sm:mt-10 min-h-screen w-full flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-3xl px-5 py-6 w-full sm:w-[30vw]">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            {/* for email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-800 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-md rounded-md w-full px-3 py-2 border border-gray-500 outline-none focus:border-black "
              />
            </div>

            {/* for password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-800 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md rounded-md w-full px-3 py-2 border border-gray-500 outline-none focus:border-black "
              />
            </div>

            {/* Login with account */}
            <div className="flex justify-end mb-3">
              <Link
                to="/signup"
                className="my-1 text-sm text-black hover:scale-x-105 transition duration-200"
              >
                Create a New Account
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-950"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
