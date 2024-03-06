//Необходимо создать следующие функции для ДЗ module2-task1:
/* 1. Функция для проверки длины строки:
-входные данные: строка для проверки и длина строки для проверки.
-result: если длина приходящей строки меньше или совпадает c length - приходит true, иначе false. */

const compareLength = (input = '', length = 1) => input.length <= length;

compareLength('проверяемая строка', 20);
compareLength('проверяемая строка', 18);
compareLength('проверяемая строка', 10);

/* 2. Функция для проверки является-ли строка палиндромом:
- Вывод: если да - true, иначе false.
- Функция учитывает регистр и не учитывает пробелы. */

function isPalindrome(input = '') {
  const normalizeString = input.replaceAll(' ', '').toUpperCase();
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

/* 3. Функция, извлекающая цифры от 0 до 9 из строки и возвращающая их в виде целого положительного числа.
Если в строке нет чисел - возвращается NaN;  */

function getNumber(input) {
  const str = input.toString();
  let result = '';
  for (let i = 0; i < input.length; i++) {
    const digit = parseInt(str[i], 10);
    if (!Number.isNaN(digit)) {
      result += digit;
    }
  }
  return result ? parseInt(result, 10) : NaN;
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');

/* 4. Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи
в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна.
Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки. */


// Функция для преобразования времени в минуты. Принимает строку формата часы:минуты и возвращает числовое значение в минутах.
function convertToMinutes(time = '') {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function isFitsInTime(startDay = '', endDay = '', appTime = '', appDuration = 1) {
  const startMinutes = convertToMinutes(startDay);
  const endMinutes = convertToMinutes(endDay);
  const appMinutes = convertToMinutes(appTime);

  const endOfAppMinutes = appMinutes + appDuration;
  return appMinutes >= startMinutes && endOfAppMinutes <= endMinutes;
}

isFitsInTime('09:00', '17:00', '10:30', 90);
isFitsInTime('8:0', '10:0', '8:0', 120);
isFitsInTime('08:00', '14:30', '14:00', 90);
isFitsInTime('14:00', '17:30', '08:0', 90);
isFitsInTime('8:00', '17:30', '08:00', 900);
