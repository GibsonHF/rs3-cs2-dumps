//
function script11701(int0: obj, int1: component, int2: component, int3: unknown_int, int4: int, string0: string): void {
    var int5 = comp(-1, 65535);
    switch (varbitplayer_19000) {
        case 1: {
            int5 = comp(105, 340);
            break;
        }
        case 4: {
            int5 = comp(707, 20);
            break;
        }
    };
    var int6 = OC_FIND(string0, true);
    var int7 = IF_GETWIDTH(int5);
    IF_SETSCROLLPOS(0, 0, int5);
    if ((int6 < 1)) {
        CC_CREATE(int1, 4, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(int7, IF_GETHEIGHT(int5), 0, 0);
        CC_SETTEXTFONT(28 as fontmetrics);
        if ((int6 == -1)) {
            CC_SETTEXT("Too many results. Please refine your search.");
        } else {
            CC_SETTEXT("No matching items found.");
        };
        CC_SETTEXTALIGN(1, 1, 0);
        script11024(3);
        CC_SETTEXTSHADOW(false);
        IF_SETSCROLLSIZE(0, 0, int5);
        script11702(0, 0);
        varclient_6789 = 0;
        varclient_6790 = 0;
        return;
    };
    var int8 = 0;
    var int9 = OC_FINDNEXT();
    var int10 = 5;
    var int11 = ((int7 - (4 * int10)) / 3);
    var int12 = 50;
    var int13 = 36;
    var int14 = 32;
    var int15 = ((int12 / 2) - (int14 / 2));
    var int16 = ((int11 - int13) - (int10 * 2));
    var int17 = 28;
    var int18 = 8;
    var int19 = int10;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 14;
    var int24 = 14;
    while ((int9 != -1 as obj)) {
        int21 = 0;
        int8 = 0;
        if ((item_getparam(int9, 6628) != 0)) {
            int21 = item_getparam(int9, 6628);
        } else if ((item_getparam(int9, 4749) != -1 as struct)) {
            int21 = script766(item_getparam(int9, 4749));
        } else {
            int21 = item_getparam(int9, 4742);
        };
        if ((varplayer_3079 < int21)) {
            int9 = OC_FINDNEXT();
            int8 = 1;
        };
        if ((int8 == 0)) {
            if (((int19 + int10) >= int7)) {
                int19 = int10;
                int20 = ((int20 + int12) + int10);
            };
            script10410(int1, comp(-1, 65535), 21361 as struct, int19, int20, int11, int12, IF_GETNEXTSUBID(int1), false, "");
            CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
            CC_SETSIZE(int11, int12, 0, 0);
            CC_SETPOSITION(int19, int20, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script11703, int9));
            CC_SETONMOUSEREPEAT(callback(script9564, int9, -2147483645, -2147483643));
            if ((int0 == int9)) {
                CC_SETCOLOUR(15777401);
                varclient_6790 = int20;
            } else {
                CC_SETTRANS(255);
            };
            CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(int13, int14, 0, 0);
            CC_SETPOSITION((int19 + int10), (int20 + int15), 0, 0);
            cc_setparam(4677, int9);
            CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETSIZE(int16, int17, 0, 0);
            CC_SETPOSITION(((int19 + int10) + int13), (int20 + int15), 0, 0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXT(script18300(int9));
            CC_SETTEXTFONT(206 as fontmetrics);
            script11024(3);
            CC_SETONMOUSEOVER(callback(script10496, -2147483645, -2147483643, 4));
            CC_SETONMOUSELEAVE(callback(script10496, -2147483645, -2147483643, 3));
            CC_SETMAXLINES(3);
            if ((INV_TOTAL(890, int9) > 0)) {
                script7924(int1, IF_GETNEXTSUBID(int1), int23, int24, (int19 + (int10 / 2)), (int20 + (int10 / 2)), 23794 as graphic, false, false, false, 0);
            };
            int9 = OC_FINDNEXT();
            int19 = ((int19 + int11) + int10);
            int22 = (int22 + 1);
        };
    };
    while ((--int22 >= 0)) {
        if ((CC_FIND(int2, int22) == 1)) {
            CC_SETOBJECT_NONUM(cc_getparam(4677), 1);
        };
    };
    int20 = (int20 + int12);
    varclient_6789 = int20;
    if ((int3 == 1)) {
        script11702(int20, varclient_6790);
    } else {
        script11702(int20, int4);
    };
    return;
}