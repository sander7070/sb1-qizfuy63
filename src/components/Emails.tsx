import React, { useState } from 'react';
import { Mail, Send, Paperclip, Star, Archive, Trash2, Reply, Forward, Plus, Search, Filter, RefreshCw as Refresh } from 'lucide-react';

const Emails: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);

  const emails = [
    {
      id: 1,
      from: 'sarah@acmecorp.com',
      fromName: 'Sarah Johnson',
      to: 'you@company.com',
      subject: 'Re: Partnership Discussion - Next Steps',
      content: 'Hi there,\n\nThank you for the productive call yesterday. I wanted to follow up on the partnership discussion and outline the next steps we discussed.\n\nAs agreed, I will:\n1. Send over the technical specifications by Friday\n2. Schedule a demo for your technical team\n3. Prepare the initial pricing proposal\n\nLooking forward to moving this forward.\n\nBest regards,\nSarah',
      time: '2 min ago',
      unread: true,
      starred: false,
      client: 'Acme Corp',
      deal: 'Enterprise License',
      attachments: []
    },
    {
      id: 2,
      from: 'mike@techstart.io',
      fromName: 'Mike Chen',
      to: 'you@company.com',
      subject: 'Meeting Confirmation - Product Demo',
      content: 'Hello,\n\nI hope this email finds you well. I wanted to confirm our product demo meeting scheduled for tomorrow at 2:00 PM EST.\n\nThe meeting will be held via Zoom, and I will send the meeting link separately.\n\nPlease let me know if you need to reschedule.\n\nThank you,\nMike',
      time: '1 hour ago',
      unread: true,
      starred: true,
      client: 'TechStart',
      deal: 'Consulting Services',
      attachments: ['demo-agenda.pdf']
    },
    {
      id: 3,
      from: 'lisa@globalind.com',
      fromName: 'Lisa Wang',
      to: 'you@company.com',
      subject: 'Quote Request - Manufacturing Software',
      content: 'Dear Team,\n\nWe are interested in your manufacturing software solution for our production facilities.\n\nCould you please provide us with a detailed quote including:\n- Software licensing costs\n- Implementation timeline\n- Training requirements\n- Support options\n\nOur deadline for decision is January 30th.\n\nBest regards,\nLisa Wang',
      time: '3 hours ago',
      unread: false,
      starred: false,
      client: 'Global Industries',
      deal: 'Software Package',
      attachments: ['requirements.docx']
    }
  ];

  const folders = [
    { name: 'Inbox', count: 15, active: true },
    { name: 'Sent', count: 0, active: false },
    { name: 'Drafts', count: 3, active: false },
    { name: 'Archive', count: 127, active: false },
    { name: 'Spam', count: 5, active: false },
    { name: 'Trash', count: 12, active: false }
  ];

  const selectedEmailData = emails.find(email => email.id === selectedEmail);

  if (composeOpen) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setComposeOpen(false)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Inbox
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Compose Email</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="recipient@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link to Deal</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select deal...</option>
                  <option>Acme Corp - Enterprise License</option>
                  <option>TechStart - Consulting Services</option>
                  <option>Global Industries - Software Package</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={12}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Paperclip size={16} />
                  <span>Attach File</span>
                </button>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Use Template</option>
                  <option>Follow-up Template</option>
                  <option>Proposal Template</option>
                  <option>Meeting Request</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Save Draft
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Send size={16} />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedEmail && selectedEmailData) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setSelectedEmail(null)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Inbox
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Archive size={16} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Star size={16} />
            </button>
            <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{selectedEmailData.subject}</h2>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  <span><strong>From:</strong> {selectedEmailData.fromName} &lt;{selectedEmailData.from}&gt;</span>
                  <span><strong>To:</strong> {selectedEmailData.to}</span>
                  <span>{selectedEmailData.time}</span>
                </div>
                {selectedEmailData.client && (
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {selectedEmailData.client}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {selectedEmailData.deal}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-900 leading-relaxed">
              {selectedEmailData.content}
            </div>
          </div>

          {selectedEmailData.attachments.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Attachments</h4>
              <div className="space-y-2">
                {selectedEmailData.attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800">
                    <Paperclip size={14} />
                    <button>{attachment}</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-gray-200">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Reply size={16} />
              <span>Reply</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2 transition-colors">
              <Forward size={16} />
              <span>Forward</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Emails</h1>
          <p className="text-gray-600">Manage your integrated email communications</p>
        </div>
        <button 
          onClick={() => setComposeOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus size={16} />
          <span>Compose</span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Email Folders Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Folders</h3>
            <div className="space-y-1">
              {folders.map((folder, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                    folder.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>{folder.name}</span>
                  </div>
                  {folder.count > 0 && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      folder.active ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {folder.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Email List */}
        <div className="col-span-9">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Email Toolbar */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search emails..."
                      className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                </div>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Refresh size={16} />
                </button>
              </div>
            </div>

            {/* Email List */}
            <div className="divide-y divide-gray-200">
              {emails.map((email) => (
                <div
                  key={email.id}
                  onClick={() => setSelectedEmail(email.id)}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    email.unread ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <button className="mt-1">
                        <Star 
                          size={16} 
                          className={email.starred ? 'text-yellow-500 fill-current' : 'text-gray-400 hover:text-yellow-500'} 
                        />
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`font-medium ${email.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                            {email.fromName}
                          </span>
                          {email.client && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {email.client}
                            </span>
                          )}
                        </div>
                        <h4 className={`${email.unread ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                          {email.subject}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {email.content.split('\n')[0]}
                        </p>
                        {email.attachments.length > 0 && (
                          <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500">
                            <Paperclip size={12} />
                            <span>{email.attachments.length} attachment{email.attachments.length > 1 ? 's' : ''}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">{email.time}</span>
                      {email.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-auto"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emails;