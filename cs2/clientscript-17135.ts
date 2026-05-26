//
function script17135(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    CC_SETHIDE(0);
    CC_SETSIZE(SCALE(3, 4, int6), SCALE(3, 4, int7), 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(16777215);
    var int8 = 8;
    var int9 = 8;
    if ((int6 < 35)) {
        int8 = 6;
        if ((int6 < 20)) {
            int9 = 5;
        } else {
            int9 = 6;
        };
    } else if ((int6 == 35)) {
        int9 = 6;
    };
    CC_SETPOSITION((int4 + SCALE(1, int8, int6)), (int5 + SCALE(1, int9, int6)), 0, 0);
    script17042(int3, int0, int1, int2, int6);
    return;
}