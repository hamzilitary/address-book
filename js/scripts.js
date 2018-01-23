function Contact(first, last, phone, location, birthday) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNum = phone;
  this.location = location;
  this.birthday = birthday;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNum = $("input#new-phone-number").val();
    var inputtedBirthday =
    $("input#new-birthday").val();
    var inputtedLocation = $("input#new-location").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNum, inputtedLocation, inputtedBirthday);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone-number").text(newContact.phoneNum);
      $(".location").text(newContact.location);
      $(".birthday").text(newContact.birthday);
    });

    $("ul#new-first-name").val("");
    $("ul#new-last-name").val("");
    $("ul#new-phone-number").val("");
    $("ul#new-location").val("");
    $("ul#new-birthday").val("");
  });
});
