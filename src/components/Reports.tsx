import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Mail, Phone, Calendar, Filter, Download } from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedUser, setSelectedUser] = useState('all');

  const kpiData = [
    { title: 'Total Revenue', value: '$1,234,567', change: '+23%', trend: 'up' },
    { title: 'Deals Closed', value: '127', change: '+18%', trend: 'up' },
    { title: 'Conversion Rate', value: '24.5%', change: '+5%', trend: 'up' },
    { title: 'Avg Deal Size', value: '$9,723', change: '-2%', trend: 'down' }
  ];

  const teamPerformance = [
    { name: 'John Smith', deals: 23, revenue: '$345,678', conversionRate: '28%', calls: 156, emails: 89 },
    { name: 'Sarah Johnson', deals: 19, revenue: '$298,456', conversionRate: '25%', calls: 134, emails: 67 },
    { name: 'Mike Chen', deals: 17, revenue: '$267,890', conversionRate: '22%', calls: 145, emails: 78 },
    { name: 'Lisa Wang', deals: 15, revenue: '$198,765', conversionRate: '20%', calls: 121, emails: 56 }
  ];

  const dealsByStage = [
    { stage: 'Prospect', count: 45, value: '$1,234,567' },
    { stage: 'Quote', count: 23, value: '$678,901' },
    { stage: 'Negotiation', count: 12, value: '$456,789' },
    { stage: 'Won', count: 67, value: '$2,345,678' },
    { stage: 'Lost', count: 34, value: '$987,654' }
  ];

  const monthlyTrends = [
    { month: 'Jan', deals: 45, revenue: 234567 },
    { month: 'Feb', deals: 52, revenue: 278901 },
    { month: 'Mar', deals: 48, revenue: 256789 },
    { month: 'Apr', deals: 61, revenue: 345678 },
    { month: 'May', deals: 58, revenue: 312456 },
    { month: 'Jun', deals: 67, revenue: 389012 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Track performance and analyze business metrics</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Download size={16} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Team Member</label>
            <select 
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Team Members</option>
              <option value="john">John Smith</option>
              <option value="sarah">Sarah Johnson</option>
              <option value="mike">Mike Chen</option>
              <option value="lisa">Lisa Wang</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Sources</option>
              <option>Website</option>
              <option>Referral</option>
              <option>Cold Outreach</option>
              <option>Social Media</option>
            </select>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mt-6">
            <Filter size={16} />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp 
                    size={14} 
                    className={kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'} 
                  />
                  <span className={`text-sm ml-1 ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Rate Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Rate by Month</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlyTrends.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-blue-500 rounded-t-lg transition-all duration-300 hover:bg-blue-600"
                  style={{ height: `${(data.deals / 70) * 200}px` }}
                ></div>
                <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                <div className="text-xs font-medium text-gray-900">{data.deals}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Deal Duration Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Deal Duration</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {dealsByStage.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-green-500 rounded-t-lg transition-all duration-300 hover:bg-green-600"
                  style={{ height: `${(data.count / 70) * 200}px` }}
                ></div>
                <div className="text-xs text-gray-600 mt-2">{data.stage}</div>
                <div className="text-xs font-medium text-gray-900">{data.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deals Closed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Calls Made
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Emails Sent
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamPerformance.map((member, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users size={16} className="text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {member.deals}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {member.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {member.conversionRate}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center space-x-1">
                      <Phone size={14} className="text-gray-400" />
                      <span>{member.calls}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center space-x-1">
                      <Mail size={14} className="text-gray-400" />
                      <span>{member.emails}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Email Open Rate */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Open Rate</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Overall Open Rate</span>
              <span className="text-2xl font-bold text-gray-900">68.5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68.5%' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">1,234</p>
                <p className="text-sm text-gray-600">Emails Opened</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">1,802</p>
                <p className="text-sm text-gray-600">Total Sent</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pipeline Value</h3>
          <div className="space-y-3">
            {dealsByStage.slice(0, 4).map((stage, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-blue-500' :
                    index === 1 ? 'bg-yellow-500' :
                    index === 2 ? 'bg-orange-500' :
                    'bg-green-500'
                  }`}></div>
                  <span className="text-sm text-gray-700">{stage.stage}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{stage.value}</p>
                  <p className="text-xs text-gray-500">{stage.count} deals</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;