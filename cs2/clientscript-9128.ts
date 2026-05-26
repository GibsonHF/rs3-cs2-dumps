//
function script9128(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var string0 = script9533(int2, int3, int5, int4);
    var int6 = 0;
    var int7 = 0;
    var int8 = IF_GETWIDTH(int0);
    if ((CC_FIND(int0, int1) == 1)) {
        int6 = CC_GETHEIGHT();
        int7 = script7593(string0, (int8 - (15 * 2)), 26, 14);
        if ((int7 != int6)) {
            script9058(int5);
        } else {
            CC_SETTEXT(string0);
        };
    };
    return;
}