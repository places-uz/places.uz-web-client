export interface RegisterPayload {
	first_name: string
	last_name: string
	username: string
	email: string
	password1: string
	password2: string
}

export interface LoginPayload {
	username: string
	password: string
}
