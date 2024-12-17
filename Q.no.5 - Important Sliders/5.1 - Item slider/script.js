const array = [2, 34, 44, 55, 66];
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const number = document.getElementById("number");


let numbs = 0;

// Next button click event
next.addEventListener("click", () => {
    numbs += 1;

    // Check if numbs exceeds array length, reset to 0 if necessary
    if (numbs >= array.length) {
        numbs = 0; // Reset to 0 when it exceeds the array length
    }

    number.value = array[numbs];
});

prev.addEventListener("click", () => {
    numbs -= 1;

    // Check if numbs goes below 0, reset to the last array index if necessary
    if (numbs < 0) {
        numbs = array.length - 1; // Set to the last array index
    }

    number.value = array[numbs];
});
