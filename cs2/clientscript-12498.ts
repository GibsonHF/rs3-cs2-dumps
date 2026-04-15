//
function script12498(int0: int): void {
    var int1 = enum_getvalue(0, 26, 11213 as cs2enum, int0);
    var int2 = 5;
    CC_DELETEALL(comp(1760, 57));
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    if ((int0 == 0)) {
        int2 = script12499(enum_getvalue(0, 36, int1, int3++), int2, 0);
        int2 = script12499(enum_getvalue(0, 36, int1, int3++), int2, 0);
    };
    while ((int3 < int4)) {
        int2 = script12499(enum_getvalue(0, 36, int1, int3++), int2, 1);
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1760, 57)), int2, comp(1760, 57));
    script7791(comp(1760, 59), comp(1760, 57));
    if ((IF_GETSCROLLHEIGHT(comp(1760, 57)) <= IF_GETHEIGHT(comp(1760, 57)))) {
        CC_DELETEALL(comp(1760, 59));
    };
    IF_SETHIDE(true, comp(1760, 14));
    IF_SETHIDE(true, comp(1760, 24));
    IF_SETHIDE(true, comp(1760, 32));
    IF_SETHIDE(true, comp(1760, 41));
    IF_SETHIDE(true, comp(1760, 50));
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1760, 14));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1760, 24));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1760, 32));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1760, 41));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1760, 50));
            break;
        }
    };
    return;
}