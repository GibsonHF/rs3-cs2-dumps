//
function script2160(int0: component, int1: int): void {
    var int2 = enum_getvalue(0, 73, 169 as cs2enum, int1);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int2, 61);
    if ((int3 == -1 as cs2enum)) {
        return;
    };
    var int4 = script12681(int0);
    var int5 = script12682(int0);
    CC_DELETEALL(int4);
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as quest;
    var int9 = -1;
    var int10 = 0;
    var int11 = 15;
    var int12 = 26 as fontmetrics;
    var int13 = 20;
    var int14 = 56 as fontmetrics;
    if ((script6431() == true)) {
        int11 = 30;
        int12 = 28 as fontmetrics;
        int13 = 20;
        int14 = 56 as fontmetrics;
    };
    varclient_693 = varbitplayer_315;
    varclient_694 = varbitplayer_317;
    varclient_1103 = varbitplayer_318;
    varclient_692 = varbitplayer_316;
    varclient_6562 = varbitplayer_43788;
    varclient_6563 = varbitplayer_43789;
    varclient_272 = ENUM_GETOUTPUTCOUNT(int3);
    var string0 = "";
    var int15 = 0;
    var int16 = (IF_GETWIDTH(int4) - 20);
    var int17 = script11432(int12);
    var int18 = script6431();
    while ((int7 < varclient_272)) {
        int8 = enum_getvalue(0, 3, int3, int6);
        CC_CREATE(int4, 4, int6);
        if ((int8 != -1 as quest)) {
            int7 = (int7 + 1);
            int10 = script2193(int8);
            string0 = script2104(int8);
            if ((int18 == true)) {
                int15 = ((int11 - int17) + (int17 * MAX(1, MIN(2, PARAHEIGHT(string0, int16, int12)))));
                CC_SETMAXLINES(2);
            } else {
                int15 = int11;
                CC_SETMAXLINES(1);
            };
            CC_SETSIZE(20, int15, 1, 0);
            CC_SETCOLOUR(2236962);
            CC_SETTEXTFONT(int12);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(string0);
            if ((((int9 == -1) && (int8 == 131 as quest)) && (int1 == 1))) {
                int9 = CC_GETID();
            };
        } else {
            CC_SETHIDE(true);
        };
        int6 = (int6 + 1);
    };
    varclient_273 = (int6 - 1);
    while ((int6 < (varclient_273 + 80))) {
        CC_CREATE(int4, 4, int6);
        CC_SETTEXTFONT(int14);
        CC_SETSIZE(0, int13, 1, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT("");
        CC_SETCOLOUR(script10495(1));
        CC_SETHIDE(true);
        CC_SETTEXTSHADOW(true);
        CC_SETMAXLINES(1);
        int6 = (int6 + 1);
    };
    script2162(int0, int1, varclient_693, varclient_694, varclient_692, varclient_1103, varclient_6563, varclient_6562);
    script31(int5, int4, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    if ((int9 != -1)) {
        script214(int4, int9);
    };
    return;
}