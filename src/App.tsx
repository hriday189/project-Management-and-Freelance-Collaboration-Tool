import React, { useState } from 'react';
import { 
  Layout, 
  Users, 
  Briefcase, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Bell,
  Search,
  Plus
} from 'lucide-react';

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      name: "Website Redesign",
      progress: 75,
      deadline: "March 25, 2024",
      team: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
      ]
    },
    {
      id: 1,
      name: "Mobile App Development",
      progress: 45,
      deadline: "April 10, 2024",
      team: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
      ]
    }
  ];

  const stats = [
    { label: "Active Projects", value: "12", icon: Briefcase },
    { label: "Team Members", value: "24", icon: Users },
    { label: "Total Revenue", value: "$45.2K", icon: BarChart3 },
    { label: "Completed", value: "92%", icon: Layout }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <Layout className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">Workflow</span>
        </div>
        
        <nav className="space-y-1 flex-1">
          {[
            { icon: Layout, text: "Dashboard", active: true },
            { icon: Briefcase, text: "Projects" },
            { icon: Users, text: "Team" },
            { icon: Calendar, text: "Schedule" },
            { icon: MessageSquare, text: "Messages" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
                item.active 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.text}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Sarah!</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="p-2 relative text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-6 w-6 text-indigo-600" />
                <span className="text-xs font-medium text-gray-400">Last 30 days</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Active Projects</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus className="h-5 w-5" />
              New Project
            </button>
          </div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <div 
                key={i}
                className={`p-4 rounded-lg border ${
                  activeProject === project.id 
                    ? 'border-indigo-200 bg-indigo-50' 
                    : 'border-gray-200 hover:bg-gray-50'
                } cursor-pointer transition-colors`}
                onClick={() => setActiveProject(project.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{project.name}</h3>
                  <span className="text-sm text-gray-500">Due {project.deadline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.map((member, j) => (
                      <img
                        key={j}
                        src={member}
                        alt="Team member"
                        className="h-8 w-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;