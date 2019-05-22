// $(function () {
// if(carName != null){
//     $('div #getData').text(carName);
// }else{
//     $('div #getData').text("sdflkjsldkf");
// }
// });
var carYear = prompt('Enter production year of car','');
//  if(carName != null){
//      document.getElementById('getData').innerHTML = carName;
// }else{
//      document.getElementById('getData').innerHTML = "sdflkjsldkf";
//  }
function showData(data, isDisplayed) {
    if(isDisplayed) {
        console.log(data);
    }else{
        console.log('error');
    }
}
var cars = [{brandName: "Toyota", model: 'Prado', productionYear: 2014},
        {brandName: 'BMW', model: 'X3', productionYear: 2012},
        {brandName: 'Mercedes',model: 'Benz', productionYear: 2010},
        {brandName: 'Audi', model: 'A6', productionYear: 2013}];
    // document.write("Car has brand: " + cars.brandName);
showData("Show all", true);
 _.each(cars, function (elm, index) {
     showData(elm, true);
 });
var byBrand = _(cars).groupBy('brandName');
var byModel = _(cars).groupBy('model');
var byYear = _(cars).groupBy('productionYear');
showData("Group By Brand Name", true);
showData(byBrand, true);
showData("Group By Model ", true);
showData(byModel, true);
showData("Group By Production Year", true);
showData(byYear, true);



    let max_val = _.max(cars, function (maxYear) {
        return maxYear.productionYear;
    });
    showData("MaxValue", true);
showData(max_val, true);
let min_val = _.min(cars, function (maxYear) {
        return maxYear.productionYear;
    });
    showData("MainValue",true);
showData(min_val, true);
let filter_cars = _.filter(cars, function(item){
    if(item.productionYear === carYear){
        return item;
    }
    });
showData('Filtered', true);
showData(filter_cars,true);