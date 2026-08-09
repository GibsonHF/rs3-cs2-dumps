//
function script17373(long0: bigint): number {
    if (LONG_BRANCH_LESS_THAN(long0, 100000n)) {
        return 16776960;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000n)) {
        return 16777215;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000n)) {
        return 2031360;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000n)) {
        return 6723839;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000000n)) {
        return 10696174;
    };
    return 16744448;
}