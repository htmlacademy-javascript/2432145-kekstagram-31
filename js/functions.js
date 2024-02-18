//Необходимо создать следующие функции для ДЗ module2-task1:
/* 1. Функция для проверки длины строки:
-Входные данные: строка для проверки и длина строки для проверки.
-Результат: если длина приходящей строки меньше или совпадает c length - приходит true, иначе false. */

/* function compareLength (string, length) {
  if (string.length - 1 <= length) {
    return true;
  }
  return false;
}

compareLength('проверяемая строка', 20);
compareLength('проверяемая строка', 18);
compareLength('проверяемая строка', 10); */

/* 2. Функция для проверки является-ли строка палиндромом:
- Вывод: если да - true, иначе false.
- Функция учитывает регистр и не учитывает пробелы. */

function isPalindrome (string) {
  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  let palindromeString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    palindromeString += normalizeString[i];
  }
  return palindromeString === normalizeString;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');
