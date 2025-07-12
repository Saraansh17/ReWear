import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Recycle, Users, Heart, Shirt } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-green-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-blue-400/15 to-purple-400/15 rounded-full blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 15,
                  rotateX: 15,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-6 shadow-2xl shadow-green-500/30"
              >
                <Shirt className="h-10 w-10 text-white drop-shadow-lg" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 relative"
                style={{
                  textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                Re<span className="text-green-600">Wear</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              >
              Style for All,{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Waste for None.
              </span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Link
                to="/login"
                  className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              </motion.div>
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-white/10 rounded-xl backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              How ReWear Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a community of conscious consumers making sustainable fashion choices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shirt className="h-12 w-12" />,
                title: "Donate & Share",
                description: "Give your pre-loved clothes a second life by sharing them with your community"
              },
              {
                icon: <Recycle className="h-12 w-12" />,
                title: "Swap & Trade",
                description: "Exchange items with others to refresh your wardrobe sustainably"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Connect Locally",
                description: "Meet like-minded people in your area who share your values"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                  }}
                  className="text-green-600 dark:text-green-400 mb-4 flex justify-center"
                  style={{
                    transformStyle: "preserve-3d",
                    filter: "drop-shadow(0 4px 8px rgba(34, 197, 94, 0.3))",
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 overflow-hidden">
        {/* 3D Background Elements for CTA */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              rotate: [360, 180, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.2,
                rotateY: 15,
              }}
              style={{
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 8px 16px rgba(255,255,255,0.3))",
              }}
            >
              <Heart className="h-16 w-16 text-white mx-auto mb-6" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6" style={{ textShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of people creating a more sustainable future, one outfit at a time.
            </p>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Link
              to="/login"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/30"
            >
              Start Your Journey
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;