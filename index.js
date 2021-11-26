var person1 = {
    firstName: "Himanshu",
    lastName: "Rai",
    OfficeAddress:"Newyork"
  };
 var person2 = {
    firstName: "rahul",
    lastName: "singh",
    OfficeAddress:"rajeev nagar"
  };
  var person3= {
    firstName: "Sonali",
    lastName: "sinha",
    OfficeAddress:"patel nagar"
  };

  function display(person)
{
    console.log( "FIRSTNAME :"+person.firstName);
    console.log( "LASTNAME :"+person.lastName);
    console.log( "OFFICE ADDRESS :"+person.OfficeAddress);

}
display(person1);
display(person2);
display(person3); 