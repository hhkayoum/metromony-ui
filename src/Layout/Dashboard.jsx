import { useContext } from "react";
import { FaGear, FaHouse, FaRectangleList } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import { TiThListOutline } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut().then();
  // };
  const [isAdmin] = useAdmin();

  const navLink = isAdmin ? (
    <>
      <li>
        <NavLink to="/dashboard/adminDashboard">
          <FaHouse /> My Profile
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/dashboard/myProfile">
          <MdAddToPhotos /> myProfile
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/dashboard/approvedPremium">
          <MdAddToPhotos /> Approved Premium Member
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/approvedContactReq">
          <MdAddToPhotos /> Approved Contact Request
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageUsers">
          <FaGear /> Manage Users
        </NavLink>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/dashboard/myProfile">
          <FaHouse /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/editBiodata">
          <FaRectangleList /> Edit Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/favouritesBiodata">
          <TiThListOutline /> My Favourites Biodata
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myContactReq">
          <TiThListOutline /> My Contact Request
        </NavLink>
      </li>
    </>
  );

  const mainSiteLinks = (
    <>
      <li>
        <NavLink to="/">
          <FaHouse /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/biodatas">
          <RiMenuSearchFill /> Biodata
        </NavLink>
      </li>
      {/* <li>
        <button onClick={handleLogOut}>
          <MdOutlineLogout /> Logout
        </button>
      </li> */}
    </>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-64 min-h-screen bg-gray-200 py-10 px-5 shadow-sm hidden lg:block">
        <div className="flex items-center bg-white rounded-3xl shadow-sm mb-8">
          <label className="btn btn-ghost btn-circle avatar m-1">
            <div className="w-14 rounded-full ">
              {user && (
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  className="w-full object-cover"
                />
              )}
            </div>
          </label>
          <span className="ml-2 text-sm font-semibold">
            {user?.displayName}
          </span>
        </div>
        <ul className="menu gap-4">{navLink}</ul>

        {/* Shared Navlinks */}
        <div className="divider my-10">Main Site</div>

        <ul className="menu">{mainSiteLinks}</ul>
      </div>

      {/* for Mobile and tablet */}

      <nav className="bg-white border-gray-200 dark:bg-gray-900 lg:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>

            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex-1 md:p-10 bg-gray-100 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
