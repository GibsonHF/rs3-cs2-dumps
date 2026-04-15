//
function script7127(int0: obj, int1: int, int2: component): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    var int3 = 0;
    var int4 = int1;
    var int5 = 2;
    var string0 = "";
    CC_DELETEALL(int2);
    var int6 = 0;
    var int7 = 0;
    var int8 = item_getparam(int0, 2640);
    var int9 = item_getparam(int0, 2645);
    var int10 = 0;
    var int11 = false;
    var string1 = "";
    var string2 = "";
    var int12 = 1;
    var int13 = 1;
    var int14 = -1;
    var int15 = ((3 + 18) + 5);
    var int16 = (((IF_GETWIDTH(int2) - int15) - 20) - 5);
    var int17 = 0;
    var int18 = item_getparam(int0, 317);
    if ((item_getparam(int0, 7801) > 0)) {
        int18 = 1;
    };
    while ((int13 <= 5)) {
        if ((int8 != 0)) {
            int11 = script7106(int8, int9, int18, item_getparam(int0, 3649), int13);
            string1 = script7128(int0, int8, int9);
            if ((strcmp(string1, "") != 0)) {
                int4 = (int4 + int5);
                int6 = int3;
                int3 = script7132(int2, int3);
                if ((int8 < 61)) {
                    int17 = (int16 - (STRINGWIDTH(inttostring(int9, 10), 26 as fontmetrics) + 15));
                } else {
                    int17 = int16;
                };
                script7134(int2, string1, 26, 1, int4, int15, int17, int3);
                int7 = (int4 + CC_GETHEIGHT());
                int3 = (int3 + 1);
                CC_CREATE[1](int2, 5, int3);
                CC_SETGRAPHIC[1](script7552(int8, int9));
                CC_SETSIZE[1](MIN(18, CC_GETHEIGHT()), MIN(18, CC_GETHEIGHT()), 0, 0);
                CC_SETPOSITION[1](3, (((CC_GETHEIGHT() / 2) - (CC_GETHEIGHT[1]() / 2)) + CC_GETY()), 0, 0);
                int3 = (int3 + 1);
                CC_CREATE[1](int2, 5, int3);
                if ((int11 == false)) {
                    CC_SETGRAPHIC[1](13166 as graphic);
                } else {
                    CC_SETGRAPHIC[1](13165 as graphic);
                };
                CC_SETPOSITION[1]((IF_GETWIDTH(int2) - 20), (((CC_GETHEIGHT() / 2) - 7) + CC_GETY()), 0, 0);
                CC_SETSIZE[1](15, 15, 0, 0);
                int3 = (int3 + 1);
                if ((int8 < 61)) {
                    if ((int11 == true)) {
                        int12 = 3;
                    } else {
                        int12 = 2;
                    };
                    string2 = inttostring(int9, 10);
                    script7134(int2, string2, 26, int12, 0, 0, 30, int3);
                    CC_SETPOSITION((((IF_GETWIDTH(int2) - 20) - 5) - CC_GETWIDTH()), ((CC_GETY[1]() + (CC_GETHEIGHT[1]() / 2)) - (CC_GETHEIGHT() / 2)), 0, 0);
                    int3 = (int3 + 1);
                    CC_CREATE(int2, 5, int3);
                    CC_SETPOSITION(0, (int4 - 1), 0, 0);
                    CC_SETSIZE(IF_GETWIDTH(int2), ((int7 - int4) + 3), 0, 0);
                    string2 = `Current ${enum_getvalue(0, 36, 108 as cs2enum, int8)} level: <col=ffffff>${inttostring(STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int8)), 10)}</col>`;
                    int10 = script7107(int13);
                    if ((int10 > 0)) {
                        string2 = strconcat(string2, `<br>Assister level: <col=ffffff>${inttostring(int10, 10)}</col>`);
                    };
                    CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
                    int3 = (int3 + 1);
                };
                script7133(0, (int4 - 1), IF_GETWIDTH(int2), ((int7 - int4) + 3), int2, int6);
                int4 = (int7 + int5);
            };
        };
        switch (++int13) {
            case 2: {
                int8 = item_getparam(int0, 2641);
                int9 = item_getparam(int0, 2646);
                break;
            }
            case 3: {
                int8 = item_getparam(int0, 2642);
                int9 = item_getparam(int0, 2647);
                break;
            }
            case 4: {
                int8 = item_getparam(int0, 2643);
                int9 = item_getparam(int0, 2648);
                break;
            }
            case 5: {
                int8 = item_getparam(int0, 2644);
                int9 = item_getparam(int0, 2649);
                break;
            }
            default: {
                int8 = 0;
                break;
            }
        };
    };
    if ((script7116(int0) == 1)) {
        int4 = (int4 + int5);
        string0 = "RuneScape Member";
        int6 = int3;
        int3 = script7132(int2, int3);
        script7134(int2, string0, 26, 1, int4, ((3 + 18) + 5), ((IF_GETWIDTH(int2) - 18) - 3), int3);
        int7 = (int4 + CC_GETHEIGHT());
        int3 = (int3 + 1);
        CC_CREATE[1](int2, 5, int3);
        CC_SETGRAPHIC[1](13164 as graphic);
        CC_SETPOSITION[1](3, ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (MIN(18, CC_GETHEIGHT()) / 2)), 0, 0);
        CC_SETSIZE[1](MIN(18, CC_GETHEIGHT()), MIN(18, CC_GETHEIGHT()), 0, 0);
        int3 = (int3 + 1);
        CC_CREATE[1](int2, 5, int3);
        if ((MAP_MEMBERS() == 0)) {
            CC_SETGRAPHIC[1](13166 as graphic);
        } else {
            CC_SETGRAPHIC[1](13165 as graphic);
        };
        CC_SETSIZE[1](15, 15, 0, 0);
        CC_SETPOSITION[1]((IF_GETWIDTH(int2) - 20), (((CC_GETHEIGHT() / 2) - 7) + CC_GETY()), 0, 0);
        int3 = (int3 + 1);
        script7133(0, (int4 - 1), IF_GETWIDTH(int2), ((int7 - int4) + 3), int2, int6);
        int4 = (int7 + int5);
    };
    if ((int4 == int5)) {
        int4 = 0;
    };
    IF_SETSIZE(IF_GETWIDTH(int2), int4, 0, 0, int2);
    return int4;
}