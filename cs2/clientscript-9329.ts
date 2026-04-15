//
function script9329(int0: int): void {
    var int1 = 44;
    if ((script6431() == true)) {
        int1 = 52;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 8;
    var int5 = 5;
    [int2, int3] = script5787(int0);
    var int6 = int2;
    var int7 = IF_GETWIDTH(comp(517, 199));
    while ((int2 < int3)) {
        if (((CC_FIND(comp(517, 201), int2) == 1) && (CC_FIND[1](comp(517, 217), int2) == 1))) {
            CC_SETPOSITION(int4, int5, 0, 0);
            CC_SETHIDE(false);
            CC_SETPOSITION[1]((int4 - 8), int5, 0, 0);
            CC_SETHIDE[1](false);
            int4 = (int4 + int1);
            if (((int4 + 36) >= int7)) {
                int4 = 8;
                int5 = (int5 + int1);
            };
        };
        int2 = (int2 + 1);
    };
    while ((--int6 >= 0)) {
        if ((CC_FIND(comp(517, 201), int6) == 1)) {
            CC_SETHIDE(true);
        };
    };
    while ((int3 < 1820)) {
        if ((CC_FIND(comp(517, 201), int3) == 1)) {
            CC_SETHIDE(true);
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