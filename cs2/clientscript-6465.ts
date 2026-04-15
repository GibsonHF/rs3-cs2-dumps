//
function script6465(int0: int, int1: int, int2: unknown_int): void {
    if ((varbitplayer_40127 == 1)) {
        return;
    };
    if ((GENDER() == 1)) {
        if (((int0 == 1) && ((((int1 == 2) || (int1 == 5)) || (int1 == 4)) || (int1 == 9)))) {
            return;
        };
    } else if ((((GENDER() == 0) && (int0 == 1)) && ((int1 == 3) || (int1 == 8)))) {
        return;
    };
    var int3 = enum_getvalue(0, 9, 5960 as cs2enum, int1);
    var int4 = enum_getvalue(0, 9, 5961 as cs2enum, int1);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int3);
    var int5 = enum_getvalue(0, 26, 5959 as cs2enum, int0);
    if ((int5 == -1 as cs2enum)) {
        return;
    };
    var string0 = enum_getvalue(0, 36, int5, int1);
    if ((strcmp(string0, "null") == 0)) {
        return;
    };
    var int6 = STRING_LENGTH(string0);
    IF_SETSIZE(0, 45, 1, 0, int3);
    var int7 = ENUM_GETOUTPUTCOUNT(int5);
    var int8 = 132;
    if ((int7 < 8)) {
        if ((int0 == 1)) {
            int8 = 127;
        } else if (((int0 == 3) || (int0 == 4))) {
            int8 = 177;
        } else if ((int0 == 5)) {
            int8 = 142;
        };
    } else if ((int0 == 1)) {
        int8 = 127;
        IF_SETPOSITION(128, 0, 0, 0, comp(1311, 340));
    } else if (((int0 == 3) || (int0 == 4))) {
        int8 = 177;
        IF_SETPOSITION(178, 0, 0, 0, comp(1311, 340));
    } else if ((int0 == 5)) {
        int8 = 132;
        IF_SETPOSITION(133, 0, 0, 0, comp(1311, 340));
    };
    CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
    if ((int2 == 0)) {
        CC_SETGRAPHIC(19305 as graphic);
    } else {
        CC_SETGRAPHIC(19308 as graphic);
    };
    CC_SETSIZE(int8, 0, 0, 1);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETONMOUSEOVER(callback(script5336, -2147483645, CC_GETID(), 19306));
    if ((int2 == 0)) {
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, CC_GETID(), 19305));
    } else {
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, CC_GETID(), 19308));
    };
    CC_SETOP(1, "Select");
    CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(1, 1, 13);
    CC_SETSIZE(8, 8, 1, 1);
    CC_SETPOSITION(4, 4, 0, 0);
    IF_SETONOP(callback(script7492, int1), int3);
    CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
    CC_SETSIZE(12, 19, 0, 0);
    CC_SETPOSITION(10, 0, 2, 1);
    IF_SETHIDE(0, int3);
    return;
}