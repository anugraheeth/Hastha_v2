import React from "react";
import logo from "../images/hlogo1.png"
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-sm border-t mt-8">
      <div className="container mx-auto px-6 py-8 flex flex-wrap justify-around gap-8">
        {/* 1st section logo */}
        <div className="flex flex-col justify-center max-w-sm text-center md:text-left ">
          <img src={logo}  className="ml-[-18px]"/>
          <p>
            <span className="text-orange-500 font-semibold">hasthadhi</span> is the official service portal of the Kidangoor Gram Panchayat,
             aimed at digitizing Kidangoor and making information readily accessible to its residents.
              This initiative is designed to empower the community with convenient access to 
              essential services and information at their fingertips.
          </p>
        </div>

        {/* 2nd section  downloads*/}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Download Mobile Apps</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-orange-600">
                hasthadhi Android App
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                hasthadhi iOS App
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd Information */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Information</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-orange-600">
                About the portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                hasthadhi Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* 4th  Sites */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Related Sites</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-orange-600">
                Government of Kerala
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Dashboard portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Document portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Noticeboard portal
              </a>
            </li>
          </ul>
        </div>

        {/* 5th Contact */}
        <div className="col-span-1 md:col-span-4 text-center mt-6 md:mt-0">
          <h3 className="font-semibold text-gray-800">Contact</h3>
          <p>
            For details,{" "}
            <a href="#" className="text-orange-600 hover:underline">
              contact develops
            </a>
          </p>
        </div>
      </div>
      <div className="border-t mt-6 text-center py-4 text-gray-600">
        <p>&copy; Copyrights @hasthadhi</p>
      </div>
    </footer>
  );
};

export default Footer;
