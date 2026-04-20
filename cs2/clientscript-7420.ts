//
function script7420(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component): unknown_int {
    script2855();
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var int10 = 0;
    var string1 = "";
    var int11 = 0;
    var int12 = 0;
    var string2 = "";
    stack(unk11101());
    [int8, int9, string0, int10, string1, int11, int12, string2] = stack();
    if ((int8 == -1)) {
        return 0;
    };
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = IF_GETWIDTH(int0);
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var string3 = "";
    var int21 = -1 as graphic;
    var int22 = 0;
    var int23 = 30;
    var int24 = 0;
    var int25 = 22;
    var int26 = script20117(-1);
    var int27 = 4;
    var int28 = int27;
    if ((script6431() == true)) {
        int25 = 44;
    };
    var int29 = int1;
    var int30 = int2;
    if ((script7421(int26, script20335(1)) == 1)) {
        int24 = ((int24 + int25) + int27);
    };
    if ((script7421(int26, script20335(2)) == 1)) {
        int24 = ((int24 + int25) + int27);
    };
    if ((script7421(int26, script20335(3)) == 1)) {
        int24 = ((int24 + int25) + int27);
    };
    if ((int24 != 0)) {
        int24 = (int24 + int27);
    };
    if ((int26 == -1 as dbrow)) {
        IF_SETHIDE(true, comp(1587, 3));
        IF_SETONBUTTONCLICK(callback(), 104005750);
        IF_SETONBUTTONCLICK(callback(), 104005752);
        IF_SETPOSITION(0, 0, 0, 0, 104005644);
        IF_SETSIZE(0, 0, 1, 1, 104005644);
    } else {
        int23 = (int23 + 40);
        IF_SETPOSITION(0, 40, 0, 0, comp(1587, 12));
        IF_SETSIZE(0, 40, 1, 1, comp(1587, 12));
        IF_SETHIDE(false, comp(1587, 3));
        IF_SETONBUTTONCLICK(callback(script20340, int0, int1, int2, int3, int4, int5, int6, int7), 104005750);
        IF_SETONBUTTONCLICK(callback(script20341, int0, int1, int2, int3, int4, int5, int6, int7), 104005752);
        script20342();
    };
    IF_SETCOLOUR(0, comp(1587, 16));
    IF_SETCOLOUR(0, comp(1587, 21));
    IF_SETCOLOUR(0, comp(1587, 32));
    IF_SETCOLOUR(0, comp(1587, 40));
    IF_SETCOLOUR(0, comp(1587, 48));
    IF_SETCOLOUR(0, comp(1587, 56));
    IF_SETCOLOUR(0, comp(1587, 64));
    IF_SETCOLOUR(16777215, comp(1587, 14));
    IF_SETCOLOUR(16777215, comp(1587, 7));
    IF_SETCOLOUR(16777215, comp(1587, 65));
    IF_SETPOSITION(0, int23, 0, 0, int4);
    IF_SETSIZE(IF_GETWIDTH(int4), int24, 0, 0, int4);
    IF_SETSIZE(int17, ((35 + int24) + int23), 0, 1, int0);
    IF_SETPOSITION(0, (int24 + int23), 0, 0, int0);
    IF_SETSIZE(16, ((35 + int24) + int23), 0, 1, int3);
    IF_SETPOSITION(0, (int24 + int23), 2, 0, int3);
    var int31 = ((IF_GETWIDTH(comp(1587, 0)) - 800) - 16);
    while ((int8 != -1)) {
        if ((script7421(int26, int8) == 1)) {
            if ((((int8 == script20335(1)) || (int8 == script20335(2))) || (int8 == script20335(3)))) {
                [int18, int13, int22, int21] = [script11037(int19, int27), 1, 23793 as graphic];
                int29 = int5;
                int30 = int6;
            } else {
                [int18, int22, int21] = [int28, 0, 23795 as graphic];
                if ((MODULO(int15, 2) == 0)) {
                    int13 = 12;
                } else {
                    int13 = 9;
                };
                int29 = int1;
                int30 = int2;
            };
            if ((varbitplayer_58378 == 1)) {
                if ((int21 == 23793 as graphic)) {
                    int21 = 35260 as graphic;
                } else {
                    int21 = 35261 as graphic;
                };
            };
            if ((MAP_WORLD() == int8)) {
                int13 = 17;
                int20 = int18;
            };
            if ((TESTBIT(int9, 0) == 0)) {
                int14 = 3;
            } else {
                int14 = 1;
            };
            script11015(int29, int13, 0, int18, int17, int26);
            script7742(int29, int21, 2, (int18 + ((int25 - 21) / 2)), 21, 21);
            CC_SETOP(1, "Toggle favourite");
            CC_SETONOP(callback(script7426, -2147483645, -2147483643, int22, int0, int1, int2, int3, int4, int5, int6, int7, int8));
            CC_SETONMOUSEOVER(callback(script7437, -2147483645, -2147483643, int8));
            CC_SETONMOUSELEAVE(callback(script7438, -2147483645, -2147483643, int8));
            script11014(int29, inttostring(int8, 10), int14, 30, int18, 64, int26);
            if ((int11 >= 1980)) {
                string3 = "FULL";
            } else if ((int11 >= 0)) {
                string3 = inttostring(int11, 10);
            } else {
                string3 = "OFFLINE";
            };
            script11014(int29, string3, int14, 105, int18, 70, int26);
            switch (MAP_LANG()) {
                case 1: {
                    int21 = enum_getvalue(0, 23, 1810 as cs2enum, 56);
                    string1 = "German";
                    break;
                }
                case 2: {
                    int21 = enum_getvalue(0, 23, 1810 as cs2enum, 74);
                    string1 = "French";
                    break;
                }
                case 3: {
                    int21 = enum_getvalue(0, 23, 1810 as cs2enum, 31);
                    string1 = "Portuguese";
                    break;
                }
                case 6: {
                    int21 = enum_getvalue(0, 23, 1810 as cs2enum, 67);
                    string1 = "Spanish (Latin American)";
                    break;
                }
                default: {
                    int21 = enum_getvalue(0, 23, 1810 as cs2enum, int10);
                    break;
                }
            };
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "-";
            };
            script7742(int29, int21, 409, (int18 + ((int25 - 12) / 2)), 12, 24);
            script11014(int29, string0, int14, 180, int18, 225, int26);
            script11014(int29, string1, int14, 435, int18, 214, int26);
            if ((TESTBIT(int9, 0) == 0)) {
                script11014(int29, "Free", int14, (655 + int31), int18, 65, int26);
            } else {
                script11014(int29, "Members", int14, (655 + int31), int18, 65, int26);
            };
            if ((TESTBIT(int9, 3) == 1)) {
                script7742(int29, 18694 as graphic, (736 + int31), (int18 + ((int25 - 16) / 2)), 16, 16);
            } else {
                script7742(int29, 23768 as graphic, (736 + int31), (int18 + ((int25 - 16) / 2)), 16, 16);
            };
            if ((CC_FIND(int30, int8) == 1)) {
                CC_SETOP(1, "Select");
                CC_SETOP(2, "Quick-hop");
                CC_SETPOSITION((30 - 5), int18, 0, 0);
                CC_SETSIZE(((int17 - 30) + 5), int25, 0, 0);
                CC_SETHIDE(false);
            };
            if ((int22 == 0)) {
                int28 = ((int28 + int25) + int27);
            } else {
                int19 = (int19 + 1);
            };
            int15 = (int15 + 1);
        };
        stack(unk11100());
        [int8, int9, string0, int10, string1, int11, int12, string2] = stack();
    };
    var int32 = IF_GETHEIGHT(int0);
    if ((int28 > int32)) {
        IF_SETSCROLLSIZE(0, int28, int0);
        if ((int20 != 0)) {
            IF_SETSCROLLPOS(0, MAX(0, MIN(int28, (int20 - (int32 / 2)))), int0);
        };
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
    };
    script31(int3, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    return 1;
}