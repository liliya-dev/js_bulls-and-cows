'use strict';

/**
 * Implement bullsAndCows function:
 *
 * Function takes 2 strings: generatedNumber (generated by computer) and
 * enteredNumber (entered by player) and returns count of bulls and cows
 * according to rules (see readme.md). Each parameter should be exactly 4 digits
 * long.
 *
 * Function returns result as object with properties 'bulls' and 'cows' where
 * 'result.bulls' is a count of bulls and result.cows is a count of cows.
 *
 * If wrong parameter enteredNumber is given function returns undefined.
 *
 * bullsAndCows('1234', '1345') === [1, 2]
 * bullsAndCows('1234', '1234') === [4, 0]
 * bullsAndCows('1234', '') === undefined
 * bullsAndCows('1234', '12') === undefined
 * bullsAndCows('1234', 'asdf') === undefined
 * bullsAndCows('1234', '1234567890') === undefined
 *
 * @param {string} generatedNumber - generated by computer
 * @param {string} enteredNumber - entered by a player
 *
 * @return {object} - like {bulls: 0, cows: 0}
 */
function bullsAndCows(generatedNumber, enteredNumber) {
  let bullsNum = 0;
  let cowsNum = 0;

  if (enteredNumber === undefined
    || generatedNumber.length !== enteredNumber.length
    || !isRepeat(enteredNumber)) {
    return undefined;
  }

  if (!isRepeat(enteredNumber)) {
    return undefined;
  }

  for (let i = 0; i < generatedNumber.length; i++) {
    if (generatedNumber[i] === enteredNumber[i]) {
      bullsNum++;
    } else if (generatedNumber.indexOf(enteredNumber[i]) > -1) {
      cowsNum++;
    }
  }

  const bullsCows = {
    bulls: bullsNum,
    cows: cowsNum,
  };

  return bullsCows;
}

function isRepeat(number) {
  const sortedStr = number.split('').sort().join('');

  for (let i = 0; i < sortedStr.length; i++) {
    if (sortedStr[i] === sortedStr[i + 1]) {
      return false;
    }
  }

  return true;
}

module.exports = bullsAndCows;
