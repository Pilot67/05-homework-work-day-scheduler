var timeBlockEl = $('#timeBlock');
var timeStamp = $('#currentTime');
var timeNow = moment().format("Do MMM YYYY hh:mm");
var currentHour = parseInt(moment().format("H"));
var setHr;

//set up the array for storing the calendar
var dayArr = []; 
dayArr.length = 9;
getPlanner();

function printScreen(){
    for (index = 9; index <= 17; index++){
        var timeLine = $('<div>').attr({class: "row time-block", id:"hourRow", "data-hour": index});
        var timeEl = $('<div>').attr({class: "col-2 col-lg-1 pt-3 hour"}).text(moment(index,"H").format("h:00a",index));
        var dayEl = $('<div>').attr({class: "col-8 col-lg-10 future", id:"hourDisplay"});
        var inputEl = $('<textarea>').attr({class: "form-control border-0 mt-1 p-0 future", name:"hourPlan", id:"hourPlan", rows:"3", cols:"30"}).val(dayArr[index-9]);
        var saveEl = $('<div>').attr({class: "col-2 col-lg-1 btn saveBtn far fa-save exSave", "data-btn":index-9});
        dayEl.append(inputEl);
        timeLine.append(timeEl);
        timeLine.append(dayEl);
        timeLine.append(saveEl);
        timeBlockEl.append(timeLine);
    }
}
function printTime (){
    timeStamp.text(moment().format("dddd Do MMM  h:mm:ssa")); //prints the current time to the header
    currentHour = parseInt(moment().format("H")); //sets the current hour as integer
    printTense(); //run the printTense function to see if the hour has changed
};

function printTense (){
    //check if the current hour has changed.
    if (!setHr || !(setHr === currentHour)){
        setHr = currentHour;
        // check each child row 
        for (var index = 1; index !== $('#timeBlock').children().length+1; index++){
            var currentTimeBlock = $('#timeBlock #hourRow:nth-child('+index+')');
           
            if (currentTimeBlock.data("hour") === currentHour){
                //code to render present hour
                $('#timeBlock #hourRow:nth-child('+index+') #hourDisplay').attr({class: "col-8 col-lg-10 present"});
                $('#timeBlock #hourRow:nth-child('+index+') #hourPlan').attr({class: "form-control border-0 mt-1 p-0 present"});
            }else if (currentTimeBlock.data("hour") < currentHour){
                //code here to render past hour
                $('#timeBlock #hourRow:nth-child('+index+') #hourDisplay').attr({class: "col-8 col-lg-10 past"});
                $('#timeBlock #hourRow:nth-child('+index+') #hourPlan').attr({class: "form-control border-0 mt-1 p-0 past"});
            }      
        }
    }
}
//click listener
timeBlockEl.on('click', '.saveBtn',function(event){
    event.preventDefault();
    var i = parseInt($(event.target).data("btn"));
    var textEl = $(event.target).prev().children().val().trim();
    dayArr[i] = textEl;
    localStorage.setItem("dayPlanner", JSON.stringify(dayArr)); //save the array to local storage
    $(event.target).prev().children().val(dayArr[i]) //repaint the textarea
})

function getPlanner(){
    dayArr = JSON.parse(localStorage.getItem("dayPlanner"));
    console.log(dayArr)
}

function init(){
    setInterval (printTime,1000); //set a timer for 60 seconds
    getPlanner(); //get the local storage array
    printScreen(); //print the screen initial
    printTime(); 
}

init();