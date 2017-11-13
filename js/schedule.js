
var data = [
  {
    "session": "javascript: swoop em with the oop",
    "instructors": "Kaspar So & Hubert Si",
    "room": 220,
    "starts": "1:00",
    "ends": "4:00",
    "day": "Tuesdays",
    "description": "Learn the basics of Javascript"
  },
  {
    "session": "Markup & Styling",
    "instructors": "Emma Wootton & JJ Bastida",
    "room": 218,
    "starts": "3:00",
    "ends": "5:00",
    "day": "Tuesdays",
    "description": "Learn the fundamentals of HTML/CSS"
  },
  {
    "session": "Mentorship Night",
    "instructors": "Carol Cheung & Senior IXD Mentors",
    "room": 208,
    "starts": "12:00",
    "ends": "5:00",
    "day": "Wednesdays",
    "description": "Receive aid in 3D Design & Conceptual Process"
  },
  {
    "session": "Three to the Jay to the S",
    "instructors": "Scott Wilson",
    "room": 220,
    "starts": "3:00",
    "ends": "5:00",
    "day": "Thursdays",
    "description": "Understand how to use the three.js library"
  },
  {
    "session": "Product: UX/UI",
    "instructors": "Harmoney Lee & Emma Wootton",
    "room": 220,
    "starts": "5:30",
    "ends": "7:30",
    "day": "Thursdays",
    "description": "Going over Research Methods and Design & Systems Thinking"
  },
  {
    "session": "Portoflio Chit Chat",
    "instructors": "Josh Millard",
    "room": 208,
    "starts": "2:00",
    "ends": "5:00",
    "day": "Fridays",
    "description": "Portfolio Do's and Don'ts"
  }
]





var sd = document.getElementById("s-day"); //all upcoming sessions
var st = document.getElementById("s-time"); //all upcoming sessions
var stl = document.getElementById("s-title"); //all upcoming sessions
var si = document.getElementById("s-instructors"); //all upcoming sessions
var sr = document.getElementById("s-room"); //all upcoming sessions


var cwd;

var currentDay;

function weekdays() {

    var d = new Date();
    var wd = new Array(7);
    wd[0] = "Sunday";
    wd[1] = "Monday";
    wd[2] = "Tuesday";
    wd[3] = "Wednesday";
    wd[4] = "Thursday";
    wd[5] = "Friday";
    wd[6] = "Saturday";

    var cwd = wd[d.getDay()];
	


		if (cwd == "Sunday") {
				console.log("Sunday");
				current();
			
			} else if (cwd =="Monday") {
				console.log("Monday");
				current();

			} else if (cwd =="Tuesday") {
				console.log("Tuesday");
				current();
				
			} else if (cwd =="Wednesday") {
				console.log("Wednesday");
				current();
				
			} else if (cwd =="Thursday") {
				console.log("Thursday");
				current();
				
			} else if (cwd =="Friday") {
				console.log("Friday");
				current();
				
			} else if (cwd =="Saturday") {
				console.log("Saturday");
				current(wd);
				
			} 
	function current() {

		    // sd.innerHTML = data[1].day;
		    sd.innerHTML = "Today";
		    st.innerHTML = data[currentDay].starts + "<span>" + "PM" + "</span>";
		    stl.innerHTML = data[currentDay].session; 
		    si.innerHTML = data[currentDay].instructors;
		    sr.innerHTML = "Room J" + data[currentDay].room;

		   
	}
}
			
			







// for (var i = 0; i < data.length; i++) {

// 	sm = document.createElement("div");
//     	 document.body.appendChild(sm);

//     	 sm.id = "session-" + i;

// }

// s

// var s_out = [];

// var d = data[0].session


// for (var i = 0; i < data.length; i++) {
//   // s_out = data[i].push(number);
//   s_out = d.push(i);


// }


// console.log(s_out);




























