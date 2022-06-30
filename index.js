document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")
});

console.log(
    "this console.log() fires when index.js loads - before DOMContentLoaded is triggered"
)

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('p').textContent = "This is really cool!"
})