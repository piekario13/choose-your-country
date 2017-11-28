// var url = 'https://restcountries.eu/rest/v1/name/';
// var countriesList = $('#countries');
// $('#search').click(searchCountries);
// function searchCountries() {
//     var countryName = $('#country-name').val();
// if(!countryName.length) countryName = 'Poland';
// $.ajax({
//          url: url + countryName,
//          method: 'GET',
//          success: showCountriesList
//      });
//      function showCountriesList(resp) {
//         countriesList.empty();
//         resp.forEach(function(item) {
//             $('<li>').text(item.name).appendTo(countriesList);
//         });
//     }
// }


var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
    var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
         url: url + countryName,
         method: 'GET',
         success: showCountriesList
     });
     function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item) {
            $('<li id="name">').text("Kraj: " + item.name).appendTo(countriesList);
            $('<li id="capital">').text("Stolica: " + item.capital).appendTo(countriesList);
            $('<li id="region">').text("Region: " + item.region).appendTo(countriesList);
            $('<li id="population">').text("Populacja: " + item.population).appendTo(countriesList);
            $('<li id="currencies">').text("Waluta: " + item.currencies).appendTo(countriesList);
            $('<li id="line">').text("------------------------------").appendTo(countriesList);
        });
    }
}
