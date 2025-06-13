import React from 'react';
import { Search, Bell, Plus, User, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TopNavigation: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={t('search_placeholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus size={16} />
            <span>{t('new')}</span>
          </button>
          
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="text-gray-700 font-medium">John Doe</span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
          <div className="flex space-x-1">
            <button onClick={() => changeLang('nl')} className="px-2 text-sm text-gray-600 hover:text-gray-900">NL</button>
            <button onClick={() => changeLang('en')} className="px-2 text-sm text-gray-600 hover:text-gray-900">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;