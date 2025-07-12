import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ArrowUpDown, Star, MapPin, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';

const ItemDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  // Mock data for the item
  const item = {
    id: 1,
    title: 'Vintage Denim Jacket',
    category: 'Outerwear',
    size: 'M',
    condition: 'Excellent',
    type: 'Swap',
    description: 'This beautiful vintage denim jacket has been a favorite in my wardrobe for years. It features classic styling with a comfortable fit and unique fading that gives it character. Perfect for layering and adds a cool vintage vibe to any outfit. I\'m looking to swap it for something similar in a different style or color.',
    images: [
      'https://images.pexels.com/photos/6046499/pexels-photo-6046499.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5885571/pexels-photo-5885571.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    owner: {
      name: 'Sarah Martinez',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.8,
      location: 'Downtown, 2.3 miles away',
      joinedDate: 'March 2023',
      totalShares: 23
    },
    postedDate: '3 days ago',
    available: true
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <img
                src={item.images[currentImageIndex]}
                alt={item.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {item.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </>
              )}

              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.type === 'Free' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {item.type}
                </span>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {item.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {item.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex 
                        ? 'border-green-500' 
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Item Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-lg text-gray-600 dark:text-gray-300">
                  {item.category}
                </span>
                <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                  Size {item.size}
                </span>
                <span className="text-lg text-gray-600 dark:text-gray-300">
                  {item.condition}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <Calendar className="h-4 w-4" />
                <span>Posted {item.postedDate}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContactModal(true)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <ArrowUpDown className="h-5 w-5" />
                  <span>Request Item</span>
                </motion.button>
                <button className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Owner Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Shared by
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  src={item.owner.avatar}
                  alt={item.owner.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.owner.name}
                  </h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{item.owner.rating}</span>
                    <span>•</span>
                    <span>{item.owner.totalShares} items shared</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.owner.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>Joined {item.owner.joinedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact {item.owner.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Send a message about "{item.title}"
            </p>
            <textarea
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white mb-4"
              rows={4}
              placeholder="Hi! I'm interested in your item..."
            />
            <div className="flex space-x-3">
              <button
                onClick={() => setShowContactModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                Send Message
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ItemDetail;