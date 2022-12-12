import { toPng, toSvg } from "html-to-image"

export const DOM = {
	convertDOMElementToImage: {
		_download(dataUrl: string, name: string, format: "svg" | "png") {
			const link = document.createElement("a")
			link.download = `${name}.${format}`
			link.href = dataUrl
			link.click()
		},

		/**
		 * Converts HTML Element to PNG and Downloads it
		 * @function
		 * @param {HTMLElement} ref - Reference Element.
		 * @param {string} name - Name of the file
		 */
		toPNG(ref: HTMLElement, name: string) {
			toPng(ref, { cacheBust: true })
				.then((dataUrl) => this._download(dataUrl, name, "png"))
				.catch((err) => {
					console.log(err)
				})
		},

		/**
		 * Converts HTML Element to SVG and Downloads it
		 * @function
		 * @param {HTMLElement} ref - Reference Element.
		 * @param {string} name - Name of the file
		 */
		toSVG(ref: HTMLElement, name: string) {
			toSvg(ref, { cacheBust: true })
				.then((dataUrl) => this._download(dataUrl, name, "svg"))
				.catch((err) => {
					console.log(err)
				})
		}
	}
}
