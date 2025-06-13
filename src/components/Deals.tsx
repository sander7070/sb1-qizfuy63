import React, { useState } from 'react';
import { Plus, DollarSign, Calendar, User, MoreHorizontal } from 'lucide-react';

const Deals: React.FC = () => {
  const [deals, setDeals] = useState({
    prospect: [
      { id: 1, title: 'Acme Corp - Enterprise License', value: '$50,000', deadline: '2024-01-15', assignee: 'John Smith', company: 'Acme Corp', priority: 'high' },
      { id: 2, title: 'TechStart - Consulting Services', value: '$25,000', deadline: '2024-01-20', assignee: 'Sarah Johnson', company: 'TechStart', priority: 'medium' }
    ],
    quote: [
      { id: 3, title: 'Global Industries - Software Package', value: '$75,000', deadline: '2024-01-18', assignee: 'Mike Chen', company: 'Global Industries', priority: 'high' }
    ],
    negotiation: [
      { id: 4, title: 'InnovateCorp - Custom Solution', value: '$100,000', deadline: '2024-01-25', assignee: 'John Smith', company: 'InnovateCorp', priority: 'high' }
    ],
    won: [
      { id: 5, title: 'StartupABC - Basic Package', value: '$15,000', deadline: '2024-01-10', assignee: 'Sarah Johnson', company: 'StartupABC', priority: 'low' }
    ],
    lost: [
      { id: 6, title: 'OldCorp - Legacy System', value: '$30,000', deadline: '2024-01-05', assignee: 'Mike Chen', company: 'OldCorp', priority: 'medium' }
    ]
  });

  const columns = [
    { id: 'prospect', title: 'Prospect', color: 'bg-blue-100 text-blue-800', count: deals.prospect.length },
    { id: 'quote', title: 'Quote', color: 'bg-yellow-100 text-yellow-800', count: deals.quote.length },
    { id: 'negotiation', title: 'Negotiation', color: 'bg-orange-100 text-orange-800', count: deals.negotiation.length },
    { id: 'won', title: 'Won', color: 'bg-green-100 text-green-800', count: deals.won.length },
    { id: 'lost', title: 'Lost', color: 'bg-red-100 text-red-800', count: deals.lost.length }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-4 border-red-500';
      case 'medium': return 'border-l-4 border-yellow-500';
      case 'low': return 'border-l-4 border-green-500';
      default: return 'border-l-4 border-gray-300';
    }
  };

  const handleDragStart = (e: React.DragEvent, dealId: number, sourceColumn: string) => {
    e.dataTransfer.setData('dealId', dealId.toString());
    e.dataTransfer.setData('sourceColumn', sourceColumn);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetColumn: string) => {
    e.preventDefault();
    const dealId = parseInt(e.dataTransfer.getData('dealId'));
    const sourceColumn = e.dataTransfer.getData('sourceColumn');
    
    if (sourceColumn === targetColumn) return;

    setDeals(prevDeals => {
      const newDeals = { ...prevDeals };
      const dealToMove = newDeals[sourceColumn as keyof typeof newDeals].find(deal => deal.id === dealId);
      
      if (dealToMove) {
        newDeals[sourceColumn as keyof typeof newDeals] = newDeals[sourceColumn as keyof typeof newDeals].filter(deal => deal.id !== dealId);
        newDeals[targetColumn as keyof typeof newDeals] = [...newDeals[targetColumn as keyof typeof newDeals], dealToMove];
      }
      
      return newDeals;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Deals Pipeline</h1>
          <p className="text-gray-600">Track and manage your sales opportunities</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus size={16} />
          <span>New Deal</span>
        </button>
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {columns.map((column) => (
          <div key={column.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">{column.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${column.color}`}>
                {column.count}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ${deals[column.id as keyof typeof deals].reduce((sum, deal) => sum + parseInt(deal.value.replace('$', '').replace(',', '')), 0).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {columns.map((column) => (
            <div
              key={column.id}
              className="space-y-4"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{column.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${column.color}`}>
                  {column.count}
                </span>
              </div>
              
              <div className="space-y-3 min-h-[400px]">
                {deals[column.id as keyof typeof deals].map((deal) => (
                  <div
                    key={deal.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, deal.id, column.id)}
                    className={`bg-white border border-gray-200 rounded-lg p-4 cursor-move hover:shadow-md transition-shadow ${getPriorityColor(deal.priority)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{deal.title}</h4>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3">{deal.company}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-green-600">
                          <DollarSign size={14} />
                          <span className="font-medium">{deal.value}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar size={12} />
                        <span>{new Date(deal.deadline).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <User size={12} />
                        <span>{deal.assignee}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;