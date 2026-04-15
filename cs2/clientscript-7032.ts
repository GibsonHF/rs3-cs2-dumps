//
function script7032(int0: int, int1: int): void {
    var int2 = -1 as cs2enum;
    var int3 = 0;
    var string0 = "";
    var string1 = "";
    switch (int1) {
        case 1: {
            int2 = 1010 as cs2enum;
            string1 = "Hulls";
            break;
        }
        case 2: {
            int2 = 1011 as cs2enum;
            string1 = "Deck Items 1";
            break;
        }
        case 3: {
            int2 = 1011 as cs2enum;
            string1 = "Deck Items 2";
            break;
        }
        case 4: {
            int2 = 1012 as cs2enum;
            string1 = "Rudders";
            break;
        }
        case 5: {
            int2 = 1013 as cs2enum;
            string1 = "Rams/Figureheads";
            break;
        }
    };
    if (((int0 > 0) && (int1 > 0))) {
        int3 = script1161(int0, int1);
    };
    IF_SETTEXT(string1, comp(916, 110));
    CC_DELETEALL(comp(916, 112));
    CC_DELETEALL(comp(916, 114));
    CC_DELETEALL(comp(916, 115));
    CC_DELETEALL(comp(916, 113));
    CC_DELETEALL(comp(916, 116));
    IF_SETHIDE(true, comp(916, 116));
    IF_SETHIDE(true, comp(916, 107));
    if (((int2 == -1 as cs2enum) || (varclient_2611 > 0))) {
        IF_SETOPKEY(1, 13, 0, comp(916, 344));
        IF_SETOPKEY(1, 0, 0, comp(916, 381));
        return;
    };
    IF_SETOPKEY(1, 0, 0, comp(916, 344));
    IF_SETOPKEY(1, 13, 0, comp(916, 381));
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as struct;
    var int10 = 0;
    var int11 = 0;
    while ((int4 < ENUM_GETOUTPUTCOUNT(int2))) {
        int9 = enum_getvalue(0, 73, int2, int4);
        if ((int9 == -1 as struct)) {
            return;
        };
        int8 = 0;
        int11 = struct_getparam(int9, 4485);
        switch (int1) {
            case 1: {
                int7 = TESTBIT(varplayer_3378, int4);
                while ((int11 > 0)) {
                    if (((TESTBIT(varplayer_3378, int11) == 1) || ((int4 == 0) && (varplayer_3378 != 0)))) {
                        int8 = 1;
                        int11 = -2;
                    } else {
                        int11 = struct_getparam(enum_getvalue(0, 73, 1010 as cs2enum, int11), 4485);
                    };
                };
                break;
            }
            case 2:
            case 3: {
                int7 = TESTBIT(varplayer_3379, int4);
                while ((int11 > 0)) {
                    if ((TESTBIT(varplayer_3379, int11) == 1)) {
                        int8 = 1;
                        int11 = -2;
                    } else {
                        int11 = struct_getparam(enum_getvalue(0, 73, 1011 as cs2enum, int11), 4485);
                    };
                };
                break;
            }
            case 4: {
                int7 = TESTBIT(varbitplayer_17033, int4);
                while ((int11 > 0)) {
                    if ((TESTBIT(varbitplayer_17033, int11) == 1)) {
                        int8 = 1;
                        int11 = -2;
                    } else {
                        int11 = struct_getparam(enum_getvalue(0, 73, 1012 as cs2enum, int11), 4485);
                    };
                };
                break;
            }
            case 5: {
                int7 = TESTBIT(varbitplayer_17034, int4);
                while ((int11 > 0)) {
                    if ((TESTBIT(varbitplayer_17034, int11) == 1)) {
                        int8 = 1;
                        int11 = -2;
                    } else {
                        int11 = struct_getparam(enum_getvalue(0, 73, 1013 as cs2enum, int11), 4485);
                    };
                };
                break;
            }
        };
        if (((int4 == int3) || (varbitplayer_23248 == 0))) {
            int8 = 0;
        };
        if ((int8 == 0)) {
            int5 = (int5 + 1);
            script13998(comp(916, 112), comp(916, 113), 28556 as struct, 0, int6, (IF_GETWIDTH(comp(916, 111)) - 5), 32, int4, false, "", script9670(varplayer_3391, int4));
        } else {
            script10410(comp(916, 112), comp(916, 113), 28556 as struct, -1, -1, 1, 1, int4, false, "");
        };
        CC_CREATE(comp(916, 114), 4, int4);
        CC_SETCOLOUR(16777215);
        CC_SETTEXT(`   ${struct_getparam(int9, 662)}`);
        if ((int8 == 0)) {
            CC_SETSIZE(IF_GETWIDTH(comp(916, 111)), 32, 0, 0);
        } else {
            CC_SETSIZE(0, 0, 0, 0);
        };
        CC_SETPOSITION(0, int6, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 12);
        IF_SETCOLOUR(16446166, comp(916, 141));
        IF_SETCOLOUR(16446166, comp(916, 143));
        CC_CREATE(comp(916, 115), 5, int4);
        if (((int7 == 0) && (int8 == 0))) {
            int10 = 1;
            CC_SETSIZE(12, 15, 0, 0);
            CC_SETPOSITION(6, (int6 + ((32 - 15) / 2)), 2, 0);
            switch (struct_getparam(int9, 701)) {
                case 1: {
                    if ((struct_getparam(int9, 702) > varplayer_3441)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 2: {
                    if ((struct_getparam(int9, 702) > varplayer_3442)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 3: {
                    if ((struct_getparam(int9, 702) > varplayer_3443)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 4: {
                    if ((struct_getparam(int9, 702) > varplayer_3444)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 5: {
                    if ((struct_getparam(int9, 702) > varplayer_3445)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 6: {
                    if ((struct_getparam(int9, 702) > varplayer_3446)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 7: {
                    if ((struct_getparam(int9, 702) > varplayer_3447)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 8: {
                    if ((struct_getparam(int9, 702) > varplayer_4038)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
                case 9: {
                    if ((struct_getparam(int9, 702) > varplayer_4039)) {
                        IF_SETCOLOUR(16711680, comp(916, 141));
                        int10 = 0;
                    };
                    break;
                }
            };
            switch (struct_getparam(int9, 703)) {
                case 1: {
                    if ((struct_getparam(int9, 704) > varplayer_3441)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 2: {
                    if ((struct_getparam(int9, 704) > varplayer_3442)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 3: {
                    if ((struct_getparam(int9, 704) > varplayer_3443)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 4: {
                    if ((struct_getparam(int9, 704) > varplayer_3444)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 5: {
                    if ((struct_getparam(int9, 704) > varplayer_3445)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 6: {
                    if ((struct_getparam(int9, 704) > varplayer_3446)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 7: {
                    if ((struct_getparam(int9, 704) > varplayer_3447)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 8: {
                    if ((struct_getparam(int9, 704) > varplayer_4038)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
                case 9: {
                    if ((struct_getparam(int9, 704) > varplayer_4039)) {
                        IF_SETCOLOUR(16711680, comp(916, 143));
                        int10 = 0;
                    };
                    break;
                }
            };
            if ((int10 == 0)) {
                CC_SETGRAPHIC(9998 as graphic);
            } else {
                CC_SETGRAPHIC(9996 as graphic);
            };
        } else {
            if ((int4 == int3)) {
                CC_SETGRAPHIC(13165 as graphic);
            };
            if ((int8 == 0)) {
                CC_SETSIZE(15, 15, 0, 0);
            } else {
                CC_SETSIZE(0, 0, 0, 0);
            };
            CC_SETPOSITION(7, (int6 + ((32 - 15) / 2)), 2, 0);
        };
        int4 = (int4 + 1);
        if ((int8 == 0)) {
            int6 = ((int6 + 32) + 5);
        };
    };
    IF_SETSCROLLSIZE(0, int6, comp(916, 111));
    script7791(comp(916, 116), comp(916, 111));
    IF_SETHIDE(false, comp(916, 107));
    IF_SETHIDE(true, comp(916, 178));
    IF_SETHIDE(true, comp(916, 146));
    IF_SETHIDE(false, comp(916, 322));
    IF_SETHIDE(true, comp(916, 321));
    IF_SETHIDE(true, comp(916, 334));
    if ((int5 < 6)) {
        IF_SETHIDE(true, comp(916, 116));
    } else {
        IF_SETHIDE(false, comp(916, 116));
    };
    switch (int1) {
        case 1: {
            IF_SETPOSITION(0, 17, 1, 1, comp(916, 107));
            break;
        }
        case 2: {
            IF_SETPOSITION(-117, 17, 1, 1, comp(916, 107));
            break;
        }
        case 3: {
            IF_SETPOSITION(125, 17, 1, 1, comp(916, 107));
            break;
        }
        case 4: {
            IF_SETPOSITION(255, 17, 1, 1, comp(916, 107));
            break;
        }
        case 5: {
            IF_SETPOSITION(-255, 17, 1, 1, comp(916, 107));
            break;
        }
    };
    return;
}