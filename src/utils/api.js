// apiUtils.js

/**
 * Executes a fetch request to the specified URL with the given options.
 * @param {string} url - The URL to fetch.
 * @param {string} [method="GET"] - The HTTP method to use (default is GET).
 * @param {Object} [body=null] - The body of the request, for methods like POST.
 * @returns {Promise<any>} - The response data.
 */
export const fetchAPI = async (url, options = {}) => {
  const headers = { "Content-Type": "application/json" };

  const { method = "GET", body = null } = options;

  const requestOptions = {
    headers,
    method,
  };
  if (body && (method === "POST" || method === "PUT")) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
