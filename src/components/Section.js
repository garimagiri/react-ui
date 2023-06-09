import React from "react";

function Section() {
  return (
    <div class="mt-10">
      <div class="md:text-7xl text-5xl">
        <span class="font-thin">This is a</span>{" "}
        <span class="text-color font-bold">Sample</span>
      </div>
      <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="center-content my-6 mb-8">
        <div class="bg-black md:w-5/12 relative py-5 w-3/4">
          <div class="absolute top-2 right-2 w-full">
            <div class="relative">
              <input
                type="email"
                class=" border border-gray-300 text-gray-900 text-sm  block w-full p-2.5  dark:border-gray-900 dark:placeholder-gray-400"
                placeholder="Enter email ID"
                required
              />
              <button
                type="submit"
                class="border border-gray-900 text-white absolute right-0 bottom-0  btn-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-10 py-2.5"
              >
                Register now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center md:mb-[5rem] mb-[12rem]">
        <img src="../images/google.png" class="h-8 mr-3" alt="Logo" />
        <img src="../images/disney.png" class="h-8 mr-3" alt="Logo" />
        <img src="../images/microsoft.png" class="h-8 mr-3" alt="Logo" />
        <img src="../images/sony.png" class="h-8 mr-3" alt="Logo" />
      </div>
      <div class="flex items-center justify-center z-40">
        <img src="../images/img_left.png" class="md:h-64 h-36 mr-10" alt="Logo" />
        <img src="../images/img_right.png" class="md:h-64 h-36" alt="Logo" />
      </div>
    </div>
  );
}

export default Section;
