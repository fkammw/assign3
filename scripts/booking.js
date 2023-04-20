/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let selected_day = []; //save selected days
let day_rate = 35;
let selected_day_count = 0; //count no. of day selected


var cost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var day_buttons = document.querySelectorAll('.day-selector li');

for (let count = 0; count < day_buttons.length; count++){
    day_buttons[count].addEventListener("click", function(){
        if (!selected_day.includes(day_buttons[count].id)){
            selected_day.push(day_buttons[count].id);
            selected_day_count++;
            day_buttons[count].classList.add("clicked");
        }
        let total_cost = calculated_cost();
        cost.innerHTML = total_cost;
        
    });

}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clear_button = document.getElementById("clear-button");

clear_button.addEventListener("click", function(){
    selected_day = [];
    selected_day_count = 0;
    for (let count = 0; count < day_buttons.length; count++){
        day_buttons[count].classList.remove("clicked");
    }
    
    day_rate = 35;
    
    full_dat_button.classList.add('clicked');
    half_day_button.classList.remove('clicked');
    let total_cost = calculated_cost();
    cost.innerHTML = total_cost;
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var half_day_button = document.getElementById("half");

half_day_button.addEventListener("click", function(){
    day_rate = 20;
    half_day_button.classList.add("clicked");
    full_dat_button.classList.remove("clicked");
    let total_cost = calculated_cost();
    cost.innerHTML = total_cost;
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var full_dat_button = document.getElementById("full");

full_dat_button.addEventListener("click", function(){
    day_rate = 35;
    full_dat_button.classList.add("clicked");
    half_day_button.classList.remove("clicked");
    let total_cost = calculated_cost();
    cost.innerHTML = total_cost;
  
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


/*if (full_dat_button.classList.contains("clicked")) {
    total_cost = selected_day_count * full_day_rate;
    calculated_cost.innerHTML = total_cost;
} else {
    total_cost = selected_day_count * half_day_rate;
    calculated_cost.innerHTML = total_cost;
}*/

function calculated_cost(){
    let total_cost = selected_day_count * day_rate;
    return total_cost;
}