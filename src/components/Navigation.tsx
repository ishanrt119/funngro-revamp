import { Link } from 'react-router-dom';
import { Menu, X, Briefcase, Users } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Funngro</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/hire-teens"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>For Companies</span>
            </Link>
            <Link
              to="/teen-jobs"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>For Teens</span>
            </Link>
            <Link
              to="/hire-teens#post-project"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Post a Project
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/hire-teens"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase className="w-4 h-4" />
              <span>For Companies</span>
            </Link>
            <Link
              to="/teen-jobs"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4" />
              <span>For Teens</span>
            </Link>
            <Link
              to="/hire-teens#post-project"
              className="block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Post a Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
