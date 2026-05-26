//
function script1212(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, long0: BigInt, string0: string): void {
    var int10 = 29;
    if ((script6431() == 1)) {
        int10 = 31;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(77135872);
    var int11 = 0;
    var string1 = "";
    var int12 = 0;
    CC_CREATE(int0, 5, int12);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(20, 22, 1, 1);
    CC_SETTILING(1);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 22, 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETTILING(1);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(10, 22, 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETTILING(1);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(20, 11, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETTILING(1);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETSIZE(20, 11, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETTILING(1);
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
    CC_SETTEXTSHADOW(0);
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
                    CC_SETGRAPHIC(21879);
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
                        CC_SETGRAPHIC(8515);
                    };
                    break;
                }
                case 1: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8514);
                    };
                    break;
                }
                case 2: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8516);
                    };
                    break;
                }
                case 3: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8512);
                    };
                    break;
                }
                case 4: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8518);
                    };
                    break;
                }
                case 5: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8513);
                    };
                    break;
                }
                case 6: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8511);
                    };
                    break;
                }
                case 7: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8517);
                    };
                    break;
                }
                case 8: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8519);
                    };
                    break;
                }
            };
            int12 = (int12 + 1);
        } else if ((varclient_1700 == 1)) {
            switch (int12) {
                case 0: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8524);
                    };
                    break;
                }
                case 1: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8523);
                    };
                    break;
                }
                case 2: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8525);
                    };
                    break;
                }
                case 3: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8521);
                    };
                    break;
                }
                case 4: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8527);
                    };
                    break;
                }
                case 5: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8522);
                    };
                    break;
                }
                case 6: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8520);
                    };
                    break;
                }
                case 7: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8526);
                    };
                    break;
                }
                case 8: {
                    if ((CC_FIND(int0, int12) == 1)) {
                        CC_SETGRAPHIC(8528);
                    };
                    break;
                }
            };
            int12 = (int12 + 1);
        };
    };
    return;
}