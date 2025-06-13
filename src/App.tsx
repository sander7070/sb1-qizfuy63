import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNavigation from './components/TopNavigation';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import Deals from './components/Deals';
import Tasks from './components/Tasks';
import Emails from './components/Emails';
import Calls from './components/Calls';
import Reports from './components/Reports';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return <Clients />;
      case 'deals':
        return <Deals />;
      case 'tasks':
        return <Tasks />;
      case 'emails':
        return <Emails />;
      case 'calls':
        return <Calls />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavigation />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;