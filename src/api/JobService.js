import axios from 'axios'

export default class JobService {
  /**
   * Retrieves a list of jobs from the server.
   *
   * @param {number} [page=1] - The page number of the results to retrieve.
   * @param {number} [pageSize] - The number of jobs per page.
   * @param {string} [location] - The location to filter jobs by.
   * @param {Array} [keywords] - The keywords to filter jobs by.
   * @param {number} [salary] - The salary range to filter jobs by.
   * @return {Promise<Object>} - A promise that resolves to the response data.
   */
  static async getJobs(page = 1, pageSize, location, keywords, salary) {
    const response = await axios.post('http://127.0.0.1/jobs', {
      data: {
        page,
        page_size: pageSize,
        location,
        salary,
        keywords: keywords.join(', '),
      },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': navigator.userAgent,
      },
    })

    return response.data
  }
}
