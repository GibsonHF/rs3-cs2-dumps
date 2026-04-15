//
function script5524(int0: int, int1: int): void {
    var int2 = -1 as cs2enum;
    var int3 = -1 as cs2enum;
    var int4 = -1 as cs2enum;
    [int2, int3, int4] = script7386();
    var int5 = -1 as cs2enum;
    var int6 = -1 as cs2enum;
    var int7 = -1 as cs2enum;
    var int8 = -1 as cs2enum;
    [int5, int6, int7, int8] = script7387();
    CC_DELETEALL(comp(1072, 18));
    IF_SETHIDE(true, comp(1072, 19));
    var int9 = -1 as cs2enum;
    var int10 = -1 as cs2enum;
    var int11 = -1 as cs2enum;
    var int12 = 0;
    script13992(comp(1072, 5), comp(-1, 65535), 28556 as struct, 0);
    script13992(comp(1072, 8), comp(-1, 65535), 28556 as struct, 0);
    script13992(comp(1072, 11), comp(-1, 65535), 28556 as struct, 0);
    switch (int0) {
        case 1: {
            IF_SETHIDE(true, comp(1072, 21));
            script13992(comp(1072, 5), comp(-1, 65535), 28556 as struct, 1);
            int9 = int2;
            int12 = varbitplayer_17030;
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1072, 21));
            script13992(comp(1072, 8), comp(-1, 65535), 28556 as struct, 1);
            int9 = int3;
            int10 = int5;
            int11 = int6;
            int12 = varbitplayer_17031;
            script10428(comp(1072, 23), comp(1072, 24), int11, -1, "", varplayer_3376, 0);
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1072, 21));
            script13992(comp(1072, 11), comp(-1, 65535), 28556 as struct, 1);
            int9 = int4;
            int10 = int7;
            int11 = int8;
            int12 = varbitplayer_17032;
            script10428(comp(1072, 23), comp(1072, 24), int11, -1, "", varplayer_3376, 0);
            break;
        }
    };
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var string0 = "";
    var int16 = ENUM_GETOUTPUTCOUNT(int9);
    while ((int13 < int16)) {
        CC_CREATE(comp(1072, 18), 4, int13);
        if ((int10 != -1 as cs2enum)) {
            int15 = enum_getvalue(0, 0, int10, int13);
        } else {
            int15 = varplayer_3376;
        };
        if ((int15 == varplayer_3376)) {
            string0 = enum_getvalue(0, 36, int9, int13);
            if ((strcmp(string0, "") == 0)) {
                string0 = "(None)";
            };
            CC_SETHIDE(false);
            CC_SETTEXT(string0);
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETCOLOUR(16446166);
            CC_SETSIZE(151, 20, 0, 0);
            CC_SETPOSITION((CC_GETWIDTH() * MODULO(int14, 3)), (3 + ((CC_GETHEIGHT() + 2) * (int14 / 3))), 0, 0);
            CC_SETTEXTALIGN(1, 1, 13);
            CC_SETOP(1, "Select");
            if ((int13 == int12)) {
                CC_SETCOLOUR(16239152);
                CC_SETONMOUSEOVER(callback(script5645, int13, 1, 1));
                CC_SETONMOUSELEAVE(callback(script5645, int13, 0, 1));
                IF_SETHIDE(0, 70254611);
                IF_SETPOSITION(CC_GETX(), (CC_GETY() - 2), 0, 0, 70254611);
            } else {
                CC_SETONMOUSEOVER(callback(script5645, int13, 1, 0));
                CC_SETONMOUSELEAVE(callback(script5645, int13, 0, 0));
            };
            int14 = (int14 + 1);
        } else {
            CC_SETHIDE(true);
        };
        int13 = (int13 + 1);
    };
    var int17 = MAX(IF_GETHEIGHT(comp(1072, 18)), (3 + (22 * ((int14 / 3) + 1))));
    IF_SETSCROLLSIZE(0, int17, comp(1072, 18));
    script31(comp(1072, 20), comp(1072, 18), 8383 as graphic, 8380 as graphic, 8381 as graphic, 8382 as graphic, 8375 as graphic, 8374 as graphic);
    return;
}