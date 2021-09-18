var timeBlockEl = $('#timeBlock');
var timeStamp = $('#currentTime');
var timeNow = moment().format("Do MMM YYYY hh:mm");
var currentHour = parseInt(moment().format("H"));
//timeStamp.text(moment().format("ddd Do MMM  h:mma"));

for (index = 9; index <= 17; index++){
    var timeLine = $('<div>').attr({class: "row time-block", id:"hourRow", "data-hour": index});
    var timeEl = $('<div>').attr({class: "col-2 col-lg-1 pt-3 hour"}).text(moment(index,"H").format("h:00a",index));
    var dayEl = $('<div>').attr({class: "col-8 col-lg-10 future", id:"hourDisplay"});
    var inputEl = $('<textarea>').attr({class: "form-control border-0 mt-1 p-0 future", name:"hourPlan", id:"hourPlan", rows:"3", cols:"30"});
    var saveEl = $('<div>').attr({class: "col-2 col-lg-1 btn saveBtn far fa-save exSave"});

    dayEl.append(inputEl);
    timeLine.append(timeEl);
    timeLine.append(dayEl);
    timeLine.append(saveEl);
    timeBlockEl.append(timeLine);



}

setInterval (printTime,60000);

function printTime (){
     timeStamp.text(moment().format("ddd Do MMM  h:mma"));
};

function printTense (){
    var currentHour = moment().format("H");

    for (var index = 1; index !== $('#timeBlock').children().length+1; index++){
        //current timeBlock
        var currentTimeBlock = $('#timeBlock #hourRow:nth-child('+index+')');
       
        if (currentTimeBlock.data("hour") === parseInt(moment().format("H"))){
            console.log("present");
            //add code here to render present
            //use :nth-child(2) for div 
            // use :nth-child(3) for textarea
            
         }else if (currentTimeBlock.data("hour") < parseInt(moment().format("H"))){
            console.log("past")
            //add code here to render past 
        }
        
        
    }



    //Number of children ynder timeBlock
    //console.log($('#timeBlock').children().length);
}


//console.log(moment().format("H"));
//console.log(timeStamp)

printTime();
printTense();
