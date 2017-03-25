//## Zadanie 5  
//Zapisz do zmiennej ```mail```, dowolny adres email. Następnie za pomocą odpowiedniej metody dla stringów sprawdź czy znajduje się w nim znak @.
//W razie problemów zajrzyj do prezentacji ostatni rozdział "String metody".

var mail = "konrad.putelbergier@gmail.com";
var result = mail.lastIndexOf('@');
if (result>0) {
    console.log("Adres e-mail wpisany prawidłowo");
}
else {
    
    console.log("Adres e-mail wpisany nieprawidłowo");
}