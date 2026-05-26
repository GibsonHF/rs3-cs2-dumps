//
function script13847(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int2);
    var int5 = 0;
    var int6 = 0;
    var int7 = IF_GETWIDTH(int0);
    var int8 = 0;
    var int9 = 0;
    var int10 = 4;
    var int11 = 4;
    var int12 = -1;
    if ((varbitplayer_22875 == 1)) {
        int10 = 4;
        int11 = 7;
    } else if ((int0 == 37158940)) {
        int10 = 4;
        int11 = 4;
    };
    while ((int3 < int4)) {
        if (((CC_FIND(int0, int3) == 1) && (CC_FIND[1](int1, int3) == 1))) {
            int12 = enum_getvalue(0, 0, int2, int3);
            int8 = script2385(int12, 1);
            if (((int8 == -1) && (script19633(int12) == 1))) {
                CC_SETHIDE(0);
                CC_SETPOSITION(int5, int6, 0, 0);
                CC_SETHIDE[1](0);
                CC_SETPOSITION[1]((int5 + int10), (int6 + int11), 0, 0);
                if (((++int5 + 35) >= int7)) {
                    int5 = 0;
                    int6 = (int6 + 44);
                };
            } else {
                CC_SETHIDE(1);
                CC_SETHIDE[1](1);
            };
        };
        int3 = (int3 + 1);
    };
    return;
}