"server-only";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Wrapper function to handle API calls
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - The API endpoint
 * @param {object} options - Additional options (body, token)
 * @returns {Promise<{data: any, error: string|null}>}
 */
export async function handleApiRequest(method, endpoint, options = {}) {
  const { body, token } = options;

  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const fetchOptions = {
      method,
      headers,
      ...(body && { body: JSON.stringify(body) }),
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);
    const data = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: data.message || `Failed with status: ${response.status}`,
      };
    }

    return { data, error: null };
  } catch (error) {
    console.error(`API Error (${method} ${endpoint}):`, error);
    return {
      data: null,
      error: "An unexpected error occurred",
    };
  }
}
