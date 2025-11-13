// Utility function to handle base path for GitHub Pages deployment
export const getBasePath = () => {
  // Check if we're in production (GitHub Pages) or development
  return import.meta.env.MODE === 'production' ? '/pax-ai-website' : '';
};

// Helper function to create proper URLs
export const createUrl = (path = '') => {
  const basePath = getBasePath();
  // Remove leading slash from path if it exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return basePath + (cleanPath ? `/${cleanPath}` : '');
};