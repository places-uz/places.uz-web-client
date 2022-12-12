import { Theme, themes } from "../constants/themes"
export type { Theme } from "../constants/themes"

export interface User {
	first_name: string
	last_name: string
	username: string
	email: string

	places?: Place[]
}

export interface Place {
	id: number
	name: string
	slug: string
	phone: string
	address: string
	theme: Theme

	// Not Required Fields
	information?: string
	logo?: string
	cover?: string
	images?: string[]
	work_hours?: {
		from: string
		to: string
	}

	categories?: Category[]
}

export interface Category {
	id: number
	name: string

	products?: Product[]
}

export interface Product {
	id: number
	name: string
	price: string

	// Not Required Fields
	description?: string
	cover?: string
	images?: string[]
}
