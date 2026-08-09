//
function script17138(long0: bigint): number {
    if (LONG_BRANCH_GREATER_THAN(long0, 2147483647n)) {
        return 2147483647;
    };
    if (LONG_BRANCH_LESS_THAN(long0, -2147483648n)) {
        return -2147483648;
    };
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = UNPACK_LONG(long0);
    return int1;
}