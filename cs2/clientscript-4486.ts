//
function script4486(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: unknown_int): void {
    CC_DELETEALL(comp(740, 1));
    var int7 = IF_GETNEXTSUBID(comp(740, 1));
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = int2;
    if ((int1 == 0)) {
        int16 = 11;
        int17 = (int17 - 1);
    } else {
        int16 = (int1 - 1);
    };
    var int18 = enum_getvalue(0, 0, 13930 as cs2enum, int16);
    if (((int16 == 1) && (DATE_ISLEAPYEAR(int2) == 1))) {
        int18 = 29;
    };
    while ((++int9 < 6)) {
        while ((++int8 < 7)) {
            int12 = (int12 + 1);
            if (((int9 == 0) && (int8 < int0))) {
                int10 = (((int18 - int0) + int8) + 1);
                if (((varbitplayer_27169 == 1) || (varbitplayer_22875 == 1))) {
                    int11 = 5323566;
                } else {
                    int11 = 2632751;
                };
                int15 = 1;
            } else if ((int12 > (int0 + int3))) {
                int10 = ((int12 - int0) - int3);
                if (((varbitplayer_27169 == 1) || (varbitplayer_22875 == 1))) {
                    int11 = 5323566;
                } else {
                    int11 = 2632751;
                };
                int15 = 3;
            } else {
                int10 = (int12 - int0);
                if (((varbitplayer_27169 == 1) || (varbitplayer_22875 == 1))) {
                    int11 = 3351837;
                } else {
                    int11 = 1846324;
                };
                int15 = 2;
            };
            int13 = ((int8 * 84) + (int8 * 4));
            int14 = ((int9 * 58) + (int9 * 4));
            CC_CREATE(comp(740, 1), 3, int7);
            CC_SETSIZE(84, 58, 0, 0);
            CC_SETPOSITION(int13, int14, 0, 0);
            CC_SETFILL(1);
            CC_SETCOLOUR(int11);
            CC_SETOP(1, "Select");
            cc_setparam(7187, int15);
            cc_setparam(7188, int5);
            cc_setparam(7192, 1);
            int7 = (int7 + 1);
            CC_CREATE(comp(740, 1), 4, int7);
            CC_SETSIZE(84, 58, 0, 0);
            CC_SETPOSITION((int13 + 2), (int14 + 2), 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            if (((varbitplayer_27169 == 1) || (varbitplayer_22875 == 1))) {
                CC_SETCOLOUR(16777215);
            } else {
                CC_SETCOLOUR(14931919);
            };
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(inttostring(int10, 10));
            int7 = (int7 + 1);
            CC_CREATE(comp(740, 1), 5, int7);
            CC_SETSIZE(84, 58, 0, 0);
            CC_SETPOSITION(int13, int14, 0, 0);
            CC_SETGRAPHIC(33779 as graphic);
            if ((int4 == (int12 - 1))) {
                CC_SETHIDE(false);
            } else {
                CC_SETHIDE(true);
            };
            cc_setparam(7186, 1);
            int7 = (int7 + 1);
            var int5 = (int5 + 1);
        };
        int8 = -1;
    };
    script4584(comp(740, 7), int1, int2);
    script4487(int1, int2, int6);
    return;
}