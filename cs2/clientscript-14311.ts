//
function script14311(int0: int): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1126, 40));
        IF_SETHIDE(false, comp(1126, 39));
        return;
    };
    script14308();
    IF_SETHIDE(false, comp(1126, 40));
    var int1 = enum_getvalue(0, 73, 5033 as cs2enum, int0);
    IF_SETTEXT(struct_getparam(int1, 7278), comp(1126, 28));
    var int2 = 0;
    switch (varbitplayer_4125) {
        case 1: {
            int2 = varbitplayer_4126;
            break;
        }
        case 2: {
            int2 = varbitplayer_4127;
            break;
        }
        case 3: {
            int2 = varbitplayer_4131;
            break;
        }
        case 4: {
            int2 = varbitplayer_4132;
            break;
        }
        case 5: {
            int2 = varbitplayer_4133;
            break;
        }
        case 6: {
            int2 = varbitplayer_4134;
            break;
        }
    };
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    while ((int3 != 100)) {
        int5 = enum_getvalue(0, 0, 5034 as cs2enum, int3);
        if ((int2 >= int5)) {
            int4 = int3;
        };
        int3 = (int3 + 1);
    };
    var int6 = enum_getvalue(0, 0, 5034 as cs2enum, (int4 + 1));
    var int7 = (int6 - enum_getvalue(0, 0, 5034 as cs2enum, int4));
    var int8 = (int6 - int2);
    var int9 = SCALE(int8, int7, 100);
    var int10 = (IF_GETWIDTH(comp(1126, 30)) - 12);
    IF_SETSIZE(SCALE(int10, 100, int9), IF_GETHEIGHT(comp(1126, 46)), 0, 0, comp(1126, 46));
    IF_SETTEXT(`Level: ${inttostring(int4, 10)}`, comp(1126, 29));
    switch (struct_getparam(int1, 1915)) {
        case 1: {
            IF_SETTEXT("Difficulty: Easy", comp(1126, 31));
            break;
        }
        case 2: {
            IF_SETTEXT("Difficulty: Medium", comp(1126, 31));
            break;
        }
        case 3: {
            IF_SETTEXT("Difficulty: Hard", comp(1126, 31));
            break;
        }
    };
    IF_SETTEXT(inttostring(struct_getparam(int1, 1898), 10), comp(1126, 4));
    IF_SETTEXT(inttostring(struct_getparam(int1, 1901), 10), comp(1126, 88));
    IF_SETTEXT(inttostring(struct_getparam(int1, 1904), 10), comp(1126, 91));
    IF_SETTEXT(inttostring(struct_getparam(int1, 1907), 10), comp(1126, 94));
    IF_SETTEXT(struct_getparam(int1, 1899), comp(1126, 5));
    IF_SETTEXT(struct_getparam(int1, 1902), comp(1126, 89));
    IF_SETTEXT(struct_getparam(int1, 1905), comp(1126, 92));
    IF_SETTEXT(struct_getparam(int1, 1908), comp(1126, 95));
    var int11 = script9054(int4, struct_getparam(int1, 1898), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 4));
    IF_SETCOLOUR(int11, comp(1126, 5));
    int11 = script9054(int4, struct_getparam(int1, 1901), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 88));
    IF_SETCOLOUR(int11, comp(1126, 89));
    int11 = script9054(int4, struct_getparam(int1, 1904), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 91));
    IF_SETCOLOUR(int11, comp(1126, 92));
    int11 = script9054(int4, struct_getparam(int1, 1907), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 94));
    IF_SETCOLOUR(int11, comp(1126, 95));
    IF_SETHIDE(true, comp(1126, 39));
    return;
}