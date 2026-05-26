//
function script12498(int0: number): void {
    var int1 = enum_getvalue(0, 26, 11213 as cs2enum, int0);
    var int2 = 5;
    CC_DELETEALL(115343417);
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    if ((int0 == 0)) {
        int2 = script12499(enum_getvalue(0, 36, int1, int3++), int2, 0);
        int2 = script12499(enum_getvalue(0, 36, int1, int3++), int2, 0);
    };
    while ((int3 < int4)) {
        int2 = script12499(enum_getvalue(0, 36, int1, int3++), int2, 1);
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(115343417), int2, 115343417);
    script7791(115343419, 115343417);
    if ((IF_GETSCROLLHEIGHT(115343417) <= IF_GETHEIGHT(115343417))) {
        CC_DELETEALL(115343419);
    };
    IF_SETHIDE(1, 115343374);
    IF_SETHIDE(1, 115343384);
    IF_SETHIDE(1, 115343392);
    IF_SETHIDE(1, 115343401);
    IF_SETHIDE(1, 115343410);
    switch (int0) {
        case 0: {
            IF_SETHIDE(0, 115343374);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 115343384);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 115343392);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 115343401);
            break;
        }
        case 4: {
            IF_SETHIDE(0, 115343410);
            break;
        }
    };
    return;
}