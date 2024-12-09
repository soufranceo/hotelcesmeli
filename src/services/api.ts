export const CURRENCY_API_URL = 'https://api.frankfurter.app/latest';

export async function fetchCurrencyRates(): Promise<{
  USD: number;
  EUR: number;
}> {
  try {
    const response = await fetch(`${CURRENCY_API_URL}?from=TRY&to=USD,EUR`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      USD: 1 / data.rates.USD,
      EUR: 1 / data.rates.EUR
    };
  } catch (error) {
    console.error('Error fetching rates:', error);
    return {
      USD: 0,
      EUR: 0
    };
  }
}