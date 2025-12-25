import React from "react";
import {
  FaCarSide,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-10">
      <div className="mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <FaCarSide className="text-primary text-2xl" />
            <span>VehicleRent</span>
          </div>
          <p className="mt-3 text-sm opacity-80">
            Reliable vehicle rental service. Book cars and bikes easily with
            secure and fast experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Vehicles</li>
            <li className="hover:text-primary cursor-pointer">Dashboard</li>
            <li className="hover:text-primary cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer-title">Connect With Us</h3>
          <div className="flex gap-4 mt-2 text-xl">
            <a className="hover:text-primary" href="#">
              <FaFacebook />
            </a>
            <a className="hover:text-primary" href="#">
              <FaLinkedin />
            </a>
            <a className="hover:text-primary" href="#">
              <FaGithub />
            </a>
            <a className="hover:text-primary" href="#">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-neutral-content/10 text-sm">
        © {new Date().getFullYear()} VehicleRent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
