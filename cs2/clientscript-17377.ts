//
function script17377(long0: bigint, long1: bigint): bigint {
    if (LONG_BRANCH_EQUALS(long0, 0n)) {
        return 0n;
    };
    var long2 = DIVIDE_LONG(9223372036854775807n, long0);
    if (LONG_BRANCH_LESS_THAN(long2, long1)) {
        return 9223372036854775807n;
    };
    return MULTIPLY_LONG(long0, long1);
}