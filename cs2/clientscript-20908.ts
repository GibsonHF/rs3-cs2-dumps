//
function script20908(int0: number, long0: BigInt): void {
    if (branch_lt_long[4](long0, 0n)) {
        if (branch_eq_long[8](long0, -9223372036854775808n)) {
            script20910(2, int0);
        } else {
            script3878(SUB_LONG(0n, long0), 0, int0);
        };
    } else if (branch_gt_long[23](long0, 0n)) {
        script3878(long0, 1, int0);
    } else {
        script20912(int0);
    };
    return;
}