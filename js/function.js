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

const getNumber = (str) => {
  if(typeof(str) === 'number'){
    return str;
  }

  return filterNumber(str).join('') ? +filterNumber(str).join('') : NaN;
};

getNumber('fwefw 222 dfs 3');
getNumber(231);

/* Принимает время преобразуя его в объект со свойствами часы и минуты */
function getTimeObj(inputTime){
  return {
    hours: +inputTime.split(':')[0],
    minute: +inputTime.split(':')[1]
  };
}

/* Конвертирует минуты в объект со свойствами часы и минуты */
function convertMinuteToTime(minute){
  return {
    hours: +`${minute / 60}`.split('.')[0],
    minute: minute % 60
  };
}

/* Определяет время окончания встречи, возвращая объект со свойствами часы и минуты */
function endMeetTime(time, duration){
  let concatTimeObj;
  const {hours: timeHours, minute: timeMinute} = getTimeObj(time);
  const {hours: durationHours, minute: durationMinute} = convertMinuteToTime(duration);
  if(timeMinute + durationMinute >= 60){
    concatTimeObj = {
      hours: +(`${((timeMinute + durationMinute) / 60)}`.split('.')[0]) + timeHours + durationHours,
      minute: (timeMinute + durationMinute) % 60
    };
  } else{
    concatTimeObj = {
      hours: timeHours + durationHours,
      minute: (timeMinute + durationMinute) % 60
    };
  }
  return concatTimeObj;

}


/* Проверяет выходит ли встреча за рамки рабочего дня */
function checkDurationMeet(startWorkDayTime, endWorkDayTime, startMeet, durationMeet) {

  const {hours: endMeetHours, minute: endMeetMinute} = endMeetTime(startMeet, durationMeet);
  const {hours: startWorkDayHours, minute: startWorkDayMinute} = getTimeObj(startWorkDayTime);
  const {hours: endWorkDayHours, minute: endWorkDayMinute} = getTimeObj(endWorkDayTime);
  const {hours: startMeetHours, minute: startMeetMinute} = getTimeObj(startMeet);

  if(startMeetHours < startWorkDayHours || (startMeetHours === startWorkDayHours && startMeetMinute < startWorkDayMinute)){
    return false;
  }

  if(endMeetHours < endWorkDayHours || (endMeetHours === endWorkDayHours && endMeetMinute <= endWorkDayMinute)){
    return true;
  }

  return false;
}

export {checkDurationMeet};
