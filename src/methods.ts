import { currencyCodeSymbolMapping } from "./currencyCodeSymbolMapping";
import type { CurrencyCode } from './currencyCodeSymbolMapping';


/**
 * 
 * @param code Code of the currency.
 * @returns true/false if the code is valid currency code.
 */
export const isValidCurrencyCode = (code: CurrencyCode): boolean => Boolean(currencyCodeSymbolMapping[code]);


/**
 * 
 * @param symbol Symbol of the currency.
 * @returns true/false if the currency symbol is valid. 
 */
export const isValidCurrencySymbol = (symbol: string):boolean => Boolean((Object.keys(currencyCodeSymbolMapping) as CurrencyCode[]).find((key) => currencyCodeSymbolMapping[key] === symbol));

/**
 * 
 * @param symbol Symbol of the currency. For Example USD.
 * @returns the code of the currency for that symbol
 */
export const getSymbolFromCode = (code: CurrencyCode): string | undefined => currencyCodeSymbolMapping[code];


/**
 * 
 * @param code Code of the currency. For Example $
 * @returns the symbol of the currency for that code
 */
export const getCodesFromSymbol = (symbol: string): CurrencyCode[] | undefined => (Object.keys(currencyCodeSymbolMapping) as CurrencyCode[]).filter((key) => currencyCodeSymbolMapping[key] === symbol);