//
function script11818(int0: number, int1: number): void {
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = 1;
    while ((int2 <= 14)) {
        int5 = script7974(int0, int2);
        int6 = script7979(int0, int2);
        if (((((int6 != -1) && (int5 != -1)) && (IF_FIND(int5) == 1)) && (cc_getparam(3438) == int1))) {
            if (((cc_getparam(5313) == true) || (cc_getparam(5314) == true))) {
                int7 = 0;
            };
            cc_setparam(5313, 1);
            cc_setparam(5314, 1);
            if ((IF_FIND(int6) == 1)) {
                CC_SETHIDE(0);
                CC_SETONTIMER(callback(script6302, int0, int1, -2147483645, -2147483643, int7));
            };
        };
        int2 = (int2 + 1);
    };
    return;
}