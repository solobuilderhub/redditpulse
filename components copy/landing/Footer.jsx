// components/landing/Footer.jsx
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className=" ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-1 text-orange-500">
              Redditpulse
            </h3>
            <p className="text-gray-400 text-sm">
              Elevate your Reddit presence
            </p>
          </div>
          <div className="flex space-x-8">
            <div>
              <h4 className="text-md font-semibold mb-2 text-orange-500">
                Explore
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-orange-500 transition-colors text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-orange-500 transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-orange-500 transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-2 text-orange-500">
                Legal
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-orange-500 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                {/* Removed empty list item to maintain minimalism */}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-800">
          <p className="text-xs mb-4 md:mb-0">
            &copy; 2024 Redditpulse. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:solobuilderhub@gmail.com"
              className="hover:text-orange-500 transition-colors flex items-center text-sm"
            >
              <Mail size={16} className="mr-1" />
              <span>Contact Us</span>
            </a>
            <a
              href="https://solobuilderhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center text-sm"
            >
              <ExternalLink size={16} className="mr-1" />
              <span>solobuilderhub.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
