import { ref, reactive } from "vue"
import { axiosClient } from '../utils/client.js'

const cacheMap = reactive(new Map())
const updateCache = (url, data) => cacheMap.set(url, data)
const clearCache = (url) => cacheMap.delete(url)

export function useFetcher(configFunc) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const sendRequest = async (...params) => {
    const config = configFunc(...params)
    const cached = config.method == "get"

    if (config.forced) clearCache(config.url)
    
    if (cached && cacheMap.has(config.url)) {
      data.value = cacheMap.get(config.url)
      return
    }

    error.value = null
    loading.value = true
    try {
      const res = await axiosClient.request(config)
      data.value = res.data
      if (cached) updateCache(config.url, res.data)
    } catch (err) {
      error.value = err
    }
    loading.value = false
  };

  return {
    data, loading, error, sendRequest
  }
}