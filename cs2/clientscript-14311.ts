//
function script14311(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(1, 73793576);
        IF_SETHIDE(0, 73793575);
        return;
    };
    script14308();
    IF_SETHIDE(0, 73793576);
    var int1 = enum_getvalue(0, 73, 5033 as cs2enum, int0);
    IF_SETTEXT(struct_getparam(int1, 7278), 73793564);
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
    var int10 = (IF_GETWIDTH(73793566) - 12);
    IF_SETSIZE(SCALE(int10, 100, int9), IF_GETHEIGHT(73793582), 0, 0, 73793582);
    IF_SETTEXT(`Level: ${inttostring(int4, 10)}`, 73793565);
    switch (struct_getparam(int1, 1915)) {
        case 1: {
            IF_SETTEXT("Difficulty: Easy", 73793567);
            break;
        }
        case 2: {
            IF_SETTEXT("Difficulty: Medium", 73793567);
            break;
        }
        case 3: {
            IF_SETTEXT("Difficulty: Hard", 73793567);
            break;
        }
    };
    IF_SETTEXT(inttostring(struct_getparam(int1, 1898), 10), 73793540);
    IF_SETTEXT(inttostring(struct_getparam(int1, 1901), 10), 73793624);
    IF_SETTEXT(inttostring(struct_getparam(int1, 1904), 10), 73793627);
    IF_SETTEXT(inttostring(struct_getparam(int1, 1907), 10), 73793630);
    IF_SETTEXT(struct_getparam(int1, 1899), 73793541);
    IF_SETTEXT(struct_getparam(int1, 1902), 73793625);
    IF_SETTEXT(struct_getparam(int1, 1905), 73793628);
    IF_SETTEXT(struct_getparam(int1, 1908), 73793631);
    var int11 = script9054(int4, struct_getparam(int1, 1898), 6610020, 14443620);
    IF_SETCOLOUR(int11, 73793540);
    IF_SETCOLOUR(int11, 73793541);
    int11 = script9054(int4, struct_getparam(int1, 1901), 6610020, 14443620);
    IF_SETCOLOUR(int11, 73793624);
    IF_SETCOLOUR(int11, 73793625);
    int11 = script9054(int4, struct_getparam(int1, 1904), 6610020, 14443620);
    IF_SETCOLOUR(int11, 73793627);
    IF_SETCOLOUR(int11, 73793628);
    int11 = script9054(int4, struct_getparam(int1, 1907), 6610020, 14443620);
    IF_SETCOLOUR(int11, 73793630);
    IF_SETCOLOUR(int11, 73793631);
    IF_SETHIDE(1, 73793575);
    return;
}