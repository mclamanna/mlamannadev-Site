var jsonString =
   '[{"id":1,"Question":"Where would I find information on late trips?","Answer":"By using the Late Trip Application you can see incoming mail to your facility.","Link":"https://www.usps.com"},{"id":2,"Question":"Chocolate","Answer":"Milka, Ritter Sport, Lindt","Link":"Ritter1.png"}]';
var jsObject = JSON.parse(jsonString);

// fill processing select list
$.each(jsObject, function (key, val) {
   $("#processing").append("<option>" + val.Question + "</option>");
});

//$(document).ready(function() {
$("#processing").change(function () {
   var selectedItem = $(this).val();
   $.each(jsObject, function () {
      if (this.Question == selectedItem) {
         $("#list").html(
            '<b>Answer:</b> ' +
               this.Answer +
               '<br>' +
               '<b>Link:</b> <a href="' + this.Link + '" target="_blank">' + this.Link + '</a>'
         );
      }
   });
});


/*
[
	{
    "Link": "https://www.usps.com",
   "Question": "Where would I find information on late trips?" ,
   "Question": "By using the Late Trip Application you can see incoming mail to your facility."},   
	{
    "Link": "https://www.usps.com",
    "Question": "How many DPS errors will I have?" ,
    "Question": "Log into the application and drill down by zip 4 facility."},
	{
    "Link": "https://www.usps.com",
    "Question": "What should I do if I'm missing a trip?" ,
    "Question": "Login into the ___ application and drill down by facility."},
	{
    "Link": "https://www.usps.com",
    "Question": "What should I do if a load plan fails?" ,
    "Question": "Contact __ via the __ application"},
	{
    "Link": "https://www.usps.com",
    "Question": "Where do I report late arriving trips?" ,
    "Question": "Click on the below hyper link to submit information."},
	{
    "Link": "https://ives.usps.gov",
    "Question": "How can I control work hours to plan?" ,
    "Question": "By logging into IVES and entering the appropriate information you can plan and schedule employees."}

]
*/