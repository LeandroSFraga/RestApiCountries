function calc() {
    console.log(1);
    console.log(2);
    return "";
}
calc();
var CALC_TYPE;
(function (CALC_TYPE) {
    CALC_TYPE["sum"] = "sum";
    CALC_TYPE["subtraction"] = "subtraction";
})(CALC_TYPE || (CALC_TYPE = {}));
