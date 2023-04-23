import { useState } from 'react';

export default (callback) => {
  const [data, setData] = useState({})

  const request = async (...args) => {
    try {
      const response = await callback(args)
      console.log(response)
      setData(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  return { request, data }
}
