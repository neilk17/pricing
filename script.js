var slider = document.getElementById("myRange");
var output = document.getElementById("cost-amount");
var amount = "$" + slider.value;
output.innerHTML = amount;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    var amount = "$" + this.value;
    output.innerHTML = amount;
} 