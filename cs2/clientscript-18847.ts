//
function script18847(int0: dbrow, int1: int, int2: int): string {
    if ((int1 == -1)) {
        var int1 = script18920(int0, 0);
    };
    if ((int2 == -1)) {
        var int2 = script18920(int0, 2);
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = DATE_RUNEDAY_TODATE(int1);
    return `${script15112(int1)} ${script12832(int3)} ${enum_getvalue(0, 36, 10037 as cs2enum, int4)}, ${script10901((int2 / 100), MODULO(int2, 100), 1)} UTC`;
}