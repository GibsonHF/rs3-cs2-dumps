//
function script20908(int0: number, long0: bigint): void {
    if (LONG_BRANCH_LESS_THAN(long0, 0n)) {
        if (LONG_BRANCH_EQUALS(long0, -9223372036854775808n)) {
            script20910(2, int0);
        } else {
            script3878(SUB_LONG(0n, long0), 0, int0);
        };
    } else if (LONG_BRANCH_GREATER_THAN(long0, 0n)) {
        script3878(long0, 1, int0);
    } else {
        script20912(int0);
    };
    return;
}