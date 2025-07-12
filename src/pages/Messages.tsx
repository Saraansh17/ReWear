import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Paperclip, MoreVertical, Star } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  // Mock data for conversations
  const conversations = [
    {
      id: 1,
      participant: {
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
        online: true
      },
      lastMessage: 'That sounds perfect! When would be a good time to meet?',
      timestamp: '2m ago',
      unread: true,
      item: {
        title: 'Vintage Denim Jacket',
        image: 'https://images.pexels.com/photos/6046499/pexels-photo-6046499.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      messages: [
        {
          id: 1,
          sender: 'Emma Wilson',
          content: 'Hi! I\'m interested in your vintage denim jacket. Is it still available?',
          timestamp: '10:30 AM',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Yes, it\'s still available! Are you looking to swap or just curious about it?',
          timestamp: '10:35 AM',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Emma Wilson',
          content: 'I was hoping to swap! I have a really nice leather jacket in similar condition. Would you like to see pictures?',
          timestamp: '10:38 AM',
          isOwn: false
        },
        {
          id: 4,
          sender: 'You',
          content: 'That sounds interesting! Yes, I\'d love to see some photos.',
          timestamp: '10:40 AM',
          isOwn: true
        },
        {
          id: 5,
          sender: 'Emma Wilson',
          content: 'That sounds perfect! When would be a good time to meet?',
          timestamp: '10:42 AM',
          isOwn: false
        }
      ]
    },
    {
      id: 2,
      participant: {
        name: 'Michael Chen',
        avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
        online: false
      },
      lastMessage: 'Thanks for the dress! My daughter loves it.',
      timestamp: '1h ago',
      unread: false,
      item: {
        title: 'Summer Floral Dress',
        image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      messages: [
        {
          id: 1,
          sender: 'Michael Chen',
          content: 'Hi! Is the summer dress still available? It would be perfect for my daughter.',
          timestamp: 'Yesterday 3:20 PM',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Yes, it\'s available! What size does she need?',
          timestamp: 'Yesterday 3:25 PM',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Michael Chen',
          content: 'Size S would be perfect. When can we arrange pickup?',
          timestamp: 'Yesterday 3:30 PM',
          isOwn: false
        },
        {
          id: 4,
          sender: 'You',
          content: 'Great! I\'m free tomorrow afternoon. Does 2 PM work for you?',
          timestamp: 'Yesterday 3:35 PM',
          isOwn: true
        },
        {
          id: 5,
          sender: 'Michael Chen',
          content: 'Thanks for the dress! My daughter loves it.',
          timestamp: '2:10 PM',
          isOwn: false
        }
      ]
    },
    {
      id: 3,
      participant: {
        name: 'Sarah Martinez',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
        online: true
      },
      lastMessage: 'I have a few blazers that might work. Let me send you some pics.',
      timestamp: '3h ago',
      unread: false,
      item: {
        title: 'Designer Blazer',
        image: 'https://images.pexels.com/photos/5885571/pexels-photo-5885571.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      messages: [
        {
          id: 1,
          sender: 'Sarah Martinez',
          content: 'Your blazer looks amazing! I\'d love to swap with something similar.',
          timestamp: '1:00 PM',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Thanks! What do you have in mind for the swap?',
          timestamp: '1:05 PM',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Sarah Martinez',
          content: 'I have a few blazers that might work. Let me send you some pics.',
          timestamp: '1:08 PM',
          isOwn: false
        }
      ]
    }
  ];

  const currentConversation = conversations[selectedConversation];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Messages
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with community members about clothing exchanges
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
          style={{ height: 'calc(100vh - 240px)' }}
        >
          <div className="flex h-full">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation, index) => (
                  <motion.div
                    key={conversation.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedConversation(index)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600 ${
                      selectedConversation === index ? 'bg-green-50 dark:bg-green-900/20' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={conversation.participant.avatar}
                          alt={conversation.participant.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.participant.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900 dark:text-white truncate">
                            {conversation.participant.name}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {conversation.timestamp}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-1">
                          <img
                            src={conversation.item.image}
                            alt={conversation.item.title}
                            className="w-6 h-6 rounded object-cover"
                          />
                          <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {conversation.item.title}
                          </span>
                        </div>
                        <p className={`text-sm truncate ${
                          conversation.unread 
                            ? 'text-gray-900 dark:text-white font-medium' 
                            : 'text-gray-600 dark:text-gray-300'
                        }`}>
                          {conversation.lastMessage}
                        </p>
                      </div>
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={currentConversation.participant.avatar}
                      alt={currentConversation.participant.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {currentConversation.participant.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <img
                          src={currentConversation.item.image}
                          alt={currentConversation.item.title}
                          className="w-5 h-5 rounded object-cover"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {currentConversation.item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <Star className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentConversation.messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-green-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={sendMessage}
                    className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;