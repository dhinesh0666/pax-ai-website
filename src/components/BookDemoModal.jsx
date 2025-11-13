import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyLocation: '',
    companySize: '',
    name: '',
    email: '',
    jobRole: '',
    interestedFeatures: [],
    projectManagement: [],
    projectManagementOther: '',
    codeCollaboration: [],
    codeCollaborationOther: '',
    documentation: [],
    documentationOther: '',
    internalChat: [],
    internalChatOther: '',
    onlineMeeting: [],
    onlineMeetingOther: '',
    organizationWorkspace: [],
    organizationWorkspaceOther: ''
  });

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const features = [
    'AI Project Scores',
    'AI Project/People Summary',
    'AI Chat',
    'Action Items Recommendations',
    'Context Aware Note Taker Agent'
  ];

  const platforms = {
    projectManagement: ['Jira', 'Asana'],
    codeCollaboration: ['GitHub', 'GitLab'],
    documentation: ['Confluence', 'Microsoft Word', 'Google Docs'],
    internalChat: ['Slack', 'MS Teams', 'Google Chat'],
    onlineMeeting: ['MS Teams', 'Google Meet', 'Zoom'],
    organizationWorkspace: ['Google Workspace', 'Microsoft 365']
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you! Our team will reach out to you soon.');
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full my-8 z-[9999]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-4 left-full ml-4 z-[10000] p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition shadow-lg"
            >
              <FaTimes className="text-gray-600 text-lg" />
            </button>

            <div className="overflow-y-visible">
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Column 1 - Text Content */}
                <div className="lg:pr-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                    Schedule a Meeting with <span className="text-gradient">Paxi.ai</span> Product Experts
                  </h2>
                  
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg font-semibold text-gray-800">
                      Thank you for showing interest in Paxi.ai
                    </p>
                    
                    <p className="leading-relaxed">
                      <strong>Paxi.ai</strong> is an Executive Management Tool that unifies data from multiple 
                      enterprise platforms and provides comprehensive performance & sentiment metrics across 
                      both projects and people in the organisation, enhanced with AI to deliver actionable 
                      insights that improve efficiency, performance, and decision-making across the enterprise.
                    </p>
                    
                    <p className="text-lg font-semibold text-blue-600 mt-6">
                      Complete the form and our experts will reach out to you.
                    </p>
                  </div>
                </div>

                {/* Column 2 - Form */}
                <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Company Location */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyLocation}
                        onChange={(e) => setFormData({ ...formData, companyLocation: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Company Size */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Size *
                      </label>
                      <select
                        required
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select company size</option>
                        {companySizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Job Role */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Job Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.jobRole}
                        onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Interested Features */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Which feature(s) of Paxi are you most interested in? *
                      </label>
                      <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-300">
                        {features.map(feature => (
                          <label key={feature} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                              type="checkbox"
                              checked={formData.interestedFeatures.includes(feature)}
                              onChange={() => handleCheckboxChange('interestedFeatures', feature)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{feature}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Project Management Platform */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Which Project Management Platform does your company use? *
                      </label>
                      <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-300">
                        {platforms.projectManagement.map(platform => (
                          <label key={platform} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                              type="checkbox"
                              checked={formData.projectManagement.includes(platform)}
                              onChange={() => handleCheckboxChange('projectManagement', platform)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Other (please specify)"
                            value={formData.projectManagementOther}
                            onChange={(e) => setFormData({ ...formData, projectManagementOther: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Code Collaboration Platform */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Which Code Collaboration Platform does your company use? *
                      </label>
                      <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-300">
                        {platforms.codeCollaboration.map(platform => (
                          <label key={platform} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                              type="checkbox"
                              checked={formData.codeCollaboration.includes(platform)}
                              onChange={() => handleCheckboxChange('codeCollaboration', platform)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Other (please specify)"
                            value={formData.codeCollaborationOther}
                            onChange={(e) => setFormData({ ...formData, codeCollaborationOther: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Documentation Platform */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Which Documentation Platform does your company use? *
                      </label>
                      <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-300">
                        {platforms.documentation.map(platform => (
                          <label key={platform} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                              type="checkbox"
                              checked={formData.documentation.includes(platform)}
                              onChange={() => handleCheckboxChange('documentation', platform)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Other (please specify)"
                            value={formData.documentationOther}
                            onChange={(e) => setFormData({ ...formData, documentationOther: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Internal Chat Communication Platform */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Which Internal Chat Communication Platform does your company use? *
                      </label>
                      <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-300">
                        {platforms.internalChat.map(platform => (
                          <label key={platform} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                              type="checkbox"
                              checked={formData.internalChat.includes(platform)}
                              onChange={() => handleCheckboxChange('internalChat', platform)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Other (please specify)"
                            value={formData.internalChatOther}
                            onChange={(e) => setFormData({ ...formData, internalChatOther: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Online Meeting Platform */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Which Online Meeting Platform does your company use? *
                      </label>
                      <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-300">
                        {platforms.onlineMeeting.map(platform => (
                          <label key={platform} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                              type="checkbox"
                              checked={formData.onlineMeeting.includes(platform)}
                              onChange={() => handleCheckboxChange('onlineMeeting', platform)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Other (please specify)"
                            value={formData.onlineMeetingOther}
                            onChange={(e) => setFormData({ ...formData, onlineMeetingOther: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Organization Workspace */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Which Organization Workspace does your company use? *
                      </label>
                      <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-300">
                        {platforms.organizationWorkspace.map(platform => (
                          <label key={platform} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input
                              type="checkbox"
                              checked={formData.organizationWorkspace.includes(platform)}
                              onChange={() => handleCheckboxChange('organizationWorkspace', platform)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Other (please specify)"
                            value={formData.organizationWorkspaceOther}
                            onChange={(e) => setFormData({ ...formData, organizationWorkspaceOther: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition transform hover:scale-105 mt-6"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default BookDemoModal;
