/**
 * Converts numbers to Indian Rupees (Limit: 10 Lakh Crore).
 * @customfunction
 * @param {number} amount The number to convert.
 * @return {string} The amount in words.
 */
function convertDigits(amount) {
  // 1. Safety Guard: 10 Lakh Crore = 10,00,00,00,00,000
  const LIMIT = 10000000000000; 

  if (amount > LIMIT) {
    return "Error: Amount exceeds 10 Lakh Crore limit";
  }
  if (amount === 0) return "Zero Rupees Only";
  if (amount < 0) return "Negative amounts not supported";

  let parts = amount.toFixed(2).split(".");
  let rupeePart = parseInt(parts[0]);
  let paisaPart = parseInt(parts[1]);

  const singleDigits = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const doubleDigits = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tensDigits = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function getWords(num) {
    let str = "";
    if (num >= 100) {
      str += singleDigits[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
    }
    if (num >= 10 && num <= 19) {
      str += doubleDigits[num - 10] + " ";
    } else {
      if (num >= 20) {
        str += tensDigits[Math.floor(num / 10)] + " ";
        num %= 10;
      }
      if (num > 0) {
        str += singleDigits[num] + " ";
      }
    }
    return str;
  }

  function processIndianScales(num) {
    let words = "";
    // Handle Large Crores (e.g., 10,000 Crore)
    if (num >= 10000000) {
      words += processIndianScales(Math.floor(num / 10000000)) + " Crore ";
      num %= 10000000;
    }
    if (num >= 100000) {
      words += getWords(Math.floor(num / 100000)) + " Lakh ";
      num %= 100000;
    }
    if (num >= 1000) {
      words += getWords(Math.floor(num / 1000)) + " Thousand ";
      num %= 1000;
    }
    if (num > 0) {
      words += getWords(num);
    }
    return words.trim();
  }

  let finalString = "";
  if (rupeePart > 0) {
    finalString += processIndianScales(rupeePart) + " Rupees";
  }

  if (paisaPart > 0) {
    if (rupeePart > 0) finalString += " and ";
    finalString += getWords(paisaPart) + "Paise";
  }

  return finalString.trim() + " Only";
}

CustomFunctions.associate("convertDigits", convertDigits);
