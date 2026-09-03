import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Laptop, Menu, X, Search, ShoppingBag, User, Trash2 } from 'lucide-react';

import Home_page from './Frontend/Home/Home_page';
import Contact_page from './Frontend/Contact/Contact_page';
import Lenovo_page from './Frontend/Lenovo/Lenovo_page';
import Msi_page from './Frontend/Msi/Msi_page';
import Asus_page from './Frontend/Asus/Asus_page';
import Macbook_page from './Frontend/Macbook/Macbook_page';
import Hardware_page from './Frontend/Hardware/Hardware_page';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ASUS', path: '/Asus_page' },
  { name: 'MSI', path: '/Msi_page' },
  { name: 'LENOVO', path: '/Lenovo_page' },
  { name: 'MACBOOK', path: '/Macbook_page' },
  { name: 'HARDWARE', path: '/Hardware_page' },
  { name: 'CONTACT', path: '/Contact_page' },
];

// Mock Cart Data
const initialCart = [
  { id: 1, name: 'ASUS ROG Zephyrus G14', price: 1599, qty: 1 },
  { id: 2, name: 'Logitech MX Master 3S', price: 99, qty: 1 },
];

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cart, setCart] = useState(initialCart);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/Hardware_page?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
      setIsOpen(false);
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <nav className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${
        isDark
          ? 'bg-gray-900/80 border-b border-gray-800 text-white' 
          : 'bg-white/80 border-b border-gray-200 text-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent shrink-0">
              <Laptop className="w-6 h-6 text-indigo-500" />
              <span>TECHSTORE</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 ">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isActive 
                        ? 'text-indigo-500' 
                        : isDark ? 'hover:text-indigo-400' : 'hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-indigo-500/10 rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              
              {/* Desktop Search */}
              <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className={`w-40 lg:w-56 pl-9 pr-4 py-1.5 text-sm rounded-full border outline-none transition-all duration-300 focus:w-56 lg:focus:w-72 ${
                    isDark
                      ? 'bg-gray-800/80 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500'
                      : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                  }`}
                />
                <Search className="w-4 h-4 absolute left-3 text-gray-400" />
              </form>

              {/* Mobile Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-500/10 focus:outline-none"
                aria-label="Toggle Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Drawer Toggle */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-gray-500 focus:outline-none"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cart.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Profile Dropdown Toggle */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 rounded-full hover:bg-gray-500 focus:outline-none"
                  aria-label="User Menu"
                >
                  <User className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute right-0 mt-2 w-48 rounded-xl shadow-xl py-2 border z-50 ${
                        isDark ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-white border-gray-200 text-gray-800'
                      }`}
                    >
                      <div className="px-4 py-2 border-b border-gray-500/10">
                        <p className="text-xs text-gray-400">Signed in as</p>
                        <p className="text-sm font-semibold truncate">user@techstore.com</p>
                      </div>
                      <a href="#orders" className={`block px-4 py-2 text-sm hover:bg-indigo-500/10 hover:text-indigo-500`}>My Orders</a>
                      <a href="#wishlist" className={`block px-4 py-2 text-sm hover:bg-indigo-500/10 hover:text-indigo-500`}>Wishlist</a>
                      <button 
                        onClick={() => setIsProfileOpen(false)} 
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10"
                      >
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
                    : 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                }`}
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Expandable Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden pb-3"
              >
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className={`w-full pl-9 pr-4 py-2 text-sm rounded-full border outline-none ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500'
                        : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                    }`}
                    autoFocus
                  />
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`lg:hidden overflow-hidden border-t ${
                isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
              }`}
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-indigo-500/10 text-indigo-500'
                        : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Slide-over Shopping Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className={`w-screen max-w-md ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-xl flex flex-col`}
              >
                <div className="p-4 flex items-center justify-between border-b border-gray-500/10">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-indigo-500" /> Your Cart
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="p-1 rounded-md hover:bg-gray-500/10">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">Your cart is empty.</div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-500/10">
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-400">${item.price} x {item.qty}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="p-1 text-red-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="p-4 border-t border-gray-500/10 space-y-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-indigo-500">${cartTotal}</span>
                    </div>
                    <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavbarWrapper = (props) => {
  return <Navbar {...props} />;
};

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <BrowserRouter>
        <NavbarWrapper isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/Asus_page" element={<Asus_page />} />
            <Route path="/Msi_page" element={<Msi_page />} />
            <Route path="/Lenovo_page" element={<Lenovo_page />} />
            <Route path="/Macbook_page" element={<Macbook_page />} />
            <Route path="/Hardware_page" element={<Hardware_page />} />
            <Route path="/Contact_page" element={<Contact_page />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;