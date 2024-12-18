import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../../store/slices/authSlice";
import axios from "axios";
import { useEffect } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        console.warn("Refresh token not found. Logging out.");
        dispatch(logout());
        return;
      }

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/refresh`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      const data = res.data;
      if (data.accessToken) {
        dispatch(login(data));
      } else {
        console.warn("No access token returned. Logging out.");
        dispatch(logout());
      }
    } catch (error) {
      console.error("Error refreshing token:", error.response?.data || error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 1000 * 60 * 25); // Refresh every 25 minutes

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <nav
        className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-4 ${
          pathname === "/seller/profile" || pathname === "/buyer/profile"
            ? "hidden"
            : "fixed"
        } top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-50 bg-white`}
      >
        <div className="flex justify-between items-center">
          <img src="/compass-svgrepo-com.svg" alt="our logo" className="w-[35px] mx-2" />
          <Link to="/" className="font-semibold text-3xl">
            Pixify
          </Link>
        </div>

        <ul className="flex gap-5 text-lg font-semibold text-gray-600 ml-4 mr-6  sm:ml-0">
          <Link to="/about" className="hover:text-black cursor-pointer sm:p-2">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-black cursor-pointer sm:p-2"
          >
            Contact
          </Link>
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="hover:text-black cursor-pointer sm:p-2"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="hover:text-black cursor-pointer sm:p-2"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link
              to={`/${role}/profile`}
              className="hover:text-black cursor-pointer sm:p-2"
            >
              Profile
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
