import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
        <div className="border-t border-gray-300 mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-20 md:gap-24 flex-col lg:flex-row text-gray-600">
          {/* Address Section */}
          <div className='flex gap-10 flex-col '>
            <h4 className='text-lg font-bold text-black' >Funiro</h4>
            <p className="text-sm leading-6">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h4 className="text-zinc-400 mb-5 md:mb-10">Links</h4>
            <ul className="space-y-3 md:space-y-6 text-black">
              <li><a href="#" className="hover:text-zinc-700">Home</a></li>
              <li><a href="#" className="hover:text-zinc-700">Shop</a></li>
              <li><a href="#" className="hover:text-zinc-700">About</a></li>
              <li><a href="#" className="hover:text-zinc-700">Contact</a></li>
            </ul>
          </div>
          {/* Help Section */}
          <div>
            <h4 className="text-zinc-400 mb-5 md:mb-10">Help</h4>
            <ul className="space-y-3 md:space-y-6 text-black">
              <li><a href="#" className="hover:text-zinc-700">Payment Options</a></li>
              <li><a href="#" className="hover:text-zinc-700">Returns</a></li>
              <li><a href="#" className="hover:text-zinc-700">Privacy Policies</a></li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div>
            <h4 className="text-zinc-400 mb-5 md:mb-10">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border-b border-black focus:outline-none  "
              />
              <button
                type="submit"
                className=" py-2 border-b text-black border-black"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>
        {/* Footer Bottom */}
        <p className="text-sm text-gray-500">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
