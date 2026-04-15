//
function script9886(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    [int1, int2, int3, int4] = script12594(int0);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    [int5, int6, int7] = script16548(int0);
    var int8 = 33;
    var int9 = 4;
    var int10 = 4;
    var int11 = 24;
    var int12 = 18;
    var int13 = 207 as fontmetrics;
    if ((script6431() == true)) {
        int9 = 8;
        int8 = 42;
        int11 = 32;
        int12 = 22;
        int13 = 209 as fontmetrics;
    };
    IF_SETSIZE(0, int8, 1, 0, int3);
    int10 = script16549(int5, int11, int9, int10, 0);
    int10 = script16549(int6, int11, int9, int10, 0);
    int10 = script16549(int7, int11, int9, 4, 2);
    var int14 = (IF_GETHEIGHT(int1) - IF_GETHEIGHT(int3));
    CC_DELETEALL(int2);
    var int15 = (18 + 5);
    var int16 = -1 as obj;
    var int17 = (100 - INV_FREESPACE(787 as inv));
    IF_SETHIDE(true, int4);
    IF_SETSCROLLSIZE(0, 0, int2);
    IF_SETSCROLLPOS(0, 0, int2);
    var int18 = ((int17 * (int12 + 0)) + 25);
    if ((int18 > IF_GETHEIGHT(int2))) {
        IF_SETSCROLLSIZE(0, int18, int2);
        IF_SETSIZE(IF_GETWIDTH(int4), int14, 0, 0, int4);
        script7791(int4, int2);
        IF_SETHIDE(false, int4);
        IF_SETSIZE(IF_GETWIDTH(int4), int14, 1, 0, int2);
    } else {
        IF_SETSIZE(0, int14, 1, 0, int2);
    };
    CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETFILL(1);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, 18, 1, 0);
    script10010(28680 as struct);
    if ((int0 == 0)) {
        script12591(6, 32401 as struct);
    };
    var int19 = PARAWIDTH("888W", 1000, int13);
    var int20 = 0;
    var int21 = varbitplayer_28120;
    if ((int21 == 1)) {
        int20 = PARAWIDTH("2,088,888,888", 1000, int13);
        if ((IF_GETWIDTH(int2) < ((((int20 + 5) + 5) + 5) + PARAWIDTH("...", 1000, int13)))) {
            int21 = 0;
        } else {
            int19 = int20;
        };
    };
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT(int13);
    CC_SETSIZE((15 + int19), 18, 1, 0);
    CC_SETPOSITION(5, 0, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    CC_SETONVARTRANSMIT(callback(script8429, -2147483645, -2147483643, 5091, 1));
    script11909(int2, CC_GETID());
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(int19, 18, 0, 0);
    CC_SETTEXTFONT(int13);
    if ((int21 == 1)) {
        CC_SETTEXT("Quantity");
    } else {
        CC_SETTEXT("Qty");
    };
    if ((CC_GETWIDTH() < PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS()))) {
        CC_SETONMOUSEREPEAT(callback(script3876, CC_GETTEXT(), -2147483645, -2147483643));
        CC_SETTEXT(script3930(CC_GETTEXT(), CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
    };
    CC_SETPOSITION(5, 0, 2, 0);
    var int22 = CC_GETX();
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    var int23 = 0;
    var string0 = "";
    while ((int17 >= 0)) {
        int16 = INV_GETOBJ(787 as inv, int17);
        if ((int16 != -1 as obj)) {
            script14400(int2, 0, int12, 0, int15, 1, int17);
            CC_SETTRANS(128);
            script9885(int2, script3930(`${script500(script3709(int17))}${OC_NAME(int16)}`, MAX(0, (int22 - 10)), 1, int13), 5, int15, MAX(0, (int22 - 10)), int12);
            if ((strcmp(OC_NAME(int16), CC_GETTEXT()) != 0)) {
                CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(int16), -2147483645, -2147483643));
            };
            int23 = INV_GETNUM(787 as inv, int17);
            if ((int21 == 1)) {
                string0 = `${script500(script3709(int17))}${TOSTRING_LOCALISED(int23, 1)}`;
            } else {
                string0 = `${script500(script3709(int17))}${script11478(int23)}`;
            };
            script9885(int2, string0, int22, int15, int19, int12);
            int15 = ((int15 + int12) + 0);
        };
        int17 = (int17 - 1);
    };
    return;
}