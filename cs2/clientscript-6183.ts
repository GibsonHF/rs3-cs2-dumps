//
function script6183(): void {
    var int0 = 0;
    var int1 = varclient_1910;
    if ((varbitplayer_16540 == 0)) {
        IF_SETTEXT("0", comp(1273, 67));
        return;
    };
    if ((IF_GETHIDE(comp(1273, 36)) == false)) {
        return;
    };
    if ((varbitplayer_16539 == 1)) {
        while ((int1 < varbitplayer_16540)) {
            int0 = (int0 + enum_getvalue(0, 0, 5842 as cs2enum, int1));
            int1 = (int1 + 1);
        };
        IF_SETTEXT(`Rank ${inttostring((11 - varbitplayer_16540), 10)} Esteem = ${inttostring(int0, 10)} points`, comp(1273, 67));
        return;
    };
    if ((varbitplayer_16539 == 2)) {
        IF_SETTEXT(`Recolour = ${inttostring(2000, 10)} points`, comp(1273, 67));
        return;
    };
    var int2 = enum_getvalue(0, 73, 5838 as cs2enum, (varbitplayer_16540 - 1));
    if ((int2 == -1 as struct)) {
        return;
    };
    int0 = struct_getparam(int2, 2379);
    int0 = (int0 * varbitplayer_16541);
    if ((struct_getparam(int2, 2378) == 0)) {
        IF_SETTEXT(`${inttostring(varbitplayer_16541, 10)} x ${struct_getparam(int2, 2376)} = ${inttostring(int0, 10)}`, comp(1273, 67));
    } else if (((MAP_LANG() == 3) || (MAP_LANG() == 2))) {
        IF_SETTEXT(`${inttostring(varbitplayer_16541, 10)} x ${struct_getparam(int2, 2377)} ${struct_getparam(int2, 2376)} = ${inttostring(int0, 10)}`, comp(1273, 67));
    } else {
        IF_SETTEXT(`${inttostring(varbitplayer_16541, 10)} x ${struct_getparam(int2, 2376)} ${struct_getparam(int2, 2377)} = ${inttostring(int0, 10)}`, comp(1273, 67));
    };
    return;
}