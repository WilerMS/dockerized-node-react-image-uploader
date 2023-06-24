import { useState } from 'react'
import { delay } from 'utils/delay'

export const useFiles = (url: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>()
  const [data, setData] = useState<string>()

  const postFile = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      setIsLoading(true)
      setError(null)
      await delay(3000)
      const res = await fetch(`${url}`, {
        method: 'POST',
        body: formData,
        headers: {}
      })
      const newData = await res.text()
      setData(newData)
    } catch (err: any) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    error,
    isLoading,
    postFile
  }
}
