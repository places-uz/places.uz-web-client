import { Place } from "shared/types"

export const MOCK_DATA: Place[] = [
	{
		id: 1,
		name: "B&B",
		theme: "dark",
		phone: "(88) 377-70-00",
		address: "Tashkent, Uzbekistan",
		url: "bnbuz",
		logo: "data:image/jpeg;base64,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",
		cover:
			"https://cdn.vox-cdn.com/thumbor/lsgIEqjDuvYzUnoDheU6FbLrEbE=/0x0:2048x1365/1200x900/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/59779955/Interlude.73.jpeg",
		information:
			"A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages.",

		categories: [
			{
				id: 1,
				name: "Горячее",
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
				name: "Напитки",
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
