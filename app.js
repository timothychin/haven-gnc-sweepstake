// Skip to next box when a phone number box is filled to size
var phoneCheck = function(phoneNum) {
  console.log('triggered')
  if (phoneNum.TextLength >= 3) {
    var next = document.getElementById('phone' + (phoneNum.id + 1));
    console.log(next);
    next.focus();
  }
};