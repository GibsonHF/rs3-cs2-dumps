//
function script4585(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: graphic, int7: graphic, int8: unknown_int, int9: int, int10: int): void {
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = IF_GETNEXTSUBID(int0);
    if ((CC_FIND(int0, int1) == 1)) {
        int18 = CC_GETHEIGHT();
        int17 = CC_GETWIDTH();
        int11 = CC_GETX();
        if ((MODULO(int2, 2) == 1)) {
            int13 = ((int11 + (int17 / 2)) + 1);
        } else {
            int13 = (int11 + 2);
        };
        int12 = CC_GETY();
        if (((int2 / 2) == 0)) {
            int14 = (int12 + 2);
        } else {
            int14 = ((int12 + (int18 / 2)) + 1);
        };
        int15 = ((int17 / 2) - 3);
        int16 = ((int18 / 2) - 3);
        if ((int8 == 1)) {
            CC_CREATE(int0, 5, int19);
            CC_SETPOSITION((int11 + 2), (int12 + 2), 0, 0);
            CC_SETSIZE(84, 58, 0, 0);
            CC_SETGRAPHIC(int6);
            cc_setparam(7189, int9);
            cc_setparam(7188, int10);
            cc_setparam(7190, 1);
            cc_setparam(7191, 1);
            int19 = (int19 + 1);
            int18 = ((CC_GETHEIGHT() / 4) - 1);
            CC_CREATE(int0, 4, int19);
            CC_SETSIZE(int17, int18, 0, 0);
            CC_SETPOSITION((int11 + 2), (int12 + 2), 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETCOLOUR(script10495(20));
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(inttostring(int3, 10));
            cc_setparam(7189, int9);
            return;
        };
        CC_CREATE(int0, 3, int19);
        CC_SETSIZE(int15, int16, 0, 0);
        CC_SETPOSITION(int13, int14, 0, 0);
        CC_SETFILL(1);
        CC_SETHIDE(false);
        CC_SETCOLOUR(int4);
        CC_SETTRANS(int5);
        cc_setparam(7189, int9);
        cc_setparam(7188, int10);
        cc_setparam(7190, 1);
        if ((int2 == 0)) {
            int19 = (int19 + 1);
            CC_CREATE(int0, 4, int19);
            CC_SETSIZE(int17, int18, 0, 0);
            CC_SETPOSITION((int11 + 2), (int12 + 2), 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            if (((varbitplayer_27169 == 1) || (varbitplayer_22875 == 1))) {
                CC_SETCOLOUR(16777215);
            } else {
                CC_SETCOLOUR(script10495(20));
            };
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(inttostring(int3, 10));
            cc_setparam(7189, int9);
        };
        int19 = (int19 + 1);
        CC_CREATE(int0, 5, int19);
        CC_SETSIZE(14, 14, 0, 0);
        CC_SETGRAPHIC(int6);
        CC_SETPOSITION(((int13 + (int15 / 2)) - (14 / 2)), ((int14 + (int16 / 2)) - (14 / 2)), 0, 0);
        cc_setparam(7189, int9);
        if ((int7 != -1 as graphic)) {
            int19 = (int19 + 1);
            CC_CREATE(int0, 5, int19);
            CC_SETPOSITION((((int13 + ((3 * int15) / 4)) - (14 / 2)) + 3), ((int14 + (int16 / 4)) - (14 / 2)), 0, 0);
            CC_SETSIZE(14, 14, 0, 0);
            CC_SETGRAPHIC(int7);
            cc_setparam(7189, int9);
        };
    };
    return;
}