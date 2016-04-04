//********************* The Business *********************//

function Contact(first, last, notes) {
  this.firstName = first;
  this.lastName = last;
  this.notes = notes;

}


//************************ The Pleasure ***************************//


$(document).ready(function(){


  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var userInputFirst = $("#new-first-name").val();
    var userInputLast = $("#new-last-name").val();
    var userInputNotes = $("#new-notes").val();


    var newContact = new Contact(userInputFirst, userInputLast, userInputNotes);

    Contact.prototype.fullName= function() {
      return this.firstName + " " + this.lastName;
    };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    $(".contact").click(function() {
      $(".contact").hide();
      $(".contact-info").show();
      $(".contact-info h2").text(newContact.firstName);
      $(".contact-info p").text(newContact.notes);

    });


        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#new-notes").val("");
  });
});
