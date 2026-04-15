//
function script12971(long0: long): string {
    if (branch_lt_long[4](long0, 0n)) {
        return "";
    };
    if (branch_lt_long[11](long0, 100000n)) {
        return TOSTRING_LOCALISED_LONG(long0, 1);
    };
    if (branch_lt_long[20](long0, 10000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000n), 1)}K`;
    };
    if (branch_lt_long[33](long0, 10000000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000n), 1)}M`;
    };
    if (branch_lt_long[46](long0, 10000000000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000n), 1)}B`;
    };
    if (branch_lt_long[59](long0, 10000000000000000n)) {
        return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000n), 1)}T`;
    };
    return `${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000000n), 1)}Q`;
}