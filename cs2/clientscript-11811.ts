//
function script11811(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((STAT_BASE(3) == 1)) {
        return;
    };
    script7964(int1, int2, int3, int4, int5);
    IF_SETONTIMER(callback(), int0);
    return;
}