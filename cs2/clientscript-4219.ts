//
function script4219(int0: int): unknown_int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    [int1, int4, int5] = DATE_RUNEDAY_TODATE(varplayer_3079);
    if (((int2 == int4) && (int3 == int5))) {
        return 0;
    };
    return 1;
}