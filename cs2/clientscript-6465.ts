//
function script6465(int0: number, int1: number, int2: number): void {
    if ((varbitplayer_40127 == 1)) {
        return;
    };
    if (((GENDER() == 1) && (int0 == 1))) {
        if (((int1 == 3) || (int1 == 4))) {
            return;
        };
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
    IF_SETSIZE(0, 40, 1, 0, int3);
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
        IF_SETPOSITION(128, 0, 0, 0, comp(1311, 340));  // mtxmgt:header_scrollbar
    } else if (((int0 == 3) || (int0 == 4))) {
        int8 = 177;
        IF_SETPOSITION(178, 0, 0, 0, comp(1311, 340));  // mtxmgt:header_scrollbar
    } else if ((int0 == 5)) {
        int8 = 132;
        IF_SETPOSITION(133, 0, 0, 0, comp(1311, 340));  // mtxmgt:header_scrollbar
    };
    script13998(int3, -1, 35508, 0, 0, int8, IF_GETHEIGHT(int3), IF_GETNEXTSUBID(int3), 0, string0, script42(int2));
    IF_SETONOP(callback(script7492, int1), int3);
    IF_SETHIDE(false, int3);
    return;
}