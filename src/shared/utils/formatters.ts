import { domain } from "../hooks/utils/request"

export const formatters = {
	addDomain: (url: string) => `${domain}${url}`
}
