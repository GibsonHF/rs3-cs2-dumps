//
function script16167(int0: int, int1: int, int2: int, int3: int, int4: int): int {
    if (((int1 == 0) || (int3 == 0))) {
        return 0;
    };
    return SCALE(SCALE(int0, int1, int4), int4, SCALE(int2, int3, int4));
}