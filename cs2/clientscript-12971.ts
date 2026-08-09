//
function script12971(long0: bigint): string {
    if (LONG_BRANCH_LESS_THAN(long0, 0n)) {
        return "";
    };
    if (LONG_BRANCH_LESS_THAN(long0, 100000n)) {
        return TOSTRING_LOCALISED_LONG(long0, 1);
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000n), 1)}K`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000n), 1)}M`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000n), 1)}B`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000n), 1)}T`;
    };
    return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000000n), 1)}Q`;
}