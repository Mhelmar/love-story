// Set your anniversary date (YYYY, MM - 1, DD)
const anniversaryDate = new Date(2023, 7, 27);  // Example: March 14, 2023

function updateCounter() {
    const now = new Date();
    const diff = now - anniversaryDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = (days % 365) % 30;

    document.getElementById("counter").innerHTML = 
        `${years} years, ${months} months, and ${remainingDays} days ❤️`;
}

// Update the counter when the page loads
window.onload = updateCounter;
