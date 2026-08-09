//
function script17371(long0: bigint): string {
    if (LONG_BRANCH_LESS_THAN(long0, 0n)) {
        return "";
    };
    if (LONG_BRANCH_LESS_THAN(long0, 100000n)) {
        return `<col=FFFF00>${TOSTRING_LOCALISED_LONG(long0, 1)}</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000n)) {
        return `<col=FFFFFF>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000n), 1)}K</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000n)) {
        return `<col=1EFF00>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000n), 1)}M</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000n)) {
        return `<col=6698FF>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000n), 1)}B</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000000n)) {
        return `<col=A335EE>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000n), 1)}T</col>`;
    };
    return `<col=FF8000>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000000n), 1)}Q</col>`;
}