var currentDate = new Date(); 
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

renderCalendar();

function renderCalendar() {
    document.getElementById('calendar_item').innerHTML = "";

    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('currentDate').innerText = `${arr[month]} ${year}`;

    var lastDay_CurrentMonth = new Date(year, month + 1, 1 - 1);
    var lastDate_CurrentMonth = lastDay_CurrentMonth.getDate();
    var firstDay_CurrentMonth = new Date(year, month, 1).getDay();

    for (var i = 0; i < firstDay_CurrentMonth; i++) {
        var li = document.createElement('li');
        document.getElementById('calendar_item').appendChild(li);
    }

    for (var i = 1; i <= lastDate_CurrentMonth; i++) {
        var li = document.createElement('li');
        li.innerText = i;
        var clickableDay = new Date(year, month, i).getTime();
        var todayDate = new Date(currentYear, currentMonth, currentDay).getTime();
        var dayRound = parseInt((clickableDay - todayDate) / (1000 * 60 * 60 * 24));

        if (year == currentYear && month == currentMonth && i == currentDay) {
            li.className = "today";
            li.onclick = function () {
                alert(`Today: ${year}-${month + 1}-${this.innerText}`);
            };
        } else if (Math.abs(dayRound) <= 90) {
            li.className = "hover";
            li.onclick = function () {
                alert(`The Date that was clicked: ${year}-${month + 1}-${this.innerText}`);
            };
        }
        document.getElementById('calendar_item').appendChild(li);
    }
}

document.getElementById("next").onclick = function () {
    currentDate.setMonth(currentDate.getMonth() + 1); 
    renderCalendar();
};
document.getElementById("pre").onclick = function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
};