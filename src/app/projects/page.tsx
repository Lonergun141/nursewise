'use client';

import React, { useState } from 'react';
import Pagination from '@/components/buttons/pagination';

// Define the type for a project
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

// Sample data for projects
const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 7,
    title: 'Project 7',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 8,
    title: 'Project 8',
    description: 'ambottt',
    imageUrl: 'https://via.placeholder.com/400',
    link: '#',
  },
];

const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort projects based on title
  const sortedProjects = filteredProjects.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Total number of pages
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen ml-64 bg-white">
      {/* Header */}
      <div className="bg-pink-500 py-12 text-center">
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <p className="mt-2 text-pink-200">Explore generated history</p>
      </div>

      {/* Search and Sort Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="w-full md:w-auto px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-5">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block px-5 py-2 text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors duration-300 border border-pink-500 rounded-lg hover:bg-pink-50"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;