import { NavigateFunction } from "react-router-dom"

export function auth() {
	const token = localStorage.getItem("token")
	return token
		? {
				headers: {
					Authorization: `Token ${token}`
				}
		  }
		: {}
}

export function signin({ user, token }: { user: unknown; token?: string }) {
	localStorage.setItem("user", JSON.stringify(user))
	localStorage.setItem("token", token as string)
}

export function signOut(navigate: NavigateFunction) {
	localStorage.removeItem("user")
	localStorage.removeItem("token")
	navigate("/")
	alert("loggedOut")
}

export function isAuthenticated() {
	return localStorage.getItem("user") && localStorage.getItem("token")
}
