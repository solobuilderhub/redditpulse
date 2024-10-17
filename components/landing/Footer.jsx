// components/landing/Footer.jsx
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-orange-500 flex items-center">
              Redditpulse
            </h3>
            <p className="text-gray-400 mb-2">Elevate your Reddit presence</p>
            <p className="text-sm text-gray-500">A product of solobuilderhub</p>
          </div>
          <div className="flex space-x-12">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange-500">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-orange-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange-500">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  {/* <Link
                    href="/terms"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Terms of Service
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-sm mb-4 md:mb-0">
            &copy; 2024 Redditpulse. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="mailto:solobuilderhub@gmail.com"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              <Mail size={20} className="mr-2" />
              <span className="text-sm">Contact Us</span>
            </a>
            <a
              href="https://solobuilderhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              <ExternalLink size={20} className="mr-2" />
              <span className="text-sm">solobuilderhub.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
