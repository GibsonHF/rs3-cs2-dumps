//
function script15835(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var string0 = "";
    var int14 = 0;
    var int15 = 0;
    if ((int3 == -1)) {
        var int3 = IF_GETWIDTH(int0);
    };
    if ((int4 == -1)) {
        var int4 = IF_GETHEIGHT(int0);
    };
    if ((int6 == 1)) {
        int11 = 49152;
        int15 = 4;
    };
    var int16 = -1;
    switch (int5) {
        case 16711680: {
            int16 = 18375;
            string0 = "Life Points";
            break;
        }
        case 16776960: {
            int16 = 18374;
            if ((varbitplayer_27168 == 1)) {
                string0 = "Special Attack";
            } else {
                string0 = "Adrenaline";
            };
            break;
        }
        case 65535: {
            int16 = 18376;
            string0 = "Summoning Points";
            break;
        }
        case 65280: {
            int16 = 14678;
            string0 = "Familiar spell points";
            break;
        }
        case 255: {
            int16 = 18377;
            string0 = "Prayer Points";
            break;
        }
        default: {
            return;
        }
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, int12);
    CC_SETGRAPHIC(18368);
    int13 = 16;
    if ((int6 == 0)) {
        CC_SETPOSITION(int15, int14, 0, 2);
    } else {
        CC_SETPOSITION(int15, (((0 - IF_GETHEIGHT(int0)) / 2) + (int13 / 2)), 1, 1);
    };
    CC_SETSIZE(int13, 8, 0, 0);
    CC_SET2DANGLE(int11);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETGRAPHIC(18369);
    if ((int6 == 0)) {
        int13 = (IF_GETWIDTH(int0) - (2 * 16));
        CC_SETPOSITION(int15, int14, 1, 2);
    } else {
        int13 = (IF_GETHEIGHT(int0) - (2 * 16));
        if ((MODULO(int13, 2) != 0)) {
            int13 = (int13 + 1);
        };
        CC_SETPOSITION(int15, 0, 1, 1);
    };
    CC_SETSIZE(int13, 8, 0, 0);
    CC_SET2DANGLE(int11);
    if ((int9 == 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8805));
    };
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETGRAPHIC(18370);
    int13 = 16;
    if ((int6 == 0)) {
        CC_SETPOSITION(int15, int14, 2, 2);
    } else {
        CC_SETPOSITION(int15, ((IF_GETHEIGHT(int0) / 2) - (int13 / 2)), 1, 1);
    };
    CC_SETSIZE(int13, 8, 0, 0);
    CC_SET2DANGLE(int11);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETGRAPHIC(int16);
    if ((int6 == 0)) {
        int13 = (IF_GETWIDTH(int0) - 4);
        CC_SETPOSITION((int15 + 2), (((8 - 4) / 2) + int14), 0, 2);
    } else {
        int13 = (IF_GETHEIGHT(int0) - 4);
        if ((MODULO(int13, 2) != 0)) {
            int13 = (int13 + 1);
        };
        CC_SETPOSITION(int15, 2, 1, 1);
    };
    CC_SETSIZE(int13, 4, 0, 0);
    CC_SET2DANGLE(int11);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETGRAPHIC(18371);
    int13 = 16;
    if ((int6 == 0)) {
        CC_SETPOSITION(int15, int14, 0, 2);
    } else {
        CC_SETPOSITION(int15, (((0 - IF_GETHEIGHT(int0)) / 2) + (int13 / 2)), 1, 1);
    };
    CC_SETSIZE(int13, 8, 0, 0);
    CC_SET2DANGLE(int11);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETGRAPHIC(18372);
    if ((int6 == 0)) {
        int13 = (IF_GETWIDTH(int0) - (2 * 16));
        CC_SETPOSITION(int15, int14, 1, 2);
    } else {
        int13 = (IF_GETHEIGHT(int0) - (2 * 16));
        if ((MODULO(int13, 2) != 0)) {
            int13 = (int13 + 1);
        };
        CC_SETPOSITION(int15, 0, 1, 1);
    };
    CC_SETSIZE(int13, 8, 0, 0);
    CC_SET2DANGLE(int11);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    CC_SETGRAPHIC(18373);
    int13 = 16;
    if ((int6 == 0)) {
        CC_SETPOSITION(int15, int14, 2, 2);
    } else {
        CC_SETPOSITION(int15, ((IF_GETHEIGHT(int0) / 2) - (int13 / 2)), 1, 1);
    };
    CC_SETSIZE(int13, 8, 0, 0);
    CC_SET2DANGLE(int11);
    int12 = (int12 + 1);
    CC_CREATE(int0, 5, int12);
    if (((int7 != -1) && (int10 == 0))) {
        CC_SETPOSITION(int15, 0, 0, 1);
        CC_SETSIZE(18, 18, 0, 0);
        CC_SETGRAPHIC(int7);
    };
    int12 = (int12 + 1);
    if ((int10 == 0)) {
        CC_CREATE(int0, 4, int12);
        if ((int7 != -1)) {
            CC_SETPOSITION(((int15 + 18) + 2), 0, 0, 0);
            CC_SETSIZE(((int15 + 18) + 2), 18, 1, 0);
        } else {
            CC_SETPOSITION(int15, 0, 0, 0);
            CC_SETSIZE(int15, 16, 1, 0);
        };
        CC_SETTEXTFONT(int8);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTSHADOW(1);
        CC_SETCOLOUR(16777215);
        CC_SETTEXT("");
    };
    int12 = (int12 + 1);
    return;
}