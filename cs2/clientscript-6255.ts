//
function script6255(int0: component, int1: component, int2: int): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = 0;
    var int7 = -1 as obj;
    var string0 = "";
    var int8 = 1;
    var int9 = 1;
    var int10 = -1;
    var int11 = enum_getvalue(0, 26, 15109 as cs2enum, int2);
    var int12 = ENUM_GETOUTPUTCOUNT(15103 as cs2enum);
    var int13 = IF_GETWIDTH(int0);
    var int14 = 0;
    var int15 = 0;
    var int16 = -1;
    var int17 = 0;
    var int18 = 13;
    if ((varbitplayer_34815 == 1)) {
        if ((varbitplayer_38842 == 1)) {
            int14 = 1;
            int18 = 30;
        } else {
            [int14, int13, int17] = script8107(int13, 112);
        };
    } else {
        [int14, int13, int17] = script8107(int13, 43);
    };
    var int19 = 26 as fontmetrics;
    while ((++int5 < int12)) {
        int7 = enum_getvalue(0, 33, 15103 as cs2enum, int5);
        int8 = script5860(int7);
        int9 = 1;
        if ((int11 != -1 as cs2enum)) {
            int9 = enum_getvalue(33, 0, int11, int7);
        };
        string0 = OC_NAME(int7);
        if ((CC_FIND(int0, int5) == 1)) {
            if ((varbitplayer_34815 == 1)) {
                CC_SETSIZE(107, int18, 0, 0);
            } else {
                CC_SETSIZE(36, 32, 0, 0);
            };
            if ((int8 == 0)) {
                CC_SETCOLOUR(4210752);
            } else {
                CC_SETCOLOUR(16777215);
            };
            string0 = OC_NAME(int7);
            CC_SETOP(1, string0);
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            if ((varbitplayer_34815 == 1)) {
                CC_SETTEXT(string0);
                CC_SETTEXTFONT(int19);
                CC_SETMAXLINES(1);
                if ((int8 == 1)) {
                    script11024(3);
                } else {
                    script11024(5);
                };
            } else {
                CC_SETOBJECT(int7, 1);
            };
            if (((int9 == 1) && ((int2 == 1) || (item_getparam(int7, 3326) != 0)))) {
                int9 = int8;
            };
            if (((int9 == 1) && (int8 == 1))) {
                if ((item_getparam(int7, 5430) == 1)) {
                    CC_SETOP(2, enum_getvalue(33, 36, 15104 as cs2enum, int7));
                };
                if ((item_getparam(int7, 863) == 1)) {
                    CC_SETOP(3, "Reclaim");
                };
            } else {
                CC_SETOP(2, "");
                CC_SETOP(3, "");
            };
            if ((int9 == 1)) {
                CC_SETHIDE(false);
                if ((varbitplayer_34815 == 1)) {
                    if ((int14 > 1)) {
                        int15 = MODULO(int6, int14);
                        if ((int15 == 0)) {
                            int16 = (int16 + 1);
                        };
                        int3 = script8108(int13, int17, int15);
                    } else {
                        int16 = (int16 + 1);
                        CC_SETSIZE(0, int18, 1, 0);
                    };
                    int4 = (int18 * int16);
                    CC_SETPOSITION(int3, int4, 0, 0);
                    int6 = (int6 + 1);
                } else {
                    int15 = MODULO(int6, int14);
                    if ((int15 == 0)) {
                        int16 = (int16 + 1);
                    };
                    int3 = script8108(int13, int17, int15);
                    int4 = (58 * int16);
                    CC_SETPOSITION(int3, int4, 0, 0);
                    int6 = (int6 + 1);
                };
            } else {
                CC_SETHIDE(true);
            };
            CC_SETPOSITION(int3, int4, 0, 0);
        };
    };
    var int20 = (int4 + 58);
    if ((varbitplayer_34815 == 1)) {
        int20 = (int4 + int18);
    };
    IF_SETSCROLLSIZE(0, int20, int0);
    IF_SETHIDE(false, int1);
    script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    varclient_6540 = int2;
    return;
}