var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["WHITE"] = 3] = "WHITE";
})(Color || (Color = {}));
;
var red = Color.BLUE;
console.log(red);
