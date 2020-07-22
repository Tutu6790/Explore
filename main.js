var date = new Date();
var time = date.getHours();
var greet = document.getElementById('greet');

if (time < 12) {
    greet.innerHTML = "Good Morning! Its a new day to do something great!";
    
}else if (time < 17) {
    greet.innerHTML = "Good Afternoon! hope your day is going just fine";
}else {
    greet.innerHTML = "Good Evening! Hope you had a great day"
}