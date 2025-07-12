import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, MessageCircle, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyCloset: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');

  // Mock data for user's items
  const userItems = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      category: 'Outerwear',
      size: 'M',
      condition: 'Excellent',
      image: 'https://images.pexels.com/photos/6046499/pexels-photo-6046499.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Swap',
      status: 'active',
      views: 24,
      messages: 3,
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Summer Floral Dress',
      category: 'Dresses',
      size: 'S',
      condition: 'Good',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Free',
      status: 'active',
      views: 18,
      messages: 1,
      postedDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'Designer Blazer',
      category: 'Formal',
      size: 'L',
      condition: 'Like New',
      image: 'https://images.pexels.com/photos/5885571/pexels-photo-5885571.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Swap',
      status: 'inactive',
      views: 45,
      messages: 8,
      postedDate: '2024-01-08'
    }
  ];

  const filteredItems = userItems.filter(item => item.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              My Closet
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your shared clothing items
            </p>
          </div>
          <Link
            to="/add-item"
            className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add New Item</span>
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {userItems.filter(item => item.status === 'active').length}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Active Items</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {userItems.reduce((total, item) => total + item.views, 0)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Total Views</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {userItems.reduce((total, item) => total + item.messages, 0)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Total Messages</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg">
                <MessageCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-2 mb-8"
        >
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'active'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Active Items ({userItems.filter(item => item.status === 'active').length})
            </button>
            <button
              onClick={() => setActiveTab('inactive')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'inactive'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Inactive Items ({userItems.filter(item => item.status === 'inactive').length})
            </button>
          </div>
        </motion.div>

        {/* Items List */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-24 h-48 md:h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.category} • Size {item.size} • {item.condition}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === 'Free' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{item.messages} messages</span>
                    </div>
                    <span>Posted {new Date(item.postedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link
                    to={`/item/${item.id}`}
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    title="View Item"
                  >
                    <Eye className="h-5 w-5" />
                  </Link>
                  <button
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    title="Edit Item"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Delete Item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <MoreVertical className="h-5 w-5" />
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
              <Plus className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No {activeTab} items
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {activeTab === 'active' 
                ? "You don't have any active items. Share your first item with the community!"
                : "You don't have any inactive items."
              }
            </p>
            {activeTab === 'active' && (
              <Link
                to="/add-item"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Add Your First Item
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyCloset;