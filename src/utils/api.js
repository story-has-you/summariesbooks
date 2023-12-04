// apiUtils.js

import Cookies from "js-cookie";

/**
 * Executes a fetch request to the specified URL with the given options.
 * @param {string} url - The URL to fetch.
 * @param {string} [method="GET"] - The HTTP method to use (default is GET).
 * @param {Object} [body=null] - The body of the request, for methods like POST.
 * @returns {Promise<any>} - The response data.
 */
export const fetchAPI = async (url, options = {}) => {
  const openai_key = Cookies.get("openai_key");
  const headers = {
    "Content-Type": "application/json",
    "openai-key": openai_key || "",
  };

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

export const ok = (data) => {
  return Response.json({ data: data, ok: true, message: "SUCCESS" });
};

export const fail = (message) => {
  return Response.json({
    data: null,
    ok: false,
    message: message == null ? "FAIL" : message,
  });
};
