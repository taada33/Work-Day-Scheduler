// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  var saveBtnEl = $('.saveBtn');
  saveBtnEl.on('click', function () {
    localStorage.setItem($(this).closest('div').attr('id'), $(this).siblings('textarea').val());
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  currentHour = parseInt(dayjs().format('H'));
  //stores the current hour as an integer

  //creates a timer that checks if the time has changed, which will then update the classes
  //of the time blocks.
  let timeInterval = setInterval(function(){
    newHour = dayjs().format('H');
    if(newHour > currentHour){
      currentHour = parseInt(newHour);

      updateTimeDivs();
    }
  }, 1000);
  //function that update the classes of the time divs
  function updateTimeDivs(){
    for(let i = 0;i < 9;i++)
    //uses match method to check for any numbers (\d) 
      //checks if the hour-xx id is less than the current time, then assigns class past 
      if(parseInt($('.container-fluid').children().eq(i).attr('id').match(/\d+/)[0]) < currentHour){
        $('.container-fluid').children().eq(i).removeClass('future');
        $('.container-fluid').children().eq(i).removeClass('present');
        $('.container-fluid').children().eq(i).addClass('past');
      //checks if the hour-xx id is equal to the current time, then assigns class present 
      }else if(parseInt($('.container-fluid').children().eq(i).attr('id').match(/\d+/)[0]) === currentHour){
        $('.container-fluid').children().eq(i).removeClass('future');
        $('.container-fluid').children().eq(i).removeClass('past');
        $('.container-fluid').children().eq(i).addClass('present');
      //else assigns class future
      }else{
        $('.container-fluid').children().eq(i).addClass('future');
        $('.container-fluid').children().eq(i).removeClass('past');
        $('.container-fluid').children().eq(i).removeClass('present');
      }
  }
  //runs the updateTimeDivs function when page is loaded
  updateTimeDivs();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for(let i = 0; i < 9; i++){
    if(localStorage.getItem($('.container-fluid').children().eq(i).attr('id'))){
      $('.container-fluid').children().eq(i).children().eq(1).text(localStorage.getItem($('.container-fluid').children().eq(i).attr('id')))
    }
  }

  // TODO: Add code to display the current date in the header of the page.
  let currentDate = dayjs().format('MMMM DD, YYYY')
  var currentDay = $('#currentDay');
  currentDay.text(currentDate);
});


