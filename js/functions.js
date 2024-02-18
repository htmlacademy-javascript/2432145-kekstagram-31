//Необходимо создать следующие функции для ДЗ module2-task1:
/* 1. Функция для проверки длины строки:
-Входные данные: строка для проверки и длина строки для проверки.
-Результат: если длина приходящей строки меньше или совпадает length - приходит true, иначе false. */

function compareLength (string, length) {
  if (string.length - 1 <= length) {
    return true;
  }
  return false;
}


compareLength('проверяемая строка', 20);
compareLength('проверяемая строка', 18);
compareLength('проверяемая строка', 10);
