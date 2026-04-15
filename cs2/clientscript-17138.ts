//
function script17138(long0: long): int {
    if (branch_gt_long[4](long0, 2147483647n)) {
        return 2147483647;
    };
    if (branch_lt_long[10](long0, -2147483648n)) {
        return -2147483648;
    };
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = UNPACK_LONG(long0);
    return int1;
}