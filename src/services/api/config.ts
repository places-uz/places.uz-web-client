import axios from "axios"

export const BASE_URL = "http://165.232.88.80:8000"

export const token = () => {
	if (localStorage.getItem("username") && localStorage.getItem("password")) {
		return {
			username: localStorage.getItem("username") as string,
			password: localStorage.getItem("password") as string
		}
	}
}

export const request = () =>
	axios.create({
		baseURL: BASE_URL,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		},

		auth: token()
	})
