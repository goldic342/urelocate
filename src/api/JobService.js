import axios from 'axios'

export default class JobService {
  /**
   * Fetches a list of jobs from the remote server.
   * @param {number} [page=1] - The page number to fetch. Defaults to 1.
   * @param {number} [pageSize=10] - The number of jobs to include in each page.
   * @param {string} location - The location to search for jobs.
   * @param {string[]} techStack - The list of technologies to filter by. (Frontend, backend, ML)
   * @param {string[]} tools - The list of tools like to filter by. (React, Django, python, etc)
   * @returns {Promise<{jobs: Job[], total: number}>} - A promise that resolves to an object with the jobs list and the total number of jobs.
   */
  static async getJobs(page = 1, pageSize = 10, location, techStack, tools) {
    const response = await axios.post('http://127.0.0.1/jobs', {
      data: {
        page,
        page_size: pageSize,
        location,
        keywords: [...techStack, ...tools].join(', '),
      },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': navigator.userAgent, 
      },
    })

    return response.data
  }
}
