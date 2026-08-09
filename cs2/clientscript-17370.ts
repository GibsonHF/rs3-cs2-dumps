//
function script17370(long0: bigint): string {
    if (LONG_BRANCH_LESS_THAN(long0, 0n)) {
        return "";
    };
    if (LONG_BRANCH_LESS_THAN(long0, 100000n)) {
        return `<col=FFFF00>${unk11054(long0, 10)}</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000n)) {
        return `<col=FFFFFF>${unk11054(DIVIDE_LONG(long0, 1000n), 10)}K</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000n)) {
        return `<col=1EFF00>${unk11054(DIVIDE_LONG(long0, 1000000n), 10)}M</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000n)) {
        return `<col=6698FF>${unk11054(DIVIDE_LONG(long0, 1000000000n), 10)}B</col>`;
    };
    if (LONG_BRANCH_LESS_THAN(long0, 10000000000000000n)) {
        return `<col=A335EE>${unk11054(DIVIDE_LONG(long0, 1000000000000n), 10)}T</col>`;
    };
    return `<col=FF8000>${unk11054(DIVIDE_LONG(long0, 1000000000000000n), 10)}Q</col>`;
}