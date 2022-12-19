import axios from "axios"

export const domain =
	"http://165.232.88.80:8000" ||
	`${window.location.protocol}//${window.location.hostname}`

const baseAxios = axios.create({
	baseURL: `${domain}/api/v1/`
})

baseAxios.interceptors.request.use((config) => ({
	...config
}))

export default baseAxios
