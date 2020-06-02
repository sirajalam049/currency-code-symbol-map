import { currencyCodeSymbolMapping } from "./currencyCodeSymbolMapping";
import type { CurrencySymbol } from './currencyCodeSymbolMapping';


/**
 * 
 * @param code Code of the currency.
 * @returns true/false if the code is valid currency code.
 */
export const isValidCurrencyCode = (code: string): boolean => Boolean((Object.keys(currencyCodeSymbolMapping) as CurrencySymbol[]).find((key) => currencyCodeSymbolMapping[key] === code));


/**
 * 
 * @param symbol Symbol of the currency.
 * @returns true/false if the currency symbol is valid. 
 */
export const isValidCurrencySymbol = (symbol: CurrencySymbol):boolean => Boolean()

/**
 * 
 * @param symbol Symbol of the currency. For Example USD.
 * @returns the code of the currency for that symbol
 */
export const getCodeFromSymbol = (symbol: CurrencySymbol): string | undefined => currencyCodeSymbolMapping[symbol];


/**
 * 
 * @param code Code of the currency. For Example $
 * @returns the symbol of the currency for that code
 */
export const getSymbolsFromCode = (code: string): CurrencySymbol[] | undefined => (Object.keys(currencyCodeSymbolMapping) as CurrencySymbol[]).filter((key) => currencyCodeSymbolMapping[key] === code);