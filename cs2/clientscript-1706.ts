//
function script1706(int0: component, int1: component, int2: int): void {
    var int3 = IF_GETSCROLLWIDTH(int1);
    var int4 = IF_GETWIDTH(int0);
    var int5 = int4;
    var int6 = 0;
    if ((((CC_FIND(int0, 1) == 1) && (varbitplayer_22875 != 2)) && (cc_getparam(7986) != 2))) {
        int4 = (int4 - 32);
    };
    if ((int3 > 0)) {
        int6 = ((int5 * int4) / int3);
    } else {
        int6 = int5;
    };
    if ((int6 < 10)) {
        int6 = 10;
    };
    if ((CC_FIND(int0, 1) == 1)) {
        if (((varbitplayer_22875 == 2) || (cc_getparam(7986) == 2))) {
            CC_SETSIZE(int6, 8, 0, 0);
        } else {
            CC_SETSIZE((int6 - 10), 16, 0, 0);
        };
        script1702(int0, int1, int2, 1);
    };
    return;
}