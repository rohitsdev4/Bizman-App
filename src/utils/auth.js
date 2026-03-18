/**
 * Validates user credentials.
 *
 * IMPORTANT SECURITY NOTE:
 * In this client-side simulation, we use environment variables prefixed with VITE_.
 * Note that in a production application, these variables are bundled into the
 * client-side code and are visible to anyone inspecting the source.
 *
 * To properly secure this application, this logic MUST be moved to a backend
 * server, and this function should be replaced with a real API call (e.g., using fetch).
 *
 * @param {string} email - The email entered by the user.
 * @param {string} password - The password entered by the user.
 * @returns {Promise<boolean>} - A promise that resolves to true if credentials match, false otherwise.
 */
export const validateCredentials = async (email, password) => {
  // Simulate network delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In a Vite environment, these are replaced at build time.
  // For testing/simulation, we use these values.
  const correctEmail = import.meta.env?.VITE_USER_EMAIL;
  const correctPassword = import.meta.env?.VITE_USER_PASSWORD;

  if (!email || !password || !correctEmail || !correctPassword) {
    return false;
  }

  return email === correctEmail && password === correctPassword;
};
