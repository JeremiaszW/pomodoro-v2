let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let clear_btn = document.getElementById("clear");
let time_sec = 0;
let time_min = 10;

let timer = function() {
		document.getElementById("minutes").innerHTML = time_min;
		document.getElementById("seconds").innerHTML = time_sec;
		start_btn.disabled = true;
		time_sec--;
		if (time_sec < 0) {
			time_min--;
			if (time_min < 0) {
        		window.clearInterval(timer_start);
        		start_btn.disabled = false;
        		clear_btn.disabled = false;
        		clearPomodoro();
        	} else {
      			time_sec = 59;
      		}
      	}

	};


function updatePomodoro() {
	timer_start = setInterval(timer, 1000);	
	clear_btn.disabled = true;
}

function stopPomodoro() {
	window.clearInterval(timer_start);
	start_btn.disabled = false;
	clear_btn.disabled = false;
}

function clearPomodoro() {
	window.clearInterval(timer_start);
	time_sec = 0;
	time_min = 10;
	document.getElementById("minutes").innerHTML = time_min;
	document.getElementById("seconds").innerHTML = time_sec;
	start_btn.disabled = false;
}
