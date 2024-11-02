const monthElement = document.getElementById('month');
const dayElement = document.getElementById('day');
const dateElement = document.getElementById('date');
const yearElement = document.getElementById('year');

const date = new Date();

const monthName = date.getMonth();
const dayName = date.getDay();
const currentDate = date.getDate();
const currentYear = date.getFullYear();

console.log(`Month Name in number : ${monthName}`);
console.log(`Day Name in number : ${dayName}`);

// To convert the month & day in number to String Values
const currentMonth = date.toLocaleString("en", {month: "long"});
const currentDay = date.toLocaleString('en', {weekday: 'long'});

console.log(currentMonth);
console.log(currentDay);
console.log(currentDate);
console.log(currentYear);

monthElement.innerHTML = currentMonth;
dayElement.textContent = currentDay;
dateElement.innerText = currentDate;
yearElement.innerText = currentYear;