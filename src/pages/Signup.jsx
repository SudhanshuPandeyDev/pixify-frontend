import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("buyer");

  const handleSinup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/signup", {
        username,
        email,
        password,
        accountType,
      });
      const data = await res.data;
      if (data.success) {
        setUsername("");
        setEmail("");
        setPassword("");
        setAccountType("");
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="mt-10 min-h-screen w-full flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-3xl px-5 py-6 w-full sm:w-[35vw]">
          <h1 className="text-2xl font-bold text-center mb-4">
            Let's Connect!
          </h1>
          <form onSubmit={handleSinup}>
            {/* for username */}
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block text-md font-medium text-gray-800 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="sudhanshu"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow-md rounded-md w-full px-3 py-2 border border-gray-500 outline-none focus:border-black "
              />
            </div>

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

            {/* for account selection */}
            <div className="mb-3">
              <label
                htmlFor="accountType"
                className="block text-md font-medium text-gray-800 mb-2"
              >
                Select Your Account Type
              </label>
              <select
                onChange={(e) => setAccountType(e.target.value)}
                className="shadow-md rounded-md w-full px-3 py-1 border border-gray-500 outline-none focus:border-black"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            {/* Login with account */}
            <div className="flex justify-end mb-3">
              <Link
                to="/login"
                className="my-1 text-sm text-black hover:scale-x-105 transition duration-200"
              >
                Log In With Account
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-950"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
