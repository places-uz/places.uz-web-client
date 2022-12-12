import { request } from "../../config"
import { AxiosResponse } from "axios"
import { Place } from "shared/types"

export const PLACES = {
	getList(): Promise<AxiosResponse<Place[]>> {
		return request().get("/places/")
	}
}
