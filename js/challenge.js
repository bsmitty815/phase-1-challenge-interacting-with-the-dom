


// timer to start when page loads
const counterText = document.getElementById('counter');
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const likes = document.getElementsByClassName('likes')[0]



let count = 0; // this starts the counter at 0
let intervalId;


document.addEventListener("DOMContentLoaded", () => {
    intervalId = setInterval(function () { // sets the timer once the screen starts
    count += 1; // adds one to the counter
    counterText.textContent = count;
    }, 1000)
});

pauseButton.addEventListener("click", function() {
    if (!intervalId) {
        intervalId = setInterval(function () {
            count += 1 //this adds 1 to the counter per 1 second
            counterText.textContent = count; //this lines up the counter id and the count amount
        }, 1000);
    } else {
        clearInterval(intervalId); //stops the counter once pressed
        intervalId = null; //makes the counter not move
    }
})



//var intervalID = scope.setInterval(func, [delay, arg1, arg2, ...]);

// timmer to decrement when decrement butt hit
plus.addEventListener("click", function() {
    counterText.innerHTML = ++count;
})

// timer to increment when increment button hit
minus.addEventListener("click", function() {
    counterText.innerHTML = --count;
})

let currentCounterText = 0; // created new variable to match it up against count in if statement
heart.addEventListener("click", function () {
    //when we click it we will say the number, for this number it is has this many likes
    let newLike = document.createElement('li') //This creates a new li line for the like sentance
    let sentance = `the Number ${counterText.innerHTML} has <span id="like_${counterText.innerHTML}">0</span> likes`; //this creates the sentance
    newLike.innerHTML += sentance // this creates a new sentance if it doesnt equal a curent sentance
    if (currentCounterText === count) {
        let numLikes = document.getElementById(`like_${counterText.innerHTML}`).innerHTML // this sets the span equal to new sentance
        numLikes++; 
        document.getElementById(`like_${counterText.innerHTML}`).innerHTML = numLikes; 
        // if counterText = string increase like number only
    } else {
        likes.appendChild(newLike) //this creates new line if there is none

    }
    currentCounterText = count;

})


//submit comment
const commentSubmit = document.getElementById('submit'); // make variable for submit button
commentSubmit.addEventListener('click', fillForm); // call the button and run input form

function fillForm(e) { // function for input form
    e.preventDefault();
    console.log('test working', e) //console.log the event
    let input = document.getElementById('comment-input')
    if (input.value != '')
    commentsField(input.value);
    input.value = '';
}

function commentsField(commentString) { // add new comment on the web page
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    let s = document.createElement('span')
    s.innerHTML = commentString;
    ul.appendChild(li);
    li.appendChild(s);
}

