// Check for User's Birthday
// REF: http://codepen.io/manikoth/pen/BymXwR?editors=101
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date = new Date();

var birthday = {
  month: date.getMonth(),
  day: date.getUTCDate(),
  check: date.getMonth() + "/" + date.getUTCDate(), 
  user: ['4/6', '9/23', '10/1', '1/11', '12/24', '7/7']
};

if (birthday.check == '4/6', '9/23', '10/1', '1/11', '12/24', '7/7') {
  alert('Happy Birthday!');
}
console.log(birthday.check);

// Get & Store Today's Date
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

console.log(Date);

// Remember 0 is January, 1 is February, etc.
var today;

// *IF* users stored birthday is equal to: "1/11" 
// Add class `highlight`
// REF: http://api.jquery.com/addclass
