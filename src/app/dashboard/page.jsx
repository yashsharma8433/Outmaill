"use client";
import React, { useEffect, useState } from "react";
import {
  CircleUserRound,
  LogOut,
  LayoutDashboard,
  Menu,
  FileText, // Added FileText for general file icon in Attachments
  Upload, // Added Upload icon for upload button in Attachments
  Trash2, // Added Trash2 icon for delete button in Attachments
  Eye, // Added Eye icon for view button in Attachments
  Search, SlidersHorizontal, Plus, Star, MoreHorizontal, Mail, MessageSquare, Package, File // Re-importing for Templates component
} from "lucide-react";

// Mock ChartComponent for demonstration purposes
const ChartComponent = ({ type, data }) => {
  return (
    <div className="flex items-center justify-center h-full border border-white text-white">
      {type === "line" ? "Line Chart Placeholder" : "Bar/Doughnut Chart Placeholder"}
    </div>
  );
};

// Templates Component (as provided and fixed in previous turns)
const Templates = () => {
  // Importing lucide-react for icons as per instructions
  // These are already imported at the top level, but re-importing here for self-containment if this component were standalone
  // For the current structure, they are available from the parent scope, but keeping this for clarity if moved.
  const { Search, SlidersHorizontal, Plus, Star, MoreHorizontal, FileText, Mail, MessageSquare, Package, File } = require("lucide-react");


  const [templates, setTemplates] = useState([
    {
      id: 1,
      type: "featured",
      icon: <FileText size={20} />,
      title: "Senior Software Engineer Cover Letter",
      description: "Professional cover letter template optimized for senior engineering roles",
      rating: 4.8,
      downloads: "1250",
      tags: ["Cover Letter", "Tech", "Senior Level", "AI-Optimized"],
      aiMatchScore: 95,
      category: "Cover Letter"
    },
    {
      id: 2,
      type: "featured",
      icon: <FileText size={20} />,
      title: "Frontend Developer Resume",
      description: "Modern ATS-friendly resume template for frontend developers",
      rating: 4.9,
      downloads: "2100",
      tags: ["Resume", "Frontend", "React", "ATS-Friendly"],
      aiMatchScore: 92,
      category: "Resume"
    },
    {
      id: 3,
      type: "all",
      icon: <Mail size={20} />,
      title: "Technical Interview Email",
      description: "Follow-up email template for technical interviews",
      rating: 4.7,
      aiMatchScore: 88,
      category: "Email"
    },
    {
      id: 4,
      type: "all",
      icon: <Package size={20} />,
      title: "Product Manager Application",
      description: "Complete application package for product management roles",
      rating: 4.8,
      aiMatchScore: 85,
      category: "Package"
    },
    {
      id: 5,
      type: "all",
      icon: <FileText size={20} />,
      title: "Startup Cover Letter",
      description: "Dynamic cover letter template for startup environments",
      rating: 4.5,
      aiMatchScore: 83,
      category: "Cover Letter"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["All", "Resume", "Cover Letter", "Email", "Message", "Package"];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || template.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const featuredTemplates = filteredTemplates.filter(template => template.type === "featured");
  const allTemplates = filteredTemplates.filter(template => template.type === "all");

  return (
    <div className="p-4 sm:p-6 font-syne"> {/* Applied font-syne */}
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Templates</h1>
          <p className="text-white text-sm sm:text-base">AI-powered templates to boost your application success rate</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5">
          <Plus size={20} className="mr-2" /> Create Template
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-center bg-[#1A1A1A] rounded-lg p-2 border border-[#2C2C2C] shadow-md">
          <div className="flex items-center w-full sm:w-auto flex-grow">
            <Search size={20} className="text-white ml-2 mr-3" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-white placeholder-gray-500 flex-grow py-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center mt-2 sm:mt-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-[#2C2C2C] pt-2 sm:pt-0 sm:pl-4 w-full sm:w-auto">
            <button className="flex items-center text-white hover:text-purple-400 transition mr-4">
              <SlidersHorizontal size={20} className="mr-2" /> Filter
            </button>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setActiveFilter(option)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    activeFilter === option
                      ? "bg-purple-600 text-white"
                      : "bg-[#2C2C2C] text-gray-300 hover:bg-[#3A3A3A]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Templates */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Featured Templates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredTemplates.length > 0 ? (
            featuredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2C2C2C] hover:border-purple-500 transition-all duration-300 shadow-md flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-[#2C2C2C] rounded-full mr-3 text-purple-400">
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400">{template.title}</h3>
                      <p className="text-sm text-white mt-1">{template.description}</p>
                    </div>
                  </div>
                  <span className="bg-purple-800 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">Featured</span>
                </div>

                <div className="flex items-center text-sm text-white mb-4">
                  <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                  <span>{template.rating}</span>
                  <span className="mx-2">•</span>
                  <span>{template.downloads} downloads</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, i) => (
                    <span key={i} className="bg-[#2C2C2C] text-gray-300 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between bg-[#2C2C2C] p-3 rounded-lg mb-4">
                  <span className="text-sm text-gray-300">AI Match Score</span>
                  <span className="text-lg font-bold text-purple-400">{template.aiMatchScore}%</span>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <button className="flex-grow bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 mr-2">
                    Use Template
                  </button>
                  <button className="p-2 bg-[#2C2C2C] hover:bg-[#3A3A3A] rounded-lg text-white hover:text-white transition">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white col-span-full">No featured templates found.</p>
          )}
        </div>
      </div>

      {/* All Templates */}
      <div>
        <h2 className="text-xl font-semibold font-syne mb-4 text-gray-200">All Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTemplates.length > 0 ? (
            allTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2C2C2C] hover:border-purple-500 transition-all duration-300 shadow-md flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-[#2C2C2C] rounded-full mr-3 text-purple-400">
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400">{template.title}</h3>
                      <p className="text-sm text-white mt-1">{template.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-white mb-4">
                  <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                  <span>{template.rating}</span>
                </div>

                <div className="flex items-center justify-between bg-[#2C2C2C] p-3 rounded-lg mb-4">
                  <span className="text-sm text-gray-300">Match</span>
                  <span className="text-lg font-bold text-purple-400">{template.aiMatchScore}%</span>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <button className="flex-grow bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 mr-2">
                    Use Template
                  </button>
                  <button className="p-2 bg-[#2C2C2C] hover:bg-[#3A3A3A] rounded-lg text-white hover:text-white transition">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white col-span-full">No templates found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// New Attachments Component
const Attachments = () => {
    const [attachments, setAttachments] = useState([
        { id: 1, name: "Resume_YashSharma.pdf", type: "PDF", size: "2.1 MB", uploadDate: "2024-07-25" },
        { id: 2, name: "CoverLetter_Google.docx", type: "DOCX", size: "0.5 MB", uploadDate: "2024-07-20" },
        { id: 3, name: "Portfolio_Link.txt", type: "Link", size: "0.1 MB", uploadDate: "2024-07-18" },
    ]);

    const handleUploadAttachment = () => {
        // Mock upload functionality
        const newAttachment = {
            id: attachments.length + 1,
            name: `New_Attachment_${attachments.length + 1}.pdf`,
            type: "PDF",
            size: "1.0 MB",
            uploadDate: new Date().toISOString().slice(0, 10),
        };
        setAttachments([...attachments, newAttachment]);
    };

    return (
        <div className="p-4 sm:p-6 font-syne "> {/* Applied font-syne */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-1">Attachments</h1>
                    <p className="text-white text-sm sm:text-base">Manage your job application attachments</p>
                </div>
                <button
                    onClick={handleUploadAttachment}
                    className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5"
                >
                    <Upload size={20} className="mr-2" /> Upload Attachment
                </button>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#2C2C2C] shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-200">Your Attachments</h2>
                {attachments.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-[#2C2C2C]">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Size</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Upload Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2C2C2C]">
                                {attachments.map((attachment) => (
                                    <tr key={attachment.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{attachment.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{attachment.type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{attachment.size}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{attachment.uploadDate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-purple-400 hover:text-purple-600 mr-4">
                                                <Eye size={16} className="inline-block mr-1" />View
                                            </button>
                                            <button className="text-red-400 hover:text-red-600">
                                                <Trash2 size={16} className="inline-block mr-1" />Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-white">No attachments uploaded yet.</p>
                )}
            </div>
        </div>
    );
};

// New Settings Component
const Settings = () => {
  const [profileSettings, setProfileSettings] = useState({
    name: "Yash Sharma",
    email: "yash.sharma@example.com",
    notifications: true,
    darkMode: true,
  });

  const handleProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveChanges = () => {
    // In a real app, you would send this data to a backend
    console.log("Saving settings:", profileSettings);
    alert("Settings saved successfully!"); // Using alert for mock, replace with custom modal
  };

  return (
    <div className="p-4 sm:p-6 font-syne">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Settings</h1>
          <p className="text-white text-sm sm:text-base">Manage your application settings and preferences</p>
        </div>
        <button
          onClick={handleSaveChanges}
          className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          Save Changes
        </button>
      </div>

      <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#2C2C2C] shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Profile Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileSettings.name}
              onChange={handleProfileChange}
              className="w-full bg-[#2C2C2C] text-white border border-[#3A3A3A] rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileSettings.email}
              onChange={handleProfileChange}
              className="w-full bg-[#2C2C2C] text-white border border-[#3A3A3A] rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-200">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-[#2C2C2C] p-4 rounded-lg">
            <label htmlFor="notifications" className="text-sm font-medium text-gray-300 cursor-pointer">Enable Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={profileSettings.notifications}
              onChange={handleProfileChange}
              className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center justify-between bg-[#2C2C2C] p-4 rounded-lg">
            <label htmlFor="darkMode" className="text-sm font-medium text-gray-300 cursor-pointer">Dark Mode</label>
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={profileSettings.darkMode}
              onChange={handleProfileChange}
              className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Page() {
  const [selectedDateRange, setSelectedDateRange] = useState("30 days");
  const [showTopOption, setShowTopOption] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const handleScroll = () => {
      setShowTopOption(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applicationActivityData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Total Applications",
        data: [10, 15, 12, 18, 14, 20, 17],
        fill: true,
        backgroundColor: "rgba(139, 92, 246, 0.3)",
        borderColor: "#8B5CF6",
        tension: 0.4,
      },
    ],
  };

  const responseRatesData = {
    labels: ["Success", "Indeed", "LinkedIn", "Glassdoor", "Angellist"],
    datasets: [
      {
        label: "Response Rate",
        data: [30, 25, 35, 20, 28],
        backgroundColor: "#8B5CF6",
      },
    ],
  };

  const statusOverviewData = {
    labels: ["Active", "Pending", "Rejected"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#8B5CF6", "#C084FC", "#9333EA"],
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-l from-black via-[#6c00ff] to-black text-white overflow-hidden font-syne"> {/* Applied font-syne */}
      {/* Sidebar */}
      <aside
        className={`bg-[#0000] text-white p-6 border-r border-[#2C2C2C] flex flex-col justify-between transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "w-64" : "w-0"} fixed h-screen z-20`}
      >
        <div className={isSidebarOpen ? "block" : "hidden"}>
          <h1 className="text-2xl font-bold mb-8 font-syne"> {/* Applied font-syne */}
            Out<span className="text-purple-500">mail</span>
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <CircleUserRound className="w-10 h-10 text-white" />
            <div>
              <p className="font-semibold">Yash Sharma</p>
              <span className="text-xs bg-[#2C2C2C] px-2 py-0.5 rounded text-purple-400">
                PRO
              </span>
            </div>
          </div>
          <nav className="space-y-4 mt-10">
            <a
              onClick={() => setActiveSection("dashboard")}
              className={`flex items-center gap-2 transition cursor-pointer ${
                activeSection === "dashboard"
                  ? "text-purple-400 font-bold"
                  : "text-white hover:text-purple-400"
              }`}
            >
              <LayoutDashboard size={16} /> Dashboard
            </a>
            <a
              onClick={() => setActiveSection("attachments")}
              className={`block transition cursor-pointer ${
                activeSection === "attachments"
                  ? "text-purple-400 font-semibold"
                  : "text-white hover:text-purple-400"
              }`}
            >
              Attachments
            </a>
            <a
              onClick={() => setActiveSection("templates")}
              className={`block transition cursor-pointer ${
                activeSection === "templates"
                  ? "text-purple-400 font-semibold"
                  : "text-white hover:text-purple-400"
              }`}
            >
              Templates
            </a>
            <a
              onClick={() => setActiveSection("settings")} // Added onClick for Settings
              className={`block transition cursor-pointer ${
                activeSection === "settings"
                  ? "text-purple-400 font-semibold"
                  : "text-white hover:text-purple-400"
              }`}
            >
              Settings
            </a>
          </nav>
        </div>
        <div className={isSidebarOpen ? "block" : "hidden"}>
          <a
            href="#"
            className="flex items-center gap-2 text-white hover:text-red-500 transition"
          >
            <LogOut size={16} /> Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col overflow-x-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Topbar */}
        <div className="bg-[#1A1A1A] p-4 border-b border-[#2C2C2C] sticky top-0 z-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded hover:bg-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <Menu className="text-white  " />
            </button>
            <div>
              <h2 className="text-xl font-bold">Job Application Dashboard</h2>
              <p className="text-sm text-gray-400">
                AI-powered insights for your job search
              </p>
              <p className="text-sm text-gray-400 mt-1">Welcome back, Yash!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                className="bg-[#2C2C2C] text-gray-300 px-3 py-1 rounded appearance-none pr-8"
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
              >
                <option value="7 days">7 days</option>
                <option value="15 days">15 days</option>
                <option value="30 days">30 days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
              U
            </div>
          </div>
        </div>

        {showTopOption && (
          <div className="fixed top-4 right-4 z-50 bg-purple-600 text-white px-4 py-2 rounded shadow-lg">
            Quick Action
          </div>
        )}

        {activeSection === "dashboard" && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {/* Main Chart */}
            <div className="bg-transparent rounded-lg p-6 md:col-span-2 pb-15">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Application Activity</h3>
                <span className="text-sm text-white">
                  Total Applications: <span className="text-purple-400 font-bold">24</span>
                </span>
              </div>
              <p className="text-sm text-white mb-4">
                You can see your search performance over time
              </p>
              <div className="h-64">
                <ChartComponent type="line" data={applicationActivityData} />
              </div>
            </div>


            {/* Sidebar Stats */}
            <div className="grid gap-6">
              <div className="bg-transparent rounded-lg p-6 text-white border border-amber-50">
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-bold">33%</span>
                  <span className="text-sm bg-purple-700 px-2 py-0.5 rounded-full">+2.5%</span>
                </div>
                <p className="text-sm mt-2">Conversion Rate</p>
              </div>
              <div className="bg-transparent rounded-lg p-6 border border-amber-50">
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-bold">8</span>
                  <span className="text-sm bg-[#2C2C2C] text-purple-400 px-2 py-0.5 rounded-full">+2 new</span>
                </div>
                <p className="text-sm mt-2">Interviews</p>

              </div>

            </div>

            {/* Additional Charts below the main chart and sidebar stats */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Response Rates Chart */}
              <div className="bg-transparent rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Response Rates</h3>
                <div className="h-64">
                  <ChartComponent type="bar" data={responseRatesData} />
                </div>
              </div>

              {/* Status Overview Chart */}
              <div className="bg-transparent rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Status Overview</h3>
                <div className="h-64">
                  <ChartComponent type="doughnut" data={statusOverviewData} />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "attachments" && <Attachments />}
        {activeSection === "templates" && <Templates />}
        {activeSection === "settings" && <Settings />} {/* Conditional rendering for Settings */}
      </main>
    </div>
  );
}
