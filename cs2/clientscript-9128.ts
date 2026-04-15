//
function script9128(int0: component, int1: int, int2: int, int3: int, int4: achievement, int5: unknown_int): void {
    var string0 = script9533(int2, int3, int5, int4);
    var int6 = 0;
    var int7 = 0;
    var int8 = IF_GETWIDTH(int0);
    if ((CC_FIND(int0, int1) == 1)) {
        int6 = CC_GETHEIGHT();
        int7 = script7593(string0, (int8 - (15 * 2)), 26 as fontmetrics, 14);
        if ((int7 != int6)) {
            script9058(int5);
        } else {
            CC_SETTEXT(string0);
        };
    };
    return;
}