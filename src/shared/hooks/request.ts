import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState
} from "react"
import { useNavigate } from "react-router-dom"
import baseAxios from "./utils/request"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { Pagination, ServerErrorType } from "./types"
import { auth, signOut } from "./utils/auth"
import { uniqBy } from "lodash"

interface SuccessResponse<R> {
	success: true
	error: undefined
	response: R
}

interface ErrorResponse {
	success: false
	error: AxiosResponse<ServerErrorType>
	response: undefined
}

export type Response<R> = SuccessResponse<R> | ErrorResponse

export type RequestReturns<R> = {
	loading: boolean
	request: (overrideOptions?: AxiosRequestConfig) => Promise<Response<R>>
	error?: AxiosResponse<ServerErrorType> | undefined
	response?: R
	setResponse: Dispatch<SetStateAction<R | undefined>>
	setError: Dispatch<SetStateAction<AxiosResponse<ServerErrorType> | undefined>>
	setLoading: Dispatch<SetStateAction<boolean>>
}

export type InfiniteScrollReturns<R> = RequestReturns<R> & {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ref: (node: any) => void
	hasMore: boolean
	reload: () => Promise<void>
	reset: () => void
}

export function usePostRequest<R>(
	options: AxiosRequestConfig = {}
): RequestReturns<R> {
	return useRequest({ method: "POST", ...options })
}

export function usePutRequest<R>(
	options: AxiosRequestConfig = {}
): RequestReturns<R> {
	return useRequest({ method: "PUT", ...options })
}

export function useGetRequest<R>(
	options: AxiosRequestConfig = {}
): RequestReturns<R> {
	return useRequest({ method: "GET", ...options })
}

export function useDeleteRequest<R>(
	options: AxiosRequestConfig = {}
): RequestReturns<R> {
	return useRequest({ method: "DELETE", ...options })
}

export function useRequest<R>(
	options: AxiosRequestConfig = {}
): RequestReturns<R> {
	const [response, setResponse] = useState<R>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<
		AxiosResponse<ServerErrorType> | undefined
	>()

	const navigate = useNavigate()

	async function request(
		overrideOptions: AxiosRequestConfig = {},
		sync = false
	): Promise<Response<R>> {
		setLoading(true)

		try {
			const { data } = await baseAxios({
				...auth(),
				...options,
				...overrideOptions
			})
			setResponse(data)
			console.log("edwed", response)
			return { response: data, success: true } as Response<R>
		} catch (e) {
			if (!axios.isAxiosError(e)) {
				throw e
			}

			setError(e.response as AxiosResponse<ServerErrorType>)
			if (e.response === undefined) {
				alert("Проверьте интернет соединение")
			} else if (e.response.status >= 500) {
				alert("Ошибка сервера.")
			} else if (e.response.status === 401) {
				signOut(navigate)
			}

			return {
				error: e.response as AxiosResponse<ServerErrorType>,
				success: false
			} as Response<R>
		} finally {
			if (!sync) setLoading(false)
		}
	}

	return {
		loading,
		request,
		error,
		response,
		setResponse,
		setError,
		setLoading
	}
}

export function useLoad<R>(
	options: AxiosRequestConfig,
	dependencies = []
): RequestReturns<R> {
	const request = useRequest<R>({ method: "GET", ...options })

	useEffect(() => {
		request.request()
	}, dependencies)

	return request
}

export function useInfiniteScroll<R>(
	options: AxiosRequestConfig,
	dependencies = []
): InfiniteScrollReturns<Pagination<R>> {
	const [page, setPage] = useState(1)
	const items = useGetRequest<Pagination<R>>({
		...options,
		params: { ...options.params, page }
	})
	const [hasMore, setHasMore] = useState(false)
	const observer = useRef<IntersectionObserver>()

	useEffect(() => {
		loadItems()
	}, [page, ...dependencies])

	async function loadItems() {
		const { response } = await items.request()
		const oldItems = items.response ? items.response.results : []
		const newItems = response ? response.results : []

		if (!response) return

		items.setResponse({
			count: response ? response.count : 0,
			results: uniqBy([...oldItems, ...newItems], "id")
		})
		setHasMore(oldItems.length + newItems.length !== response.count)
	}

	function reset() {
		items.setResponse({ count: 0, results: [] })
		setPage(1)
	}

	async function reload() {
		reset()
		await items.request({ params: { ...options.params, page: 1 } })
	}

	const ref = useCallback(
		(node: Element) => {
			if (items.loading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPage(page + 1)
				}
			})
			if (node) observer.current.observe(node)
		},
		[hasMore, items.loading, page]
	)

	return { ref, ...items, hasMore, reload, reset }
}
