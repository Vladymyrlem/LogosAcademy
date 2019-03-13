function Handlebar(diameter,material) {
    this._diameter = diameter;
    this._material = material;
}
Handlebar.prototype.getMaterial = function () {
    return _material;
};

Handlebar.prototype.setMaterial = function (material) {
    this._material = material;
};
Handlebar.prototype.getDiameter = function () {
    return _diameter;
};

Handlebar.prototype.setDiameter = function (diameter) {
    this._diameter = diameter;
};
Handlebar.prototype.diameterMix = function (diameter) {
    "Diameter handlebar" + diameter + "cm";
};
Handlebar.prototype.materialMix = function (material) {
    "Kermo material" + material;
};

// Class Wheel

function Wheel(size) {
this._size = size;
}
Wheel.prototype.getSize = function () {
return _size
};
Wheel.prototype.setSize = function (size) {
    this._size = size;
};
Wheel.prototype.sizeMix = function (size) {
"Size of wheel" + size;
};

//Class BodyWork
function BodyWork(color) {
    this._color = color;
}

BodyWork.prototype.getColor = function () {
    return _color
};
BodyWork.prototype.setColor = function (color) {
  this._color = color
};
BodyWork.prototype.colorMix = function (color) {
    `Color of car is ${color}`
};
//Class Car
function Car(model,handlebar,wheel, bodywork) {
this._model = model;
this._handlebar = handlebar;
this._wheel = wheel;
this._bodywork = bodywork;
this.handlebar = new Handlebar();
this.wheel = new Wheel();
this.bodywork = new BodyWork();

}

Car.prototype.setModel = function () {
return _model;
};
Car.prototype.getModel = function (model) {
this._model = model;
};
Car.prototype.setMaterial = function () {
return _model;
};
Car.prototype.getMaterial = function (material) {
this._material = material;
};
Car.prototype.getSize = function () {
return _size;
};
Car.prototype.setSize = function (size) {
this._size = size;
};
Car.prototype.getColor = function () {
return _color;
};
Car.prototype.setColor = function (color) {
this._color = color;
};

Car.prototype.materialMix = function () {
    this.handlebar.materialMix();
};
Car.prototype.sizeMix = function(){
  this.wheel.sizeMix();
};
Car.prototype.colorMix = function(){
    this.bodywork.colorMix();
};
Car.prototype.info = function () {
console.log("Model of car:" + this._model);
console.log("Handlebar material:" + this.materialMix());
console.log("Wheel size of auto:" + this.sizeMix() +"inch");
console.log("Color of auto:" +this.colorMix());
};

var car = new Car('Land Carouser','velur',18,'red');
car.info();


