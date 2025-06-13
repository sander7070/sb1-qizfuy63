import React, { useState } from 'react';
import { Search, Filter, Plus, Mail, Phone, MapPin, Tag, FileText, Calendar, PhoneCall, Folder } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Clients: React.FC = () => {
  const { t } = useTranslation();
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [activeDetailTab, setActiveDetailTab] = useState('info');

  const clients = [
    {
      id: 1,
      name: 'Acme Corporation',
      email: 'contact@acmecorp.com',
      status: 'Active',
      sector: 'Technology',
      risk: 'Low',
      owner: 'John Smith',
      location: 'New York, NY',
      phone: '+1 (555) 123-4567',
      tags: ['Enterprise', 'VIP'],
      revenue: '$500K',
      deals: 12,
      lastContact: '2 days ago'
    },
    {
      id: 2,
      name: 'TechStart Inc',
      email: 'hello@techstart.io',
      status: 'Prospect',
      sector: 'Startup',
      risk: 'Medium',
      owner: 'Sarah Johnson',
      location: 'San Francisco, CA',
      phone: '+1 (555) 987-6543',
      tags: ['Startup', 'AI'],
      revenue: '$50K',
      deals: 3,
      lastContact: '1 week ago'
    },
    {
      id: 3,
      name: 'Global Industries',
      email: 'info@globalind.com',
      status: 'Active',
      sector: 'Manufacturing',
      risk: 'High',
      owner: 'Mike Chen',
      location: 'Chicago, IL',
      phone: '+1 (555) 456-7890',
      tags: ['Manufacturing', 'International'],
      revenue: '$1.2M',
      deals: 8,
      lastContact: '3 days ago'
    }
  ];

  const detailTabs = [
    { id: 'info', label: 'Info', icon: FileText },
    { id: 'contacts', label: 'Contacts', icon: Mail },
    { id: 'mails', label: 'Mails', icon: Mail },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'tasks', label: 'Tasks', icon: Calendar },
    { id: 'calls', label: 'Calls', icon: PhoneCall },
    { id: 'files', label: 'Files', icon: Folder }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Prospect': return 'bg-blue-100 text-blue-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedClient) {
    const client = clients.find(c => c.id === selectedClient);
    if (!client) return null;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedClient(null)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← {t('back_to_clients')}
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus size={16} />
            <span>New Deal</span>
          </button>
        </div>

        {/* Client Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">{client.name.charAt(0)}</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(client.status)}`}>
                    {client.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(client.risk)}`}>
                    {client.risk} Risk
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Mail size={14} />
                    <span>{client.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone size={14} />
                    <span>{client.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{client.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{client.revenue}</p>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-sm text-gray-600 mt-1">{client.deals} deals</p>
            </div>
          </div>
        </div>

        {/* Detail Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {detailTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDetailTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                      activeDetailTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="p-6">
            <div className="text-gray-600">
              Content for {activeDetailTab} tab would be displayed here with relevant information, forms, and data.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('clients')}</h1>
          <p className="text-gray-600">Manage your client relationships and data</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus size={16} />
          <span>Add Client</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search clients..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Sectors</option>
            <option>Technology</option>
            <option>Manufacturing</option>
            <option>Healthcare</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Risk Levels</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Owners</option>
            <option>John Smith</option>
            <option>Sarah Johnson</option>
            <option>Mike Chen</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div 
            key={client.id} 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedClient(client.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">{client.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.sector}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                {client.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail size={14} />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone size={14} />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin size={14} />
                <span>{client.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {client.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full flex items-center space-x-1">
                  <Tag size={10} />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">{client.revenue}</p>
                <p className="text-xs text-gray-600">Revenue</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{client.deals}</p>
                <p className="text-xs text-gray-600">Deals</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Last contact</p>
                <p className="text-sm font-medium text-gray-900">{client.lastContact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;