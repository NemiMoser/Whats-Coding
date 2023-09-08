let progressValue = 0; // Initial progress value
var nextbuttonsEl = document.querySelectorAll('try-button');

// Function to open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    // HIde Buttons
    const tryButtons = document.querySelectorAll('.try-button');
    tryButtons.forEach(button => {
        button.style.display = "none";
    });
    
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    const tryButtons = document.querySelectorAll('.try-button');
    tryButtons.forEach(button => {
        button.style.display = "block";

    })};

// Function to update the progress bar and save progress in local storage
function updateProgress() {
    if (progressValue < 100) {
        progressValue += 25; // Increase progress by 25%
        document.getElementById("progress").style.height = progressValue + "%";
        document.getElementById("progress").innerHTML = progressValue + "%";
        // Save progress in local storage
        localStorage.setItem("courseProgress", progressValue);
    } else {
        // Mark the course as completed in local storage
        localStorage.setItem("courseCompleted", "true");
    }
}

// Check local storage for course completion and progress
const storedProgress = localStorage.getItem("courseProgress");
const courseCompleted = localStorage.getItem("courseCompleted");

if (storedProgress !== null) {
    progressValue = parseInt(storedProgress);
    document.getElementById("progress").style.height = progressValue + "%";
    document.getElementById("progress").innerHTML = progressValue + "%";
}

if (courseCompleted === "true") {
    document.getElementById("progress").innerHTML = 'Good job Course is completed';
}
function clearLocalStorage() {
    localStorage.removeItem("courseProgress");
    localStorage.removeItem("courseCompleted");
    progressValue = 0;
    document.getElementById("progress").style.height = "0%";
    document.getElementById("progress").innerHTML = "0%";
    window.location.reload();

}