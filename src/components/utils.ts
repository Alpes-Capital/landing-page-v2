/**
 * Flattens an object into a single level object.
 * Code from https://stackoverflow.com/a/65883097/11699778 , thx to gkunz on StackOverflow
* @param {object} obj - The object that needs to be flattened.
* @param {string} keySeparator - The separator to use between keys that are joined when flattening.
* @returns {object} - The flattened object.
* @example 
* flattenObject({
*   a: {
*     b: {
*       c: 1
*     }
*   }
* }, '.') => { 'a.b.c': 1 }
*/
export function toFlatPropertyMap(obj: object, keySeparator = '.') {
  	const flattenRecursive = (obj: object, parentProperty?: string, propertyMap: Record<string, unknown> = {}) => {
    	for(const [key, value] of Object.entries(obj)){
      	const property = parentProperty ? `${parentProperty}${keySeparator}${key}` : key;
      	if(value && typeof value === 'object'){
        		flattenRecursive(value, property, propertyMap);
      	} else {
        		propertyMap[property] = value;
	      }
    	}
    	return propertyMap;
  	};
  	return flattenRecursive(obj);
}

/**
 * Creates css vars in: "--varName: value;" format and exports it as an string Array, with each string containing a var or exports an Object containing key: var name, and value: value
* @param {object} jsTheme - The theme values to be converted to css vars.
* @param {boolean} [toArray=false] - Boolean that defines result will be returned as an Array or an Object. Defaults to false
* @param {string?} [namespace] - Defines the namespace to use for the css vars. Is optional and defaults to "".
* @returns {string[]|object} - Return either an string array: '--varName: value;' or an object: {'--varName': value}
*/
export function makeCssThemeVars<T extends true | false = false>(
	jsTheme: Object, toArray?: T, namespace?: string
	): T extends true ? string[] : Object {
   const flattenedObject = toFlatPropertyMap(jsTheme, '-')
	const recordEntries = Object.entries(flattenedObject)

	if(toArray) return recordEntries.map(
		([key, value]) => `--${namespace ? `${namespace}-` : ''}${key}: ${value};`
	) as string[]
	return recordEntries.reduce(
      (cssTheme, [key, value]) => ({
         ...cssTheme,
         [`--${namespace ? `${namespace}-` : ``}${key}`]: value
      }), {}
   ) as any
}


/**
 * Converts a degree value to a radian value.
 * @param {number} degrees - The degree value to be converted.
 * @returns {number} The converted radian value.
 */
export const degToRad = (degrees: number): number => degrees * (Math.PI / 180)

/**
 * Converts a value from one range to another.
 * @param {number} val - The value to be converted.
 * @param {number} inMin - The minimum value of the input range.
 * @param {number} inMax - The maximum value of the input range.
 * @param {number} outMin - The minimum value of the output range.
 * @param {number} outMax - The maximum value of the output range.
 * @returns {number} The converted value.
 * @example
 * scale(0, 0, 100, 0, 1) => 0
 * scale(50, 0, 100, 0, 1) => 0.5
 * scale(100, 0, 100, 0, 1) => 1
*/
export function scale (val: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
   return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/**
 * Check if a string against regex patterns passed in an array.
 * @param {string} string - The string to be checked.
 * @param {RegExp[]} rgxArr - The array of regex patterns to be checked against.
 * @returns {boolean} - Returns true if the string matches any of the regex patterns.
 * @example
 * matchString('hello', [/h/, /e/]) => true
 * matchString('hello', [/lb/, /x/]) => false
 */
export function checkStrMatchAnyOfRgxArr (string: string, rgxArr: RegExp[]): boolean {
   for(let i = 0; i < rgxArr.length; i++) {
      if(string.match(rgxArr[i])) return true
   }
   return false
}

/**
 * Generates a sitemap string.
 * @param {string} basePath - The current projects basePath
 * @param {{url: string, lastMod?: string, changeFreq?: string, priority?: number }[]} routes - The array of routes containing the url, lastMod, changeFreq and priority sitemap properties for each.
 * @param {string[]?} sitemaps - Other sitemap sources that is optional.
 * @returns {string} - The generated sitemap string.
 * @example
 * generateSitemap('/', [
 *  { url: '/', lastMod: '2020-01-01', changeFreq: 'daily', priority: 1 },
 * { url: '/about', lastMod: '2020-01-01', changeFreq: 'daily', priority: 0.8 },
 * { url: '/contact', lastMod: '2020-01-01', changeFreq: 'daily', priority: 0.7 }
 * ])
 */
export function generateSitemap (
	host: string, 
	routes?: { url: string, lastmod?: string, changefreq?: string, priority?: string }[], 
	sitemaps?: string[]): string {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	${routes ? `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
      routes.map(page => {
      return `
		<url>
         <loc>${host}${page.url}</loc>
         <lastmod>${page.lastmod}</lastmod>
         <changefreq>${page.changefreq}</changefreq>
         <priority>${page.priority}</priority>
		</url>`
   }).join('')}
	</urlset>` : ''}
	${sitemaps ? `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
	sitemaps.map(sitemap => {
		return `
		<sitemap>
			<loc>${host}${sitemap}</loc>
		</sitemap>`
	}).join('')}
	</sitemapindex>` : ''}`

   return sitemap
}