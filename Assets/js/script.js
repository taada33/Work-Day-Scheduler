// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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

  currentHour = dayjs().format('H');
  //creates a timer that checks if the time has changed, which will then update the classes
  //of the time blocks.
  let timeInterval = setInterval(function(){
    //logic to determine if currentHour is different from dayjs().format('H')
    //depends if currentHour is dynamic or not
  }, 1000 * 60 * 60)
  //gets meridiem value (am or pm) of currentHour so a conversion to 24 hour time can be made.
  let currentMeridiem = dayjs().format('a');
  if(currentMeridiem === "pm"){
    currentHour = parseInt(currentHour) + 12;
  }
  //some tbd variable to compare with the currentHour
  let something;
  //logic to determine which class will be assigned.
  if(something > parseInt(currentHour)){
    //assign future class
  }else if(something === parseInt(currentHour)){
    //assign present class
  }else{
    //assign past class
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.
  let currentDate = dayjs().format('MMMM DD, YYYY')
  console.log(currentDate);
  var currentDay = $('#currentDay');
  currentDay.text(currentDate);
});
