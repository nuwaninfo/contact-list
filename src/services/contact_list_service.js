import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default { getAll }
