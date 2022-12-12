import { Place } from "../shared/types"

export const MOCK_DATA: Place[] = [
	{
		id: 32,
		name: "Zaytoon",
		slug: "zaytoon",
		logo: "https://www.zaytoonwpg.com/wp-content/uploads/2021/08/zaytoon_logo-01.png",
		cover:
			"https://zaytoonrestaurant.co.uk/wp-content/uploads/2018/05/zaytoon_restaurant-46.jpg",
		information:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, cum deleniti dicta explicabo hic impedit minima pariatur possimus qui! Accusantium consequuntur eligendi, ipsum obcaecati possimus saepe temporibus. Aliquam, odio?",
		theme: "orange",
		phone: "(90) 947-32-17",
		address: "Bukhara city, 25A",

		work_hours: {
			from: "09:00",
			to: "22:00"
		},

		categories: [
			{
				id: 1,
				name: "Alcohol",
				products: [
					{
						id: 1,
						name: "Glintwayne",
						cover: "http://armedia.am/static/news/b/2017/01/42595.jpg",
						description:
							"Glühwein is usually prepared from red wine, heated and spiced with cinnamon sticks, cloves, star aniseed, orange, sugar and at times vanilla pods.",
						price: "220,000 UZS"
					}
				]
			},
			{
				id: 2,
				name: "Non-alcohol",
				products: [
					{
						id: 2,
						name: "Green Tea",
						cover:
							"https://assets.epicurious.com/photos/5887d21b5f76684c78cf57db/16:9/w_2560%2Cc_limit/green_tea_24012017.jpg",
						description:
							"Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas. Green tea originated in China, and since then its production and manufacture has spread to other countries in East Asia.",
						price: "8,000 UZS"
					}
				]
			}
		]
	},

	{
		id: 52,
		name: "Bella Italia",
		slug: "bellaitalia",
		logo: "https://bentleybridge.co.uk/sites/bentley_bridge/files/styles/shop_logo/public/images/shops/logos/bellav2logo-greenbackground.jpg?itok=5Sr2omCX",
		cover:
			"https://images.ctfassets.net/j9domijbag84/6D47qcoqyMVEehvAmHIEGu/d46d3f1383e2bce6b68d674172db51e3/SEO_Tile_1.jpg",
		information:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, cum deleniti dicta explicabo hic impedit minima pariatur possimus qui! Accusantium consequuntur eligendi, ipsum obcaecati possimus saepe temporibus. Aliquam, odio?",
		theme: "dark",
		phone: "(90) 847-22-48",
		address: "Bukhara city, 25A",

		work_hours: {
			from: "10:00",
			to: "23:00"
		},

		categories: [
			{
				id: 1,
				name: "Hot Meals",
				products: [
					{
						id: 1,
						name: "Homemade dumplings",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/4935845107510187.jpg",
						description: "Vareniki with mashed potatoes and fried chanterelles",
						price: "50,000 UZS"
					}
				]
			},
			{
				id: 2,
				name: "Coctails",
				products: [
					{
						id: 2,
						name: "Bloody Mary",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/887566834732206.jpeg",
						description: "Vodka, tomato juice, lemon, tabasco, celery",
						price: "48,000 UZS"
					}
				]
			}
		]
	}
]
