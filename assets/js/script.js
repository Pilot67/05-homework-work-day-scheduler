var timeBlockEl = $('#timeBlock');


//class = "row time-block" id="hourRow" value = "9"



for (index = 9; index <= 17; index++){
var timeLine = $('<div>').attr({class: "row time-block", id:"hourRow", value: index});
var timeEl = $('<div>').attr({class: "col-2 col-lg-1 pt-3 hour"}).text(index);
var dayEl = $('<div>').attr({class: "col-8 col-lg-10 future"});
var saveEl = $('<div>').attr({class: "col-2 col-lg-1 btn saveBtn far fa-save exSave"});
var inputEl = $('<textarea>').attr({class: "form-control border-0 mt-1 p-0 future", name:"hourPlan", id:"hourPlan", rows:"3", cols:"30"});

dayEl.append(inputEl);
timeLine.append(timeEl);
timeLine.append(dayEl);
timeLine.append(saveEl);
timeBlockEl.append(timeLine);
}