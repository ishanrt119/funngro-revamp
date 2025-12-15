import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-white">Funngro</span>
            </Link>
            <p className="text-sm text-gray-400">
              Connecting talented teens with real business opportunities across India.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Companies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hire-teens" className="hover:text-blue-400 transition-colors">
                  Hire Teen Talent
                </Link>
              </li>
              <li>
                <Link to="/hire-teens#how-it-works" className="hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/hire-teens#use-cases" className="hover:text-blue-400 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/hire-teens#post-project" className="hover:text-blue-400 transition-colors">
                  Post a Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Teens</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/teen-jobs" className="hover:text-blue-400 transition-colors">
                  Find Work
                </Link>
              </li>
              <li>
                <Link to="/teen-jobs#how-to-start" className="hover:text-blue-400 transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link to="/teen-jobs#work-categories" className="hover:text-blue-400 transition-colors">
                  Work Categories
                </Link>
              </li>
              <li>
                <Link to="/teen-jobs#success-stories" className="hover:text-blue-400 transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@funngro.com" className="hover:text-blue-400 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              <a href="mailto:hello@funngro.com" className="hover:text-blue-400 transition-colors">
                hello@funngro.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Funngro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Safety Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
