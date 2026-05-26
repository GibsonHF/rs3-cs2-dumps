//
function script16167(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    if (((int1 == 0) || (int3 == 0))) {
        return 0;
    };
    return SCALE(SCALE(int0, int1, int4), int4, SCALE(int2, int3, int4));
}