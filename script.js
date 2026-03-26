// Sample demo data
let moisture = 35;

document.getElementById("moisture").innerText = moisture + "%";

if (moisture < 40) {
    document.getElementById("water").innerText = "Water Needed";
    document.getElementById("pump").innerText = "ON";
} else {
    document.getElementById("water").innerText = "No Water Needed";
    document.getElementById("pump").innerText = "OFF";
}