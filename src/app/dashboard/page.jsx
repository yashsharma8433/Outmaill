"use client";
import React, { useEffect, useState } from "react";
import {
  CircleUserRound,
  LogOut,
  LayoutDashboard,
  Menu,
  FileText,
  Upload,
  Trash2,
  Eye,
  Search,
  SlidersHorizontal,
  Plus,
  Star,
  MoreHorizontal,
  Mail,
  Package,
  File,
  Users,
  MousePointerClick,
  ShoppingCart,
  HardDrive,
  CheckCircle,
  Square,
  ChevronDown,
  Settings,
  CreditCard ,
  Globe,
  MousePointer,
  Paperclip,

} from "lucide-react";

// Header Component
const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-transparent sticky p-4 rounded-full ${
        isScrolled ? "" : "border-transparent"
      } top-0 z-10 flex justify-between items-center transition-all duration-300`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded hover:bg-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <Menu className="text-white" />
        </button>
        <div>
          <h2 className="text-xl font-bold">Job Application Dashboard</h2>
          <p className="text-sm text-gray-400">AI-powered insights for your job search</p>
          <p className="text-sm text-gray-400 mt-1">Welcome back, Yash!</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <select
            className="bg-[#2C2C2C] text-gray-300 px-3 py-1 rounded appearance-none pr-8"
            onChange={() => {}}
          >
            <option value="7 days">7 days</option>
            <option value="15 days">15 days</option>
            <option value="30 days">30 days</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
            <ChevronDown className="fill-current h-4 w-4" />
          </div>
        </div>
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
          U
        </div>
      </div>
    </div>
  );
};

// Mock ChartComponent for demonstration purposes
const ChartComponent = ({ type, data, title, isMini }) => {
  const chartClass = isMini ? "h-16" : "h-64";
  return (
    <div
      className={`flex items-center justify-center ${chartClass} border border-white text-white bg-white/10 backdrop-blur-md rounded-xl shadow-lg`}
    >
      {title} - {type} Chart Placeholder
    </div>
  );
};


const Card = ({ title, value, percentage, icon }) => {
  const isPositive = percentage.includes('+');
  const percentageColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div class="flex items-center justify-between p-6 bg- backdrop-blur-md rounded-xl shadow-lg border border-white/20">
      <div className="flex flex-col">
        <p className="text-sm text-slate-400">{title}</p>
        <p className="text-3xl font-bold text-white mt-1">
          {value}{' '}
          <span className={`text-lg font-normal ${percentageColor}`}>{percentage}</span>
        </p>
      </div>
      <div className="p-3 bg-purple-600 rounded-full text-white">
        {icon}
      </div>
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-5 bg-transparent ">
      <Card
        title="Today's Applications"
        value="$53,000"
        percentage="+55%"
        icon={<CreditCard size={24} />}
      />
      <Card
        title="Today's Visitors"
        value="2,300"
        percentage="+3%"
        icon={<Globe size={24} />}
      />
      <Card
        title="New Companies"
        value="+3,462"
        percentage="-2%"
        icon={<Users size={24} />}
      />
      <Card
        title="Total Turnover"
        value="$103,430"
        percentage="+5%"
        icon={<ShoppingCart size={24} />}
      />
    </div>
  );
};
// TopHorizontalCards Component
const TopHorizontalCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 font-syne text-white">
      {/* Middle Card: Satisfaction Rate */}
      <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6">Acceptance Rate</h2>
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-white/20 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-purple-500 stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset="12.56"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-purple-500">95%</span>
          </div>
        </div>
      </div>

      {/* Right Card: Referral Tracking */}
      <div className="flex-1 rounded-2xl p-8 flex flex-col shadow-xl border border-white/20 backdrop-blur-md bg-white/10">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-semibold text-white">Referral Tracking</h2>
          <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
            <MoreHorizontal size={20} className="text-white/80" />
          </button>
        </div>

        <div className="flex flex-row md:flex-col lg:flex-row items-center justify-center gap-6">
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-sm text-white/60">Invited</p>
              <p className="text-3xl font-bold text-white">145 people</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Bonus</p>
              <p className="text-3xl font-bold text-white">1,465</p>
            </div>
          </div>

          <div className="relative w-32 h-32 flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-white/20 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-green-400 stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset="17.584"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-green-400">9.3</span>
              <span className="text-xs text-white/60">Total Score</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SalesOverview Component
const SalesOverview = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl border border-white/20 col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold"> Company Overview</h3>
        <span className="text-sm text-green-400">+5% more in 2021</span>
        <div className="flex items-center gap-2">
          <button className="p-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-sm">Jan</button>
          <button className="p-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-sm">Feb</button>
          <button className="p-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-sm">Mar</button>
        </div>
      </div>

      <div className="h-64 mb-6">
        <ChartComponent type="line" title="Sales Overview" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow">
          <div className="flex items-center gap-2 mb-2">
            <Users size={20} className="text-blue-400" />
            <span className="text-sm text-gray-300">Users</span>
          </div>
          <span className="text-xl font-bold text-white">32,984</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow">
          <div className="flex items-center gap-2 mb-2">
            <MousePointerClick size={20} className="text-blue-400" />
            <span className="text-sm text-gray-300">Clicks</span>
          </div>
          <span className="text-xl font-bold text-white">2.42M</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart size={20} className="text-blue-400" />
            <span className="text-sm text-gray-300">Sales</span>
          </div>
          <span className="text-xl font-bold text-white">2,400$</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow">
          <div className="flex items-center gap-2 mb-2">
            <HardDrive size={20} className="text-blue-400" />
            <span className="text-sm text-gray-300">Items</span>
          </div>
          <span className="text-xl font-bold text-white">320</span>
        </div>
      </div>
    </div>
  );
};

// ActiveUsers Component
const ActiveUsers = () => {
  return (
    <div className="bg-white/7 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl border border-white/20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Active Users</h3>
        <MoreHorizontal size={20} className="text-white/70" />
      </div>

      <p className="text-sm text-white/70 mb-4">
        <span className="text-green-400">+23</span> from last week
      </p>

      <div className="h-48">
        <ChartComponent type="bar" title="Active Users" />
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const projects = []; // Empty as per your code

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg border border-white/10 col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Applied COmpanies</h3>
        <p className="text-sm text-green-400">+30 done this month</p>
        <MoreHorizontal size={20} className="text-white/70" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-2 text-sm text-white/60">COMPANIES</th>
              <th className="px-4 py-2 text-sm text-white/60">MEMBERS</th>
              <th className="px-4 py-2 text-sm text-white/60">BUDGET</th>
              <th className="px-4 py-2 text-sm text-white/60">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-white/5 last:border-b-0">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium flex items-center gap-2">
                  <Square size={16} className="text-purple-500" />
                  {project.name}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-white/80 flex items-center gap-1">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">M</span>
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">S</span>
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">J</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-white/80">{project.budget}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-white/20 rounded-full h-2.5">
                      <div
                        className="bg-purple-500 h-2.5 rounded-full"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                    <span className="text-white/70">{project.completion}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// OrdersOverview Component
const OrdersOverview = () => {
  const orders = []; // Empty as per your code

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg border border-white/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold"> overview</h3>
        <p className="text-sm text-green-400">+30% this month</p>
        <MoreHorizontal size={20} className="text-gray-400" />
      </div>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="flex items-start gap-4 border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
          >
            <div className="mt-1">
              {index === 0 && <CheckCircle size={20} className="text-green-500" />}
              {index === 1 && <Plus size={20} className="text-red-500" />}
              {index === 2 && <ShoppingCart size={20} className="text-blue-500" />}
              {index === 3 || index === 4 ? <File size={20} className="text-purple-500" /> : null}
              {index === 5 && <Plus size={20} className="text-red-500" />}
            </div>
            <div>
              <p className="text-white font-medium">{order.title}</p>
              <p className="text-sm text-gray-400">{order.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// CombinedDashboard Component
const CombinedDashboard = () => {
  return (
    <div className="flex-1 flex flex-col p-6">
     <DashboardCards/>
      <TopHorizontalCards />
     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-2">
          <SalesOverview />
        </div>
        <ActiveUsers />
        <Projects />
        <OrdersOverview />
      </div>
    </div>
  );
};

// Attachments Component
const Attachments = () => {
  const [attachments, setAttachments] = useState([
    { id: 1, name: "Resume_YashSharma.pdf", type: "PDF", size: "2.1 MB", uploadDate: "2024-07-25" },
    { id: 2, name: "CoverLetter_Google.docx", type: "DOCX", size: "0.5 MB", uploadDate: "2024-07-20" },
    { id: 3, name: "Portfolio_Link.txt", type: "Link", size: "0.1 MB", uploadDate: "2024-07-18" },
  ]);

  const handleUploadAttachment = () => {
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
    <div className="p-4 sm:p-6 font-syne">
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

      <div class="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-md">
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

// Templates Component
const Templates = () => {
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
      category: "Cover Letter",
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
      category: "Resume",
    },
    {
      id: 3,
      type: "all",
      icon: <Mail size={20} />,
      title: "Technical Interview Email",
      description: "Follow-up email template for technical interviews",
      rating: 4.7,
      aiMatchScore: 88,
      category: "Email",
    },
    {
      id: 4,
      type: "all",
      icon: <Package size={20} />,
      title: "Product Manager Application",
      description: "Complete application package for product management roles",
      rating: 4.8,
      aiMatchScore: 85,
      category: "Package",
    },
    {
      id: 5,
      type: "all",
      icon: <FileText size={20} />,
      title: "Startup Cover Letter",
      description: "Dynamic cover letter template for startup environments",
      rating: 4.5,
      aiMatchScore: 83,
      category: "Cover Letter",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["All", "Resume", "Cover Letter", "Email", "Message", "Package"];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || template.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const featuredTemplates = filteredTemplates.filter((template) => template.type === "featured");
  const allTemplates = filteredTemplates.filter((template) => template.type === "all");

  return (
    <div className="p-4 sm:p-6 font-syne">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Templates</h1>
          <p className="text-white text-sm sm:text-base">
            AI-powered templates to boost your application success rate
          </p>
        </div>
        <button
          className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          <Plus size={20} className="mr-2" /> Create Template
        </button>
      </div>
      <div className="mb-8">
      <div class="flex flex-col sm:flex-row items-center bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 shadow-md">
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
              {filterOptions.map((option) => (
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
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Featured Templates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredTemplates.length > 0 ? (
            featuredTemplates.map((template) => (
              <div
                key={template.id}
               className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white transition-all duration-300 shadow-md flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-[#2C2C2C] rounded-full mr-3 text-white">{template.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{template.title}</h3>
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
                    <span key={i} className="bg-white/10 backdrop-blur-sm text-gray-300 text-xs px-2 py-1 rounded-full">
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
      <div>
        <h2 className="text-xl font-semibold font-syne mb-4 text-gray-200">All Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTemplates.length > 0 ? (
            allTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-[#2C2C2C] hover:border-white transition-all duration-300 shadow-md flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-[#2C2C2C] rounded-full mr-3 text-white">{template.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{template.title}</h3>
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

// Settings Component
const SettingsComponent = () => {
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
    console.log("Saving settings:", profileSettings);
    alert("Settings saved successfully!");
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

      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-[#2C2C2C] shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Profile Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
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
            <label htmlFor="notifications" className="text-sm font-medium text-gray-300 cursor-pointer">
              Enable Notifications
            </label>
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
            <label htmlFor="darkMode" className="text-sm font-medium text-gray-300 cursor-pointer">
              Dark Mode
            </label>
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

// Main Page Component
export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div
      className="flex min-h-screen bg-gradient-to-l from-black via-[#6c00ff] to-black text-white overflow-hidden font-syne"
      style={{
        background: "radial-gradient(ellipse at center, #6c00ff 0%, #0f0f2d 60%, #000 100%)",
      }}
    >
      {/* Sidebar */}
      <aside
        className={`bg-[#0000] text-white p-6 flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-0"
        } fixed h-screen z-20`}
      >
        <div className={isSidebarOpen ? "block" : "hidden"}>
          <h1 className="text-2xl font-bold mb-8 font-syne">
            Out<span className="text-purple-500">mail</span>
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <CircleUserRound className="w-10 h-10 text-white" />
            <div>
              <p className="font-semibold">Yash Sharma</p>
              <span className="text-xs bg-[#2C2C2C] px-2 py-0.5 rounded text-purple-400">PRO</span>
            </div>
          </div>
          <nav className="space-y-4 mt-10">
            <a
              onClick={() => setActiveSection("dashboard")}
              className={`flex items-center gap-2 transition cursor-pointer ${
                activeSection === "dashboard" ? "text-purple-400 font-bold" : "text-white hover:text-purple-400"
              }`}
            >
              <LayoutDashboard size={16} />  Dashboard
            </a>
            <a
  onClick={() => setActiveSection("attachments")}
  className={`block transition cursor-pointer flex items-center gap-2 ${
    activeSection === "attachments"
      ? "text-purple-400 font-semibold"
      : "text-white hover:text-purple-400"
  }`}
>
  <Paperclip size={18} />
  Attachments
</a>

            {/* Templates */}
<a
  onClick={() => setActiveSection("templates")}
  className={`block transition cursor-pointer flex items-center gap-2 ${
    activeSection === "templates"
      ? "text-purple-400 font-semibold"
      : "text-white hover:text-purple-400"
  }`}
>
  <FileText size={18} />
  Templates
</a>

{/* Settings */}
<a
  onClick={() => setActiveSection("settings")}
  className={`block transition cursor-pointer flex items-center gap-2 ${
    activeSection === "settings"
      ? "text-purple-400 font-semibold"
      : "text-white hover:text-purple-400"
  }`}
>
  <SlidersHorizontal size={18} />
  Settings
</a>
          </nav>
        </div>
        <div className={isSidebarOpen ? "block" : "hidden"}>
          <a href="#" className="flex items-center gap-2 text-white hover:text-red-500 transition">
            <LogOut size={16} /> Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col overflow-x-hidden transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Topbar */}
        <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
        {/* Conditional rendering based on activeSection */}
        {activeSection === "dashboard" && <CombinedDashboard />}
        {activeSection === "attachments" && <Attachments />}
        {activeSection === "templates" && <Templates />}
        {activeSection === "settings" && <SettingsComponent />}
      </main>
    </div>
  );
}