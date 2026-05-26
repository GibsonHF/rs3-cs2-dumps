//
function script20484(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 1;
    var int5 = 1;
    if ((int1 != -1)) {
        CC_SETCOLOUR(int1);
        int4 = 0;
    };
    if (((int2 != -1) && (int3 != -1))) {
        CC_SETTEXTALIGN(int2, int3, 0);
        int5 = 0;
    };
    script10644(int0, int4, int5);
    return;
}