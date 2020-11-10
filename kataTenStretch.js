// Kata 10 - Talking Calendar

/*
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, 
and returns a new human readable date that looks like December 2nd, 2017.
*/

// to do
// get year (index / slice string method)
// get month (switch statement for number to month)
// get date - work out nd/st/rd 

const talkingCalendar = function(date) {
  
  // get year
  const year = date.slice(0, 4);

  // get month
  let month = date.slice(5, 7);
  switch (month) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';    
      break;
    case '09': 
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
  }

  // get day - and remove 0 if it is the first character
  let day = date.slice(8, 10);
  
  if(day[0] === '0') {
    day = day[1];
  }

  // get st/nd/rd/th
  switch (day) {
    case '1':
    case '21':
    case '31':
      day += 'st';
      break;
    case '2':
    case '22':
      day += 'nd';
      break;
    case '3':
    case '23':
      day += 'rd';
      break;
    default:
      day += 'th';
      break;
  }

  return `${month} ${day}, ${year}`;



};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
Expected results:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/