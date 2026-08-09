//
function script12802(int0: number, int1: number, int2: number, int3: number, long0: bigint): bigint {
    if (((LONG_BRANCH_LESS_THAN_OR_EQUALS(long0, 0n) || (int2 <= 0)) || (int3 == 0))) {
        return 0n;
    };
    if ((item_getparam(int1, 8740) == 1)) {
        return 0n;
    };
    if ((script17081(int0) < 1)) {
        return 0n;
    };
    var long1 = DIVIDE_LONG(long0, INT_TO_LONG(int2));
    if (LONG_BRANCH_LESS_THAN(long1, 50n)) {
        return 0n;
    };
    return SCALE_LONG(long0, 100n, 2n);
}