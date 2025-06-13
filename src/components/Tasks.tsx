import React, { useState } from 'react';
import { Calendar, List, Plus, Filter, CheckSquare, Clock, User, AlertCircle } from 'lucide-react';

const Tasks: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  const tasks = [
    {
      id: 1,
      title: 'Follow up with Acme Corp about contract renewal',
      description: 'Schedule a call to discuss the renewal terms and pricing',
      assignee: 'John Smith',
      dueDate: '2024-01-15',
      status: 'pending',
      priority: 'high',
      client: 'Acme Corp',
      deal: 'Enterprise License',
      overdue: false,
      completed: false
    },
    {
      id: 2,
      title: 'Prepare proposal for TechStart',
      description: 'Create detailed proposal including timeline and deliverables',
      assignee: 'Sarah Johnson',
      dueDate: '2024-01-14',
      status: 'in-progress',
      priority: 'medium',
      client: 'TechStart',
      deal: 'Consulting Services',
      overdue: true,
      completed: false
    },
    {
      id: 3,
      title: 'Call Johnson Industries for requirements',
      description: 'Gather detailed requirements for the custom solution',
      assignee: 'Mike Chen',
      dueDate: '2024-01-20',
      status: 'pending',
      priority: 'low',
      client: 'Johnson Industries',
      deal: 'Custom Solution',
      overdue: false,
      completed: false
    },
    {
      id: 4,
      title: 'Send contract to GlobalTech',
      description: 'Final contract review and sending',
      assignee: 'John Smith',
      dueDate: '2024-01-10',
      status: 'completed',
      priority: 'high',
      client: 'GlobalTech',
      deal: 'Software Package',
      overdue: false,
      completed: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const todayTasks = tasks.filter(task => {
    const today = new Date().toISOString().split('T')[0];
    return task.dueDate === today;
  });

  const overdueTasks = tasks.filter(task => task.overdue);
  const thisWeekTasks = tasks.filter(task => {
    const taskDate = new Date(task.dueDate);
    const today = new Date();
    const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return taskDate <= weekFromNow && taskDate >= today;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600">Manage and track your team's tasks and deadlines</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-gray-100 rounded-lg">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              <List size={16} className="mr-2 inline" />
              List
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                viewMode === 'calendar' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              <Calendar size={16} className="mr-2 inline" />
              Calendar
            </button>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus size={16} />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {/* Task Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-red-600 mt-1">{overdueTasks.length}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle size={24} className="text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Due Today</p>
              <p className="text-2xl font-bold text-orange-600 mt-1">{todayTasks.length}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock size={24} className="text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">{thisWeekTasks.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Assignees</option>
            <option>John Smith</option>
            <option>Sarah Johnson</option>
            <option>Mike Chen</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Task List */}
      {viewMode === 'list' ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <div key={task.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <button className="mt-1">
                      <CheckSquare 
                        size={20} 
                        className={task.completed ? 'text-green-600' : 'text-gray-400 hover:text-green-600'} 
                      />
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {task.title}
                        </h3>
                        {task.overdue && !task.completed && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">
                            Overdue
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{task.assignee}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                        <span>•</span>
                        <span>{task.client}</span>
                        <span>•</span>
                        <span className="text-blue-600">{task.deal}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                    <div className="flex space-x-1">
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors">
                        Remind
                      </button>
                      <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors">
                        Reassign
                      </button>
                      {!task.completed && (
                        <button className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors">
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center text-gray-500 py-12">
            <Calendar size={48} className="mx-auto mb-4" />
            <p>Calendar view would be implemented here with a full calendar component</p>
            <p className="text-sm mt-2">Tasks would be displayed as events on the calendar</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;