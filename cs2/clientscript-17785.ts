//
function script17785(int0: unknown_int): void {
    var int1 = 0;
    var int2 = comp(1224, 34);
    var int3 = comp(1224, 35);
    var int4 = 0;
    var int5 = IF_GETWIDTH(int2);
    var string0 = "";
    var int6 = -1 as cs2enum;
    var int7 = 0;
    var int8 = -1 as dbrow;
    var int9 = 0;
    var int10 = -1;
    var int11 = 0;
    CC_DELETEALL(int2);
    switch (varbitplayer_53835) {
        case 0: {
            int6 = 16993 as cs2enum;
            break;
        }
        case 1: {
            int6 = 16992 as cs2enum;
            break;
        }
        case 2: {
            int6 = 16994 as cs2enum;
            break;
        }
    };
    int7 = ENUM_GETOUTPUTCOUNT(int6);
    while ((++int10 < int7)) {
        int8 = enum_getvalue(0, 74, int6, int10);
        if ((script17523(int8) == 1)) {
            string0 = script17500(int8);
            int4 = (24 * PARAHEIGHT(string0, ((int5 - (16 - 6)) - 16), 207 as fontmetrics));
            int11 = script17503(int8, 0);
            script7853(int2, int11, 0, int1, 0, 0, int5, int4, 0, 0, 4476 as dbrow, string0, true, 1, true, false);
            CC_SETOP(1, "Select");
            CC_SETONBUTTONCLICK(callback(script17792, int11, int8));
            int1 = (int1 + (CC_GETHEIGHT() + 4));
            if ((int9 == 0)) {
                int9 = int11;
            };
        };
    };
    int10 = -1;
    if ((IF_GETHEIGHT(int2) < int1)) {
        IF_SETHIDE(false, int3);
        IF_SETSCROLLSIZE(0, int1, int2);
        script7791(int3, int2);
        while ((++int10 < int7)) {
            if ((CC_FIND(int2, script17503(enum_getvalue(0, 74, int6, int10), 0)) == 1)) {
                CC_SETSIZE((int5 - (16 - 6)), (24 * PARAHEIGHT(CC_GETTEXT(), ((int5 - (16 - 6)) - 16), 207 as fontmetrics)), 0, 0);
            };
        };
    } else {
        IF_SETHIDE(true, int3);
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    var int12 = varplayer_11181;
    var int13 = 0;
    if (((int12 == 0) || (script17523(script17499(int12)) == 0))) {
        int13 = script17542(script17497(varplayer_11130));
        if ((int13 != 0)) {
            int12 = int13;
        } else {
            int12 = int9;
        };
    };
    if ((int12 == 0)) {
        IF_CLOSE();
        script1296("You have no rituals available to perform.");
        return;
    };
    var int14 = script17499(int12);
    int12 = script17503(int14, 0);
    if ((CC_FIND(int2, int12) == 1)) {
        script7872(true, 1, true, true);
    };
    if ((int0 == 1)) {
        script17793(int14);
    };
    script8841(99, 1);
    return;
}