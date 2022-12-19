export type Pagination<T> = {
	count: number
	results: T[]
}

export type ServerErrorType = {
	details?: string | []
}
