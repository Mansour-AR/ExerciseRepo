// Defined Variables
let count = 0;

// Function to count followers

function increaseCount() {

    count++; // Increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); //Check count value and display messages

}
// Function to display counts
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}
// Function to check count value
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
// Function to reset count

function resetCount() {

 if (count != 0) {
    count = 0;
    document.getElementById('countDisplay').innerHTML=count;
    alert("Followers count has been reset.");
 }

}
