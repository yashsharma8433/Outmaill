"use client";
import React, { useState } from "react";
// Importing lucide-react for icons as per instructions
import { Search, SlidersHorizontal, Plus, Star, MoreHorizontal, FileText, Mail, MessageSquare, Package, File } from "lucide-react";

export default function App() {
  // Mock data for templates, structured to match the design in the image
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
  const [activeFilter, setActiveFilter] = useState("All"); // State for active filter

  // Filter options based on the image
  const filterOptions = ["All", "Resume", "Cover Letter", "Email", "Message", "Package"];

  // Filtered templates based on search term and active filter
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || template.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Separate featured and all templates for rendering
  const featuredTemplates = filteredTemplates.filter(template => template.type === "featured");
  const allTemplates = filteredTemplates.filter(template => template.type === "all");

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 sm:p-6 font-sans">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Job Application Templates</h1>
          <p className="text-gray-400 text-sm sm:text-base">AI-powered templates to boost your application success rate</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5">
          <Plus size={20} className="mr-2" /> Create Template
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-center bg-[#1A1A1A] rounded-lg p-2 border border-[#2C2C2C] shadow-md">
          <div className="flex items-center w-full sm:w-auto flex-grow">
            <Search size={20} className="text-gray-400 ml-2 mr-3" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-white placeholder-gray-500 flex-grow py-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center mt-2 sm:mt-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-[#2C2C2C] pt-2 sm:pt-0 sm:pl-4 w-full sm:w-auto">
            <button className="flex items-center text-gray-400 hover:text-purple-400 transition mr-4">
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
                      <p className="text-sm text-gray-400 mt-1">{template.description}</p>
                    </div>
                  </div>
                  <span className="bg-purple-800 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">Featured</span>
                </div>

                <div className="flex items-center text-sm text-gray-400 mb-4">
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
                  <button className="p-2 bg-[#2C2C2C] hover:bg-[#3A3A3A] rounded-lg text-gray-400 hover:text-white transition">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full">No featured templates found.</p>
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
                      <p className="text-sm text-gray-400 mt-1">{template.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-400 mb-4">
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
                  <button className="p-2 bg-[#2C2C2C] hover:bg-[#3A3A3A] rounded-lg text-gray-400 hover:text-white transition">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full">No templates found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
