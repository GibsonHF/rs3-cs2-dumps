//
function script15160(int0: unknown_int, int1: int): void {
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((int1 == -1)) {
        var int1 = varbitplayer_47748;
    };
    int2 = script15118(int1);
    int5 = DATE_RUNEDAY();
    [int3, int4] = script15149(int2);
    if (((int4 == -1) || (int5 < int3))) {
        IF_SETHIDE(true, comp(653, 57));
        return;
    };
    IF_SETHIDE(false, comp(653, 57));
    if ((int5 > int4)) {
        IF_SETTEXT("Event over", comp(653, 59));
        return;
    };
    [int6, int7, int8] = script3985(int4, 1);
    IF_SETTEXT(`${inttostring(int6, 10)} Days, ${inttostring(int7, 10)} hrs, ${inttostring(int8, 10)} mins`, comp(653, 59));
    return;
}