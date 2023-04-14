import React from "react";

function Header() {
  return (
    <nav class="md:px-10 pb-10 pt-5">
      <div class="max-w-screen-xl flex md:flex-wrap items-center justify-between mx-auto p-5">
        <div class="flex items-center">
          <a href="https://www.freelogodesign.org/">
            <img src="../images/logo.png" class="h-8 mr-3" alt="Logo" />
          </a>
          <div class="ms-8">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3  pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class=" border-2 border-gray-900 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10  p-2 pr-10   dark:border-gray-900 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for anything"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only"></span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <a
                href="https://www.freelogodesign.org/"
                class="block  text-gray-900 mr-10 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Random
              </a>
            </li>
            <li>
              <a
                href="https://www.freelogodesign.org/"
                class="block text-gray-900 mr-10 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Random
              </a>
            </li>

            <li>
              <div class="block pb-2 pl-3 pr-4 text-white relative w-full">
                <div class="bg-black block py-2 px-10 w-full">
                  <button class="btn-color border border-gray-900 absolute bottom-0 left-0 block py-2 px-10 text-white">
                    <a href="https://www.freelogodesign.org/" class="">
                      Login
                    </a>
                  </button>
                  login
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
