import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "locales/en.json"
import uz from "locales/uz.json"

i18n.use(initReactI18next).init({
	resources: {
		en,
		uz
	},
	lng: "en",
	fallbackLng: "en",

	ns: ["translations"],
	defaultNS: "translations",

	interpolation: {
		escapeValue: false
	}
})

export default i18n
