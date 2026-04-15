//
function script19655(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    if (((int1 == 3) || (script18786() == 1))) {
        return 1;
    };
    if (((int1 == 9) || (script16770() == 1))) {
        return 2;
    };
    if (((int1 == 11) || (script18365() == 1))) {
        return 3;
    };
    if (((int1 == 0) || (script20422() == 1))) {
        return 4;
    };
    return 0;
}