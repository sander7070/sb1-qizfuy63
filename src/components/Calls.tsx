import React, { useState } from 'react';
import { Phone, PhoneCall, Plus, Search, Filter, Clock, User, MessageSquare, Calendar, Play } from 'lucide-react';

const Calls: React.FC = () => {
  const [showNewCall, setShowNewCall] = useState(false);

  const calls = [
    {
      id: 1,
      contact: 'Sarah Johnson',
      company: 'Acme Corp',
      phone: '+1 (555) 123-4567',
      type: 'incoming',
      status: 'completed',
      duration: '15:32',
      date: '2024-01-12',
      time: '10:30 AM',
      notes: 'Discussed contract renewal terms. Client interested in expanding services. Follow-up scheduled for next week.',
      deal: 'Enterprise License',
      aiSummary: 'Client expressed strong interest in renewing contract with expanded features. Key points: budget approved, timeline flexible, decision maker on board.',
      recording: true
    },
    {
      id: 2,
      contact: 'Mike Chen',
      company: 'TechStart',
      phone: '+1 (555) 987-6543',
      type: 'outgoing',
      status: 'completed',
      duration: '8:45',
      date: '2024-01-12',
      time: '2:15 PM',
      notes: 'Follow-up call regarding proposal. Client has questions about implementation timeline.',
      deal: 'Consulting Services',
      aiSummary: 'Client needs clarification on project phases and resource allocation. Concerns about timeline overlap with internal projects.',
      recording: true
    },
    {
      id: 3,
      contact: 'Lisa Wang',
      company: 'Global Industries',
      phone: '+1 (555) 456-7890',
      type: 'incoming',
      status: 'missed',
      duration: '0:00',
      date: '2024-01-11',
      time: '4:45 PM',
      notes: 'Missed call - client tried to reach regarding urgent quote request.',
      deal: 'Software Package',
      aiSummary: null,
      recording: false
    },
    {
      id: 4,
      contact: 'John Davis',
      company: 'InnovateCorp',
      phone: '+1 (555) 321-0987',
      type: 'outgoing',
      status: 'completed',
      duration: '22:15',
      date: '2024-01-11',
      time: '11:00 AM',
      notes: 'Initial discovery call. Great potential for partnership. Client very engaged and interested in our solutions.',
      deal: 'Custom Solution',
      aiSummary: 'High-value prospect with clear pain points. Budget range confirmed, technical fit validated, next steps defined.',
      recording: true
    }
  ];

  const upcomingCalls = [
    {
      id: 5,
      contact: 'Emma Thompson',
      company: 'FutureTech',
      phone: '+1 (555) 654-3210',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'Demo Call',
      deal: 'Platform License'
    },
    {
      id: 6,
      contact: 'Robert Kim',
      company: 'DataFlow Inc',
      phone: '+1 (555) 789-0123',
      date: '2024-01-15',
      time: '3:30 PM',
      type: 'Follow-up',
      deal: 'Integration Services'
    }
  ];

  const getCallTypeIcon = (type: string) => {
    return type === 'incoming' ? 'text-green-600' : 'text-blue-600';
  };

  const getCallStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'missed': return 'bg-red-100 text-red-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calls</h1>
          <p className="text-gray-600">Manage your call history and schedule new calls</p>
        </div>
        <button 
          onClick={() => setShowNewCall(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus size={16} />
          <span>New Call</span>
        </button>
      </div>

      {/* Call Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Calls Today</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <PhoneCall size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Call Duration</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3h 24m</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock size={24} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Missed Calls</p>
              <p className="text-2xl font-bold text-red-600 mt-1">2</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Phone size={24} className="text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">5</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar size={24} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Call History */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Call History</h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search calls..."
                      className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Filter size={14} />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {calls.map((call) => (
                <div key={call.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        call.type === 'incoming' ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <Phone size={16} className={getCallTypeIcon(call.type)} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{call.contact}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full font-medium ${getCallStatusColor(call.status)}`}>
                            {call.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{call.company} • {call.phone}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>{call.date} at {call.time}</span>
                          {call.duration !== '0:00' && (
                            <>
                              <span>•</span>
                              <div className="flex items-center space-x-1">
                                <Clock size={12} />
                                <span>{call.duration}</span>
                              </div>
                            </>
                          )}
                          <span>•</span>
                          <span className="text-blue-600">{call.deal}</span>
                        </div>
                        {call.notes && (
                          <p className="text-sm text-gray-700 mt-2 bg-gray-50 p-2 rounded">
                            {call.notes}
                          </p>
                        )}
                        {call.aiSummary && (
                          <div className="mt-2 p-2 bg-blue-50 rounded">
                            <div className="flex items-center space-x-1 mb-1">
                              <MessageSquare size={12} className="text-blue-600" />
                              <span className="text-xs font-medium text-blue-800">AI Summary</span>
                            </div>
                            <p className="text-sm text-blue-700">{call.aiSummary}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {call.recording && (
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                          <Play size={14} />
                        </button>
                      )}
                      <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                        <Phone size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Calls */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Calls</h3>
            <div className="space-y-4">
              {upcomingCalls.map((call) => (
                <div key={call.id} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{call.contact}</h4>
                      <p className="text-sm text-gray-600">{call.company}</p>
                      <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                        <Calendar size={12} />
                        <span>{call.date} at {call.time}</span>
                      </div>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mt-2">
                        {call.type}
                      </span>
                    </div>
                    <button className="p-1 text-blue-600 hover:text-blue-800 transition-colors">
                      <Phone size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
              View All Scheduled
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Phone size={16} className="text-blue-600" />
                <span className="text-sm font-medium">Make a Call</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Calendar size={16} className="text-green-600" />
                <span className="text-sm font-medium">Schedule Call</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <User size={16} className="text-purple-600" />
                <span className="text-sm font-medium">Add Contact</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Call Modal */}
      {showNewCall && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Make New Call</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select contact...</option>
                    <option>Sarah Johnson - Acme Corp</option>
                    <option>Mike Chen - TechStart</option>
                    <option>Lisa Wang - Global Industries</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Link to Deal</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select deal...</option>
                    <option>Enterprise License</option>
                    <option>Consulting Services</option>
                    <option>Software Package</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={() => setShowNewCall(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Phone size={16} />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calls;