import axios from 'axios'

const httpPokeapi = axios.create({
  baseURL: import.meta.env.VITE_POKEAPI_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
})

// export const getData = async (endpoint) => {
//   try {
//     const response = await httpPokeapi.get(endpoint)
//     return response.data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     throw error
//   }
// }

// export const postData = async (endpoint, data) => {
//   try {
//     const response = await httpPokeapi.post(endpoint, data)
//     return response.data
//   } catch (error) {
//     console.error('Error posting data:', error)
//     throw error
//   }
// }

export default httpPokeapi
