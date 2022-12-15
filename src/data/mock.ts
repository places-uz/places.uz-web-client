import { Place } from "shared/types"

export const MOCK_DATA: Place[] = [
	{
		id: 1,
		name: "S&M",
		theme: "dark",
		phone: "(88) 377-70-00",
		address: "Ulitsa Bulata, Navoi, Uzbekistan",
		slug: "snmuz",
		logo: "https://i.ibb.co/5KR6dMk/107033650-819778531892470-480274350268255345-n.jpg",
		cover:
			"https://cdn.vox-cdn.com/thumbor/lsgIEqjDuvYzUnoDheU6FbLrEbE=/0x0:2048x1365/1200x900/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/59779955/Interlude.73.jpeg",
		information:
			"A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages.",

		categories: [
			{
				id: 1,
				name: "Горячие блюда",
				products: [
					{
						id: 1,
						name: "Вареники домашние",
						description: "Вареники с картофельным пюре и жареными лисичками",
						price: "45,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/4935845107510187.jpg"
					},

					{
						id: 2,
						name: "Грибной крем-суп",
						description:
							"Шампиньоны, морковь, лук репчатый, зеленый лук, 🌱 Веганское",
						price: "40,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/362243826136565.jpg"
					},

					{
						id: 3,
						name: "Бургер",
						description:
							"Говядина, салат, соленый огурец, помидор, мягкая булочка",
						price: "50,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/7782510771571853.jpg"
					},

					{
						id: 4,
						name: "Борщ",
						description: "Борщ из свеклы с салом и пампушками",
						price: "36,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/126628348688563.jpg"
					}
				]
			},

			{
				id: 2,
				name: "Салаты",

				products: [
					{
						id: 1,
						name: "Салат с авокадо и фетой",
						description:
							"Салат из спелого авокадо, сыра феты, маслинами и шпинатом",
						price: "25,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/598818438392393.jpg"
					},

					{
						id: 2,
						name: "Салат с Камамбером",
						description: "Запеченный сыр Камамбер со свежими овощами",
						price: "45,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/1593325156801055.jpg"
					},

					{
						id: 3,
						name: "Греческий салат",
						description:
							"Помидор, огурец свежий, оливки, сыр фета, оливковое масло",
						price: "35,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/2208107208935774.jpg"
					},

					{
						id: 4,
						name: "Гуакамоле",
						description: "Мексиканское гуакамоле с начос",
						price: "39,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/5768363319109880.jpg"
					}
				]
			},

			{
				id: 3,
				name: "Десерты",

				products: [
					{
						id: 1,
						name: "Малиновый мусс",
						description: "Малиновый мусс со сливками и малиновым сиропом",
						price: "20,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/616985337965459.jpg"
					},

					{
						id: 2,
						name: "Ванильное мороженое",
						description: "Ванильное мороженое с шоколадной начинкой",
						price: "35,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/651101588824651.jpg"
					},

					{
						id: 3,
						name: "Брауни с малиной",
						description: "Шоколадный брауни со свежей малиной",
						price: "15,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/1257317234410334.jpg"
					},

					{
						id: 4,
						name: "Мороженое ягодное",
						description: "Натуральное мороженое из толченых лесных ягод",
						price: "20,000 UZS",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/75967124396910101.jpg"
					}
				]
			},

			{
				id: 4,
				name: "Завтраки",

				products: [
					{
						id: 1,
						name: "Английский завтрак",
						price: "60,000 UZS",
						description: "Яйца жареные, бекон, тост, томаты черри",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/9610964997582898.jpg"
					},

					{
						id: 2,
						name: "Овсяная каша",
						price: "25,000 UZS",
						description: "Каша овсяная с сезонными ягодами и ягодным сиропом",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/471313911505389.jpg"
					},

					{
						id: 3,
						name: "Сырники с клубничным джемом",
						price: "40,000 UZS",
						description:
							"Сырники из свежего творога с клубничным джемом и сметаной",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/4236463631551108.jpg"
					},

					{
						id: 4,
						name: "Тост с авокадо",
						price: "50,000 UZS",
						description: "Ржаной тост с авокадо и вареным яйцом",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/24614957631101014.jpg"
					},

					{
						id: 5,
						name: "Сом на тыквенном пюре",
						price: "80,000 UZS",
						description:
							"Филе сома запеченное с молодой картошкой. Подается с салатом и тыквенным пюре",
						cover:
							"https://odm-fs.fra1.digitaloceanspaces.com/img/659733877193862.jpg"
					}
				]
			},

			{
				id: 5,
				name: "Безалкогольные напитки",
				products: [
					{
						id: 1,
						name: "Чай",
						price: "8,000 UZS"
					},

					{
						id: 2,
						name: "Кофе",
						price: "12,000 UZS"
					}
				]
			}
		]
	}
]
