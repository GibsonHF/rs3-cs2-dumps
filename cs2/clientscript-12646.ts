//
function script12646(int0: component, int1: unknown_int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 1;
    var int7 = -1 as struct;
    if (((varbitclient_2053 == 1) && (script8314(28) == 28))) {
        int7 = script10405(28);
        if ((script12616(int7) == 1)) {
            [int3, int5, int4, int5] = script12613(struct_getparam(int7, 3505), -1);
        } else {
            [int3, int5, int4, int5] = script12613(struct_getparam(int7, 3503), -1);
        };
        if ((varbitplayer_28120 == 1)) {
            int5 = PARAWIDTH("+208,888,888", 1000, 26 as fontmetrics);
        } else {
            int5 = PARAWIDTH("+888W", 1000, 26 as fontmetrics);
        };
    } else {
        int6 = 0;
    };
    while (((++int2 <= 32) && (CC_FIND[1](int0, int2) == 1))) {
        script12647(int6, int1, int3, int4, int5);
    };
    return;
}