//Необходимо создать следующие функции для ДЗ module2-task1:
/* 1. Функция для проверки длины строки:
-stringные данные: строка для проверки и длина строки для проверки.
-result: если длина приходящей строки меньше или совпадает c length - приходит true, иначе false. */

function compareLength(string, length) {
  return string.length - 1 <= length;
}


compareLength('проверяемая строка', 20);
compareLength('проверяемая строка', 18);
compareLength('проверяемая строка', 10);

/* 2. Функция для проверки является-ли строка палиндромом:
- Вывод: если да - true, иначе false.
- Функция учитывает регистр и не учитывает пробелы. */

function isPalindrome(string) {
  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  let palindromeString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    palindromeString += normalizeString.at(i);
  }
  return palindromeString === normalizeString;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

/* 3. Функция, извлекающая цифры от 0 до 9 из строки и возвращающая их в виде целого положительного числа.
Если в строке нет чисел - возвращается NaN;  */

function getNumber(string) {
  if (typeof string === 'number') {
    string = string.toString();
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const number = parseInt(char, 10);
    if (!Number.isNaN(number)) {
      result += number;
    }
  }
  return result === '' ? NaN : parseInt(result, 10);
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
