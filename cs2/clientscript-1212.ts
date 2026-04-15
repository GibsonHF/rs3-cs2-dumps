//
function script1212(int0: component, int1: unknown_int, int2: int, int3: int, int4: int, int5: int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, long0: unknown_long, string0: string): void {
    var int10 = 29 as fontmetrics;
    if ((script6431() == true)) {
        int10 = 31 as fontmetrics;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1177, 0));
    var int11 = 0;
    var string1 = "";
    var int12 = 0;
    CC_CREATE(int0, 5, int12);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(20, 22, 1, 1);
    CC_SETTILING(true);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 22, 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETTILING(true);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 22, 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETTILING(true);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(20, 11, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETTILING(true);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(20, 11, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETTILING(true);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 11, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 11, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 11, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 11, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    int12 = (int12 + 1);
    CC_CREATE(int0, 4, int12);
    CC_SETSIZE(22, 20, 1, 1);
    CC_SETPOSITION(0, 10, 1, 0);
    CC_SETTEXTFONT(int10);
    CC_SETCOLOUR(15458492);
    CC_SETTEXTALIGN(1, 0, 15);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(string0);
    int12 = (int12 + 1);
    if ((varclient_1700 == 2)) {
        var int5 = (int5 - 18);
        if (branch_gt_long[232](long0, 0n)) {
            CC_CREATE(int0, 5, int12);
            string1 = "GE guide price";
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            CC_SETSIZE(23, 23, 0, 0);
            CC_SETPOSITION(8, int5, 0, 2);
            CC_SETGRAPHIC(23047);
            int12 = (int12 + 1);
            CC_CREATE(int0, 4, int12);
            CC_SETSIZE(22, 20, 1, 1);
            CC_SETPOSITION(33, int5, 0, 2);
            CC_SETTEXTFONT(29);
            CC_SETCOLOUR(16768768);
            CC_SETTEXTALIGN(0, 2, 15);
            CC_SETTEXTSHADOW(0);
            CC_SETTEXT(`~${TOSTRING_LOCALISED_LONG(long0, 1)} coins`);
            int5 = (int5 - 25);
            int12 = (int12 + 1);
        } else if (((int8 >= 0) && (int9 >= 0))) {
            CC_CREATE(int0, 5, int12);
            CC_SETSIZE(23, 23, 0, 0);
            CC_SETPOSITION(8, int5, 0, 2);
            switch (int8) {
                case 6: {
                    CC_SETGRAPHIC(21879 as graphic);
                    string1 = "Sell price (chimes)";
                    break;
                }
            };
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            int12 = (int12 + 1);
            CC_CREATE(int0, 4, int12);
            CC_SETSIZE(22, 20, 1, 1);
            CC_SETPOSITION(33, int5, 0, 2);
            CC_SETTEXTFONT(29);
            CC_SETCOLOUR(15458492);
            CC_SETTEXTALIGN(0, 2, 15);
            CC_SETTEXTSHADOW(0);
            CC_SETTEXT(`= ${TOSTRING_LOCALISED(int9, 1)}`);
            int5 = (int5 - 25);
            int12 = (int12 + 1);
        };
        if ((int7 > 0)) {
            CC_CREATE(int0, 5, int12);
            string1 = "High level alchemy value";
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            CC_SETSIZE(23, 23, 0, 0);
            CC_SETPOSITION(8, int5, 0, 2);
            CC_SETGRAPHIC(14379);
            int12 = (int12 + 1);
            CC_CREATE(int0, 4, int12);
            CC_SETSIZE(22, 20, 1, 1);
            CC_SETPOSITION(33, int5, 0, 2);
            CC_SETTEXTFONT(29);
            CC_SETCOLOUR(16768768);
            CC_SETTEXTALIGN(0, 2, 15);
            CC_SETTEXTSHADOW(0);
            CC_SETTEXT(`= ${TOSTRING_LOCALISED(int7, 1)} coins`);
            int5 = (int5 - 25);
            int12 = (int12 + 1);
        };
        if ((int6 >= 0)) {
            CC_CREATE(int0, 5, int12);
            string1 = "Number in bank";
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            CC_SETSIZE(23, 23, 0, 0);
            CC_SETPOSITION(8, int5, 0, 2);
            CC_SETGRAPHIC(22458);
            int12 = (int12 + 1);
            CC_CREATE(int0, 4, int12);
            CC_SETSIZE(22, 20, 1, 1);
            CC_SETPOSITION(33, int5, 0, 2);
            CC_SETTEXTFONT(29);
            CC_SETCOLOUR(15458492);
            CC_SETTEXTALIGN(0, 2, 15);
            CC_SETTEXTSHADOW(0);
            CC_SETTEXT(`x ${TOSTRING_LOCALISED(int6, 1)}`);
            int5 = (int5 - 25);
            int12 = (int12 + 1);
        };
    };
    int12 = 0;
    while ((int12 < 9)) {
        if ((((varclient_1700 == -1) || (varclient_1700 == 0)) || (varclient_1700 == 2))) {
            switch (int12) {
                case 0: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8515 as graphic);
                    };
                    break;
                }
                case 1: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8514 as graphic);
                    };
                    break;
                }
                case 2: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8516 as graphic);
                    };
                    break;
                }
                case 3: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8512 as graphic);
                    };
                    break;
                }
                case 4: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8518 as graphic);
                    };
                    break;
                }
                case 5: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8513 as graphic);
                    };
                    break;
                }
                case 6: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8511 as graphic);
                    };
                    break;
                }
                case 7: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8517 as graphic);
                    };
                    break;
                }
                case 8: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8519 as graphic);
                    };
                    break;
                }
            };
            int12 = (int12 + 1);
        } else if ((varclient_1700 == 1)) {
            switch (int12) {
                case 0: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8524 as graphic);
                    };
                    break;
                }
                case 1: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8523 as graphic);
                    };
                    break;
                }
                case 2: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8525 as graphic);
                    };
                    break;
                }
                case 3: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8521 as graphic);
                    };
                    break;
                }
                case 4: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8527 as graphic);
                    };
                    break;
                }
                case 5: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8522 as graphic);
                    };
                    break;
                }
                case 6: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8520 as graphic);
                    };
                    break;
                }
                case 7: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8526 as graphic);
                    };
                    break;
                }
                case 8: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8528 as graphic);
                    };
                    break;
                }
            };
            int12 = (int12 + 1);
        };
    };
    return;
}