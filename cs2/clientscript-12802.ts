//
function script12802(int0: int, int1: obj, int2: int, int3: int, long0: long): long {
    if (((branch_lteq_long[10](long0, 0n) || (int2 <= 0)) || (int3 == 0))) {
        return 0n;
    };
    if ((item_getparam(int1, 8740) == 1)) {
        return 0n;
    };
    if ((script17081(int0) < 1)) {
        return 0n;
    };
    var long1 = DIVIDE_LONG(long0, INT_TO_LONG(int2));
    if (branch_lt_long[36](long1, 50n)) {
        return 0n;
    };
    return SCALE_LONG(long0, 100n, 2n);
}