import React, { useState, useEffect } from 'react';
import { X, Heart, Phone, ExternalLink } from 'lucide-react';

export function PopupTab() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if the popup has been closed before
    const hasBeenClosed = localStorage.getItem('popupClosed');
    
    if (!hasBeenClosed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000); // 30 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Store the closed state in localStorage
    localStorage.setItem('popupClosed', 'true');
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Animation duration
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div 
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-[80%] h-[80%] relative transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="h-full flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&auto=format&fit=crop&q=80"
              alt="Supportive hands reaching out"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                You're Not Alone
              </h2>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                  Need Support?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Help is available 24/7. You deserve support on your journey to recovery.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://www.samhsa.gov/find-help/national-helpline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-purple-50 dark:bg-gray-700/50 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                        SAMHSA's National Helpline
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        1-800-662-4357 (HELP)
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-purple-400 dark:text-purple-500 ml-auto" />
                  </div>
                </a>

                <div className="p-4 bg-purple-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                      You Matter
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Recovery is possible. Every step forward counts, no matter how small. 
                    Trained counselors are ready to listen without judgment and help you 
                    find the support you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}