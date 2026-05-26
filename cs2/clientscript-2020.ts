//
function script2020(): void {
    var int0 = -1 as cs2enum;
    var int1 = -1 as cs2enum;
    var int2 = -1 as cs2enum;
    [int0, int1, int2] = script7386();
    var string0 = "";
    var string1 = "";
    var string2 = "Select A Ship";
    switch (varbitplayer_17132) {
        case 1: {
            string0 = enum_getvalue(0, 36, int0, varbitplayer_17040);
            string1 = enum_getvalue(0, 36, int1, varbitplayer_17041);
            string2 = enum_getvalue(0, 36, int2, varbitplayer_17042);
            break;
        }
        case 2: {
            string0 = enum_getvalue(0, 36, int0, varbitplayer_17048);
            string1 = enum_getvalue(0, 36, int1, varbitplayer_17049);
            string2 = enum_getvalue(0, 36, int2, varbitplayer_17050);
            break;
        }
        case 3: {
            string0 = enum_getvalue(0, 36, int0, varbitplayer_17056);
            string1 = enum_getvalue(0, 36, int1, varbitplayer_17057);
            string2 = enum_getvalue(0, 36, int2, varbitplayer_17058);
            break;
        }
        case 4: {
            string0 = enum_getvalue(0, 36, int0, varbitplayer_17064);
            string1 = enum_getvalue(0, 36, int1, varbitplayer_17065);
            string2 = enum_getvalue(0, 36, int2, varbitplayer_17066);
            break;
        }
    };
    IF_SETTEXT(`${string0}${string1}${string2}`, comp(950, 107));
    if ((PARAWIDTH(`${string0}${string1}${string2}`, 700, 57 as fontmetrics) > 220)) {
        IF_SETTEXTFONT(56 as fontmetrics, comp(950, 107));
    };
    return;
}