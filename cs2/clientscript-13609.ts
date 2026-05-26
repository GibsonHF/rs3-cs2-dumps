//
function script13609(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string, string1: string): void {
    var int5 = (int3 * (60 + 2));
    var int6 = script10495(5);
    var int7 = script10495(5);
    switch (int2) {
        case -2: {
            int7 = 16777215;
            int6 = script10495(0);
            varclient_6271 = (varclient_6271 + 1);
            break;
        }
        case -1: {
            int7 = script10495(6);
            int6 = script10495(6);
            break;
        }
    };
    varclient_6272 = (varclient_6272 + 1);
    IF_SETTEXT(`${TOSTRING_LOCALISED(varclient_6271, 1)}/${TOSTRING_LOCALISED(varclient_6272, 1)}`, 124256269);
    var int8 = 60;
    var int9 = 28;
    var int10 = 2;
    var int11 = 124256271;
    CC_CREATE(int11, 3, IF_GETNEXTSUBID(int11));
    CC_SETSIZE(0, int8, 1, 0);
    CC_SETPOSITION(0, int5, 0, 0);
    CC_SETFILL(1);
    CC_SETFILL(1);
    CC_SETCOLOUR(script10495(12));
    CC_CREATE(int11, 4, IF_GETNEXTSUBID(int11));
    CC_SETPOSITION((int9 + 5), int5, 0, 0);
    CC_SETSIZE((int9 + 30), 15, 1, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(1);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(55);
    CC_SETCOLOUR(int6);
    CC_CREATE(int11, 4, IF_GETNEXTSUBID(int11));
    CC_SETPOSITION((int9 + 5), (int5 + 15), 0, 0);
    CC_SETSIZE((int9 + 34), (int8 - 15), 1, 0);
    CC_SETCOLOUR(int7);
    CC_SETTEXT(string1);
    CC_SETTEXTSHADOW(1);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXTFONT(26);
    script13610(int11, int5, int1, int2);
    var int12 = 15;
    var int13 = (int10 + (int9 - int12));
    if ((int4 != 0)) {
        CC_CREATE(int11, 3, IF_GETNEXTSUBID(int11));
        CC_SETPOSITION(int13, (int5 + int13), 0, 0);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETCOLOUR(0);
        CC_SETTRANS(196);
        CC_SETFILL(1);
        CC_CREATE(int11, 4, IF_GETNEXTSUBID(int11));
        CC_SETPOSITION(int13, (int5 + int13), 0, 0);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXT(TOSTRING_LOCALISED(int4, 1));
        CC_SETTEXTSHADOW(1);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(26);
    };
    var int2 = script13280(enum_getvalue(0, 73, 12251 as cs2enum, int0));
    varclient_6274 = (varclient_6274 + 1);
    switch (int2) {
        case -2: {
            int7 = script10495(5);
            int6 = script10495(5);
            varclient_6273 = (varclient_6273 + 1);
            break;
        }
        case -1: {
            int7 = script10495(6);
            int6 = script10495(6);
            break;
        }
        default: {
            int6 = script10495(0);
            int7 = 16777215;
            break;
        }
    };
    int11 = 124256272;
    script13610(int11, int5, int1, int2);
    IF_SETTEXT(`${TOSTRING_LOCALISED(varclient_6273, 1)}/${TOSTRING_LOCALISED(varclient_6274, 1)}`, 124256268);
    script13611();
    return;
}