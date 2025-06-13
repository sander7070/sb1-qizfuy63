import React from 'react';
import { TrendingUp, DollarSign, Calendar, Mail, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const kpiCards = [
    { title: 'Open Deals', value: '127', change: '+12%', icon: TrendingUp, color: 'blue' },
    { title: 'Closed Deals', value: '43', change: '+8%', icon: DollarSign, color: 'green' },
    { title: 'Avg. Deal Value', value: '$24.5K', change: '+15%', icon: DollarSign, color: 'purple' },
    { title: 'Revenue', value: '$1.2M', change: '+23%', icon: TrendingUp, color: 'orange' },
  ];

  const tasks = [
    { title: 'Follow up with Acme Corp', due: 'Today', priority: 'high', overdue: true },
    { title: 'Prepare proposal for TechStart', due: 'Tomorrow', priority: 'medium', overdue: false },
    { title: 'Call Johnson Industries', due: 'This Week', priority: 'low', overdue: false },
  ];

  const emails = [
    { from: 'sarah@acmecorp.com', subject: 'Re: Partnership Discussion', time: '2 min ago', unread: true },
    { from: 'mike@techstart.io', subject: 'Meeting Confirmation', time: '1 hour ago', unread: true },
    { from: 'lisa@johnson.com', subject: 'Quote Request', time: '3 hours ago', unread: false },
  ];

  const calls = [
    { name: 'Sarah Johnson', company: 'Acme Corp', time: '10:30 AM', type: 'incoming', duration: '15 min' },
    { name: 'Mike Chen', company: 'TechStart', time: '2:15 PM', type: 'outgoing', duration: '8 min' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-600 bg-blue-50',
      green: 'bg-green-500 text-green-600 bg-green-50',
      purple: 'bg-purple-500 text-purple-600 bg-purple-50',
      orange: 'bg-orange-500 text-orange-600 bg-orange-50',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard')}</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, index) => {
          const Icon = card.icon;
          const colorClasses = getColorClasses(card.color).split(' ');
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                  <p className="text-sm text-green-600 mt-1">{card.change}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${colorClasses[2]} flex items-center justify-center`}>
                  <Icon size={24} className={colorClasses[1]} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Task Summary</h3>
            <Calendar size={20} className="text-gray-500" />
          </div>
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.due}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {task.overdue && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Overdue</span>
                  )}
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Inbox Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Emails</h3>
            <Mail size={20} className="text-gray-500" />
          </div>
          <div className="space-y-3">
            {emails.map((email, index) => (
              <div key={index} className={`p-3 rounded-lg border ${email.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className={`font-medium ${email.unread ? 'text-blue-900' : 'text-gray-900'}`}>
                      {email.from}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{email.subject}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{email.time}</span>
                    {email.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Calls</h3>
          <Phone size={20} className="text-gray-500" />
        </div>
        <div className="space-y-3">
          {calls.map((call, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  call.type === 'incoming' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <Phone size={16} className={call.type === 'incoming' ? 'text-green-600' : 'text-blue-600'} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{call.name}</p>
                  <p className="text-sm text-gray-500">{call.company}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{call.time}</p>
                <p className="text-xs text-gray-500 flex items-center">
                  <Clock size={12} className="mr-1" />
                  {call.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;