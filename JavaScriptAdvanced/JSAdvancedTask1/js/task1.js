function show(item) {
    console.log(item);
}
const Module = (function () {
var privateName = "Vladymyr";
var publicAge = '25';
function getValue() {
    return show(privateName, publicAge);
}

return {
    getValue: getValue
};
})();
show(Module.getValue());


