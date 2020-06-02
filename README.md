# Currency Code Symbol Map

Utility functions for currency symbols and codes.

---

## Install

    $ npm i currency-code-symbol-map
or

    $ yarn install currency-code-symbol-map

---

## Usage

It contains four utility functions along with a mapping of currency codes and symbols.

### 1. Map Codes from Symbol

A Symbol may belong to multiple codes. For example symbol for USD (US Dollar) and CAD (Canadian Dollar) is same, which is $. So this method returns an array of codes.

        import { getCodesFromSymbol } from "currency-code-symbol-map";

        console.log(getCodesFromSymbol('₹')) 
        // INR

If 

### 2. Map currency Symbol from Code

    import { getSymbolFromCode } from "currency-code-symbol-map";

    console.log(getSymbolFromCode('USD')) 
    // $

    console.log(getCodeFromSymbol('SOME INVALID SYMBOL'));
    // undefined

### 3. Validate currency currency symbol

    import { isValidCurrencySymbol } from "currency-code-symbol-map";

    console.log(isValidCurrencySymbol('$')) 
    // true

    console.log(isValidCurrencySymbol('%'));
    // false

### 4. Validate currency code

    import { isValidCurrencyCode } from "currency-code-symbol-map";

    console.log(isValidCurrencyCode('USD')) 
    // true

    console.log(isValidCurrencyCode('XYZ'));
    // false
