//
function script9329(int0: number): void {
    var int1 = 44;
    if ((script6431() == 1)) {
        int1 = 52;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 8;
    var int5 = 5;
    [int2, int3] = script5787(int0);
    var int6 = int2;
    var int7 = IF_GETWIDTH(33882311);
    while ((int2 < int3)) {
        if (((CC_FIND(33882313, int2) == 1) && (CC_FIND[1](33882329, int2) == 1))) {
            CC_SETPOSITION(int4, int5, 0, 0);
            CC_SETHIDE(0);
            CC_SETPOSITION[1]((int4 - 8), int5, 0, 0);
            CC_SETHIDE[1](0);
            int4 = (int4 + int1);
            if (((int4 + 36) >= int7)) {
                int4 = 8;
                int5 = (int5 + int1);
            };
        };
        int2 = (int2 + 1);
    };
    while ((--int6 >= 0)) {
        if ((CC_FIND(33882313, int6) == 1)) {
            CC_SETHIDE(1);
        };
    };
    while ((int3 < 1820)) {
        if ((CC_FIND(33882313, int3) == 1)) {
            CC_SETHIDE(1);
        };
        int3 = (int3 + 1);
    };
    script9338(int4, int5, int0, 1, 1);
    script9340(int0, 8, 5);
    if ((int4 > 8)) {
        int5 = (int5 + int1);
    };
    script13828(int5);
    return;
}