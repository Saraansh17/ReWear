import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Heart, MessageCircle, ArrowUpDown } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock data for clothing items
  const clothingItems = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      category: 'Outerwear',
      size: 'M',
      condition: 'Excellent',
      image: 'https://images.pexels.com/photos/6046499/pexels-photo-6046499.jpeg?auto=compress&cs=tinysrgb&w=400',
      owner: 'Sarah M.',
      available: true,
      type: 'Swap'
    },
    {
      id: 2,
      title: 'Summer Floral Dress',
      category: 'Dresses',
      size: 'S',
      condition: 'Good',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
      owner: 'Emma K.',
      available: true,
      type: 'Free'
    },
    {
      id: 3,
      title: 'Designer Blazer',
      category: 'Formal',
      size: 'L',
      condition: 'Like New',
      image: 'https://images.pexels.com/photos/5885571/pexels-photo-5885571.jpeg?auto=compress&cs=tinysrgb&w=400',
      owner: 'Mike D.',
      available: true,
      type: 'Swap'
    },
    {
      id: 4,
      title: 'Casual T-Shirt',
      category: 'Tops',
      size: 'M',
      condition: 'Good',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      owner: 'Alex R.',
      available: false,
      type: 'Free'
    },
    {
      id: 5,
      title: 'Winter Wool Coat',
      category: 'Outerwear',
      size: 'L',
      condition: 'Excellent',
      image: 'https://images.pexels.com/photos/7679618/pexels-photo-7679618.jpeg?auto=compress&cs=tinysrgb&w=400',
      owner: 'Lisa P.',
      available: true,
      type: 'Swap'
    },
    {
      id: 6,
      title: 'Athletic Wear Set',
      category: 'Activewear',
      size: 'S',
      condition: 'Good',
      image: 'https://images.pexels.com/photos/8923896/pexels-photo-8923896.jpeg?auto=compress&cs=tinysrgb&w=400',
      owner: 'Jordan T.',
      available: true,
      type: 'Free'
    }
  ];

  const filteredItems = clothingItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'all' || item.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Community Closet
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover amazing clothing items shared by your community
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for clothing items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="outerwear">Outerwear</option>
                <option value="dresses">Dresses</option>
                <option value="formal">Formal</option>
                <option value="tops">Tops</option>
                <option value="activewear">Activewear</option>
              </select>
              <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span className="hidden sm:block">Filter</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'Free' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {item.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-red-500" />
                  </button>
                </div>
                {!item.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
                      No Longer Available
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.category} • Size {item.size}
                  </span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {item.condition}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Shared by {item.owner}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <ArrowUpDown className="h-4 w-4" />
                    <span>Request</span>
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No items found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;