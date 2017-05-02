// Skip to next box when a phone number box is filled to size
var phoneCheck = function(phoneNum) {
  if (typeof(Number(phoneNum.value)) !== true) {
    // Prompts for proper phone number
  }
  if (phoneNum.value.length >= 3) {
    // Increments to next phoneID
    document.getElementById('phone' + (Number(phoneNum.id.slice(5)) + 1)).focus();
  }
};

// Checks that proper values are put into every input
var inputCheck = function(input) {
  if (input.value != true) {

  }
};

// Response triggered for bad inputs
var badInput = function(element) {

}