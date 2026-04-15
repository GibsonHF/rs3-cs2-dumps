//
function script17135(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    CC_SETHIDE(false);
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