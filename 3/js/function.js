/* Функция для проверки длины строки.
 Она принимает строку, которую нужно проверить,
 и максимальную длину и возвращает true, если строка
 меньше или равна указанной длине,
 и false, если строка длиннее. */

const checkLength = (str, charCount) => str.length <= charCount;

checkLength('проверяемая строка', 20);

/* Функция для проверки, является ли строка палиндромом. */
const isPalindrom = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

isPalindrom('Кекс');

/* Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы.
Они не должны учитываться при проверке! */

const isPalindromHard = (str) => str.toLowerCase().replaceAll(' ', '') === str.toLowerCase().replaceAll(' ', '').split('').reverse().join('');

isPalindromHard('Лёша на полке клопа нашёл ');
/* Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и
возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN*/


const filterNumber = (str) => str.split('').filter((char) => char ? /\d/.test(char) : '');

const genNumber = (str) => {
  if(typeof(str) === 'number'){
    return str;
  }

  return filterNumber(str).join('') ? +filterNumber(str).join('') : NaN;
};

genNumber('fwefw 222 dfs 3');
genNumber(231);


