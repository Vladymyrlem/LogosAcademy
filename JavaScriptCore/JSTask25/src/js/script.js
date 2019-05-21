'use strict';
class Cars{
    constructor(brandName,model,productionYear){
    this.productionYear = productionYear;
    this.brandName = brandName;
    this.model = model;
    }
}
function showData(type,data, isDisplayed) {
    data = JSON.stringify(data);
    if(isDisplayed) {
        document.write(type + '<br>');
        document.write(data + '<br>');
    }else{
        alert('error');
    }
}
var new_car = _.create(Cars.prototype,{brandName: "Toyota", model: 'Prado', productionYear: 2014});
var invert = _.invert({Toyota: "brandName",Prado: 'model', 2014: 'productionYear'});
let pick = _.pick({brandName: "Toyota", model: 'Prado', productionYear: 2014},'brandName','productionYear');
let omit = _.omit({brandName: "Toyota", model: 'Prado', productionYear: 2014},'model');
showData( 'Create',new_car,true);
showData('Invert:', invert,true);
showData('Pick:', pick ,true);
showData('Omit:' , omit, true);
