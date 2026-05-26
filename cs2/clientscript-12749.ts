//
function script12749(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 5;
    var int4 = enum_getvalue(0, 26, 11609 as cs2enum, varbitplayer_33713);
    var int5 = -1 as cs2enum;
    var int6 = -1 as cs2enum;
    switch (varbitplayer_33713) {
        case 0: {
            int5 = 11589 as cs2enum;
            int6 = 11590 as cs2enum;
            int3 = 5;
            break;
        }
        case 1: {
            int5 = 11591 as cs2enum;
            int6 = 11592 as cs2enum;
            int3 = 5;
            break;
        }
        case 2: {
            int5 = 11593 as cs2enum;
            int6 = 11594 as cs2enum;
            int3 = 6;
            break;
        }
        case 3: {
            int5 = 11595 as cs2enum;
            int6 = 11596 as cs2enum;
            int3 = 5;
            break;
        }
        case 4: {
            int5 = 11597 as cs2enum;
            int6 = 11598 as cs2enum;
            int3 = 7;
            break;
        }
        case 5: {
            int5 = 11599 as cs2enum;
            int6 = 11600 as cs2enum;
            int3 = 6;
            break;
        }
        case 6: {
            int5 = 11601 as cs2enum;
            int6 = 11602 as cs2enum;
            int3 = 5;
            break;
        }
        case 7: {
            int5 = 11603 as cs2enum;
            int6 = 11604 as cs2enum;
            int3 = 6;
            break;
        }
    };
    while ((int0 < int3)) {
        int1 = enum_getvalue(0, 0, int5, int0);
        int2 = enum_getvalue(0, 0, int6, int0);
        IF_SETPOSITION(int1, int2, 0, 0, enum_getvalue(0, 9, 11605 as cs2enum, int0));
        int0 = (int0 + 1);
    };
    if ((varbitplayer_33713 != 7)) {
        int3 = (int3 + 1);
    };
    var int7 = 0;
    var int8 = comp(-1, 65535);
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as struct;
    while ((int7 < int3)) {
        int11 = enum_getvalue(0, 73, int4, int7);
        int1 = struct_getparam(int11, 5969);
        int2 = struct_getparam(int11, 5970);
        int9 = struct_getparam(int11, 5971);
        int10 = struct_getparam(int11, 5972);
        int8 = enum_getvalue(0, 9, 11608 as cs2enum, int7);
        if ((IF_FIND(int8) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int11, 5973));
            CC_SETPOSITION(int1, int2, 0, 0);
            CC_SETSIZE(int9, int10, 0, 0);
        };
        int7 = (int7 + 1);
    };
    IF_SETHIDE(false, comp(1786, 57));
    IF_SETHIDE(false, comp(1786, 64));
    IF_SETHIDE(false, comp(1786, 71));
    IF_SETHIDE(false, comp(1786, 78));
    IF_SETHIDE(false, comp(1786, 85));
    var int12 = enum_getvalue(0, 0, 11607 as cs2enum, varbitplayer_33713);
    if ((int12 == 5)) {
        IF_SETHIDE(true, comp(1786, 92));
        IF_SETHIDE(true, comp(1786, 99));
        IF_SETHIDE(true, comp(1786, 54));
        IF_SETHIDE(true, comp(1786, 55));
    } else if ((int12 == 6)) {
        IF_SETHIDE(false, comp(1786, 92));
        IF_SETHIDE(true, comp(1786, 99));
        if ((varbitplayer_33713 == 7)) {
            IF_SETHIDE(true, comp(1786, 54));
        } else {
            IF_SETHIDE(false, comp(1786, 54));
        };
        IF_SETHIDE(true, comp(1786, 55));
    } else if ((int12 == 7)) {
        IF_SETHIDE(false, comp(1786, 92));
        IF_SETHIDE(false, comp(1786, 99));
        IF_SETHIDE(false, comp(1786, 54));
        IF_SETHIDE(false, comp(1786, 55));
    };
    return;
}