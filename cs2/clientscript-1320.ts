//
function script1320(int0: number, int1: number): void {
    var int2 = 85;
    var int3 = 3;
    var int4 = script11800(int0);
    var int5 = script11803();
    var int6 = IF_GETWIDTH(126091453);
    var int7 = 0;
    var int8 = (int2 + 10);
    var int9 = 40;
    var int10 = 100;
    if ((int6 > IF_GETWIDTH(18087936))) {
        int10 = ((IF_GETWIDTH(18087936) * 100) / int6);
        int2 = ((int2 * int10) / 100);
        int3 = ((int3 * int10) / 100);
        int8 = (int2 + 10);
        int9 = 38;
    };
    var int11 = (int6 / int5);
    var int12 = ((int11 - int2) / 2);
    var int13 = 18617;
    var int14 = 126091456;
    IF_SETSIZE(int6, IF_GETHEIGHT(126091453), 0, 0, 126091453);
    CC_DELETEALL(int14);
    while ((int7 < int5)) {
        if (((int7 + 1) == int4)) {
            int13 = 2045;
        } else {
            int13 = 2044;
        };
        script7772(int14, (int7 * 2), int2, int2, 0, 0, int12, 0, 0, 1, int13, 0, 0, 0, 0);
        CC_SETOP(1, `Select ${script16004((int7 + 1))}`);
        CC_SETONOP(callback(script1321, (int7 + 1)));
        CC_CREATE(int14, 4, ((int7 * 2) + 1));
        CC_SETSIZE(int2, int2, 0, 0);
        CC_SETPOSITION((int12 + 2), 0, 0, 1);
        CC_SETTEXT(inttostring((int7 + 1), 10));
        CC_SETTEXTFONT(int9);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTSHADOW(1);
        script6888(2);
        int7 = (int7 + 1);
        int12 = ((int11 * int7) + ((int11 - int2) / 2));
    };
    if ((IF_FIND(int14) == 1)) {
        cc_setparam(7486, int0);
    };
    return;
}