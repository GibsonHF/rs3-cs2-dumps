//
function script16253(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    if (((varbitplayer_50560 < int2) || (varbitplayer_50559 < int1))) {
        return 0;
    };
    return 1;
}