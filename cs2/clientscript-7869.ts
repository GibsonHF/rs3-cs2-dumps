//
function script7869(int0: idkit, int1: idkit, int2: idkit, int3: idkit, int4: idkit, int5: int, int6: int, int7: int, int8: int, int9: int): void {
    var int10 = -1 as cs2enum;
    var int11 = -1 as cs2enum;
    var int12 = -1 as cs2enum;
    var int13 = -1;
    var int14 = -1 as idkit;
    var int15 = -1 as cs2enum;
    var int16 = -1 as cs2enum;
    var int17 = -1 as cs2enum;
    var int18 = -1;
    var int19 = -1;
    var int20 = -1;
    var string0 = "";
    switch (varclient_3482) {
        case 0: {
            int15 = 748 as cs2enum;
            int16 = 746 as cs2enum;
            int17 = 747 as cs2enum;
            int18 = 4;
            if ((int5 == -1)) {
                int19 = varclient_1019;
            } else {
                int19 = int5;
            };
            string0 = "Select skin colour:";
            break;
        }
        case 1: {
            if ((GENDER() == 1)) {
                int10 = 3302 as cs2enum;
                int11 = 3303 as cs2enum;
                int13 = 7;
            } else {
                int10 = 3304 as cs2enum;
                int11 = 3305 as cs2enum;
                int13 = 0;
            };
            if ((int0 == -1 as idkit)) {
                int14 = varclient_1008;
            } else {
                int14 = int0;
            };
            int15 = 2345 as cs2enum;
            int16 = 2343 as cs2enum;
            int17 = 2344 as cs2enum;
            int18 = 0;
            if ((varbitplayer_49031 == 1)) {
                int18 = 6;
            };
            if ((int6 == -1)) {
                int19 = varclient_1015;
                int20 = varclient_6881;
            } else if ((varbitplayer_49031 == 1)) {
                int19 = varclient_1015;
                int20 = int6;
            } else {
                int19 = int6;
                int20 = varclient_6881;
            };
            string0 = "Select hairstyle:";
            break;
        }
        case 5: {
            if ((varclient_3687 != 1)) {
                int10 = 3307 as cs2enum;
                int11 = 3306 as cs2enum;
                int12 = 15477 as cs2enum;
                int13 = 1;
                if ((int4 == -1 as idkit)) {
                    int14 = varclient_1009;
                } else {
                    int14 = int4;
                };
                int15 = 2345 as cs2enum;
                int16 = 2343 as cs2enum;
                int17 = 2344 as cs2enum;
                int18 = 0;
                if ((int6 == -1)) {
                    int19 = varclient_1015;
                } else {
                    int19 = int6;
                };
            };
            string0 = "Select facial hair:";
            break;
        }
        case 2: {
            if ((GENDER() == 1)) {
                int10 = 3299 as cs2enum;
                int11 = 8741 as cs2enum;
                int12 = 8740 as cs2enum;
                int13 = 9;
            } else {
                int10 = 3287 as cs2enum;
                int11 = 8737 as cs2enum;
                int12 = 8736 as cs2enum;
                int13 = 2;
            };
            if ((int1 == -1 as idkit)) {
                int14 = varclient_1010;
            } else {
                int14 = int1;
            };
            int15 = 3282 as cs2enum;
            int16 = 2347 as cs2enum;
            int17 = 2348 as cs2enum;
            int18 = 1;
            if ((int7 == -1)) {
                int19 = varclient_1016;
            } else {
                int19 = int7;
            };
            string0 = "Select torso:";
            break;
        }
        case 3: {
            if ((GENDER() == 1)) {
                int10 = 3301 as cs2enum;
                int11 = 8743 as cs2enum;
                int12 = 8742 as cs2enum;
                int13 = 12;
            } else {
                int10 = 3289 as cs2enum;
                int11 = 8739 as cs2enum;
                int12 = 8738 as cs2enum;
                int13 = 5;
            };
            if ((int2 == -1 as idkit)) {
                int14 = varclient_1013;
            } else {
                int14 = int2;
            };
            int15 = 3282 as cs2enum;
            int16 = 2347 as cs2enum;
            int17 = 2348 as cs2enum;
            int18 = 2;
            if ((int8 == -1)) {
                int19 = varclient_1017;
            } else {
                int19 = int8;
            };
            string0 = "Select legs:";
            break;
        }
        case 4: {
            if ((GENDER() == 1)) {
                int10 = 3293 as cs2enum;
                int11 = 8735 as cs2enum;
                int12 = 8734 as cs2enum;
                int13 = 13;
            } else {
                int10 = 3290 as cs2enum;
                int11 = 8733 as cs2enum;
                int12 = 8732 as cs2enum;
                int13 = 6;
            };
            if ((int3 == -1 as idkit)) {
                int14 = varclient_1014;
            } else {
                int14 = int3;
            };
            int15 = 3297 as cs2enum;
            int16 = 753 as cs2enum;
            int17 = 3296 as cs2enum;
            int18 = 3;
            if ((int9 == -1)) {
                int19 = varclient_1018;
            } else {
                int19 = int9;
            };
            string0 = "Select footwear:";
            break;
        }
        default: {
            CC_DELETEALL(comp(1420, 98));
            CC_DELETEALL(comp(1420, 99));
            CC_DELETEALL(comp(1420, 100));
            CC_DELETEALL(comp(1420, 130));
            CC_DELETEALL(comp(1420, 101));
            return;
        }
    };
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = -1 as struct;
    var int27 = -1 as idkit;
    var int28 = -1;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var string1 = "";
    var int32 = 0;
    var int33 = 0;
    CC_DELETEALL(comp(1420, 98));
    CC_DELETEALL(comp(1420, 99));
    CC_DELETEALL(comp(1420, 100));
    if ((((int10 != -1 as cs2enum) && (int11 != -1 as cs2enum)) && (int13 != -1))) {
        int25 = ((IF_GETWIDTH(comp(1420, 97)) - (4 * 86)) / 5);
        int23 = ENUM_GETOUTPUTCOUNT(int10);
        while ((int21 < int23)) {
            int32 = 0;
            if ((varclient_3482 == 1)) {
                int26 = enum_getvalue(0, 73, int10, int21);
                if ((int26 != -1 as struct)) {
                    string1 = struct_getparam(int26, 792);
                    int27 = struct_getparam(int26, 788);
                } else {
                    stack(-1 as idkit);
                    stack("");
                    [int27, string1] = stack();
                };
            } else {
                string1 = enum_getvalue(0, 36, int12, int21);
                int27 = enum_getvalue(0, 10, int10, int21);
            };
            int30 = (int25 + (MODULO(int22, 4) * (86 + int25)));
            int31 = ((int22 / 4) * (86 + 6));
            if ((int14 == int27)) {
                int33 = 1;
                int29 = int31;
            } else {
                int33 = 0;
            };
            script14408(comp(1420, 98), 651 as struct, int30, int31, int21, 0, int33);
            if ((CC_FIND(comp(1420, 98), int21) == 1)) {
                CC_SETOP(1, string1);
                CC_SETONOP(callback(script7860, -2147483644, int27, int13));
                CC_SETONCLICK(callback());
                CC_SETONRELEASE(callback());
            };
            script4512(comp(1420, 99), 80, 80, (int30 + 4), (int31 + 4), enum_getvalue(0, 23, int11, int21));
            int24 = int31;
            int21 = (int21 + 1);
            if ((int32 == 0)) {
                int22 = (int22 + 1);
            };
        };
        int24 = (int24 + 86);
    };
    if ((int24 > IF_GETHEIGHT(comp(1420, 97)))) {
        IF_SETSCROLLSIZE(0, int24, comp(1420, 97));
        if ((int29 < IF_GETSCROLLY(comp(1420, 97)))) {
            IF_SETSCROLLPOS(0, (int29 - 30), comp(1420, 97));
        } else if (((int29 + 86) >= (IF_GETSCROLLY(comp(1420, 97)) + IF_GETHEIGHT(comp(1420, 97))))) {
            IF_SETSCROLLPOS(0, (((int29 + 86) + 30) - IF_GETHEIGHT(comp(1420, 97))), comp(1420, 97));
        };
        script7791(comp(1420, 101), comp(1420, 97));
    } else {
        IF_SETSCROLLPOS(0, 0, comp(1420, 97));
        IF_SETSCROLLSIZE(0, 0, comp(1420, 97));
        CC_DELETEALL(comp(1420, 101));
    };
    CC_DELETEALL(comp(1420, 130));
    var int34 = -1;
    int28 = -1;
    int21 = 0;
    var int35 = (45 + 15);
    var int36 = ((IF_GETWIDTH(comp(1420, 130)) - (5 * 45)) / 2);
    var int37 = ((int35 * 5) - 15);
    int37 = ((IF_GETWIDTH(comp(1420, 130)) - int37) / 2);
    var int38 = (IF_GETHEIGHT(comp(1420, 130)) / int35);
    var int39 = 0;
    var int40 = 19;
    var int41 = 0;
    if ((((int15 != -1 as cs2enum) && (int16 != -1 as cs2enum)) && (int18 != -1))) {
        int23 = ENUM_GETOUTPUTCOUNT(int15);
        if ((int23 > 24)) {
            int23 = 24;
        };
        while ((int21 < int23)) {
            if (((int21 != 0) && (MODULO(int21, 5) == 0))) {
                int40 = (int40 + int35);
                if (((int40 / int35) == int38)) {
                    int40 = (int40 + 50);
                };
            };
            CC_CREATE(comp(1420, 130), 3, (int21 * 2));
            CC_SETSIZE(45, 45, 0, 0);
            CC_SETPOSITION((int37 + (MODULO(int21, 5) * int35)), (int40 + 5), 0, 0);
            CC_SETFILL(1);
            CC_CREATE[1](comp(1420, 130), 5, ((int21 * 2) + 1));
            CC_SETSIZE[1]((CC_GETWIDTH() + 7), (CC_GETHEIGHT() + 7), 0, 0);
            CC_SETPOSITION[1]((CC_GETX() - (7 / 2)), (CC_GETY() - (7 / 2)), 0, 0);
            CC_SETGRAPHIC[1](19663 as graphic);
            switch (varclient_3482) {
                case 2:
                case 3: {
                    int39 = enum_getvalue(0, 0, 7721 as cs2enum, int21);
                    break;
                }
                case 4: {
                    int39 = enum_getvalue(0, 0, 7722 as cs2enum, int21);
                    break;
                }
                case 1:
                case 5: {
                    int39 = enum_getvalue(0, 0, 7723 as cs2enum, int21);
                    break;
                }
                default: {
                    int39 = enum_getvalue(0, 0, 7724 as cs2enum, int21);
                    break;
                }
            };
            CC_SETCOLOUR(enum_getvalue(0, 0, int16, int39));
            string1 = enum_getvalue(0, 36, int17, int39);
            int34 = enum_getvalue(0, 0, int15, int39);
            CC_SETOP(1, string1);
            CC_SETONMOUSEOVER(callback(script7870, -2147483645, -2147483643, ((int23 * 2) + 1), string1, 2, 1, int18, int34));
            CC_SETONMOUSELEAVE(callback(script7870, -2147483645, -2147483643, ((int23 * 2) + 1), string1, 2, 0, int18, int34));
            if ((int19 == int34)) {
                int28 = (int21 * 2);
            } else {
                CC_SETONOP(callback(script7861, -2147483644, int34, int18));
            };
            int21 = (int21 + 1);
        };
        int41 = (((19 + int40) + int35) + 18);
    } else {
        int23 = 0;
    };
    IF_SETSIZE(0, int41, 1, 0, comp(1420, 127));
    script15575(int28);
    script15576();
    int23 = (int23 * 2);
    CC_CREATE[1](comp(1420, 130), 5, int23++);
    if (((int28 != -1) && (CC_FIND(comp(1420, 130), int28) == 1))) {
        CC_SETSIZE[1]((CC_GETWIDTH() + 0), (CC_GETHEIGHT() + 0), 0, 0);
        CC_SETPOSITION[1]((CC_GETX() - (0 / 2)), (CC_GETY() - (0 / 2)), 0, 0);
        CC_SETGRAPHIC[1](19634 as graphic);
    } else {
        CC_SETHIDE[1](true);
    };
    return;
}