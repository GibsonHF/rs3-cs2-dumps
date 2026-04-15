//
function script11811(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: int): void {
    if ((STAT_BASE(3 as stat) == 1)) {
        return;
    };
    script7964(int1, int2, int3, int4, int5);
    IF_SETONTIMER(callback(), int0);
    return;
}