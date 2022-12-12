import { AxiosResponse } from "axios"

import { RegisterPayload, LoginPayload } from "./types"
import { request } from "../../config"
import { User } from "shared/types"

export const AUTH = {
	register(payload: RegisterPayload) {
		return request().post("/registration/", payload)
	},

	auth(payload: LoginPayload) {
		return request().post(`/auth/login/`, payload)
	},

	getMe(): Promise<AxiosResponse<User>> {
		return request().get("/auth/user/")
	}
}
