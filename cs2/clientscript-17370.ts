//
function script17370(long0: long): string {
    if (branch_lt_long[4](long0, 0n)) {
        return "";
    };
    if (branch_lt_long[11](long0, 100000n)) {
        return `<col=FFFF00>${unk11054(long0, 10)}</col>`;
    };
    if (branch_lt_long[23](long0, 10000000n)) {
        return `<col=FFFFFF>${unk11054(DIVIDE_LONG(long0, 1000n), 10)}K</col>`;
    };
    if (branch_lt_long[37](long0, 10000000000n)) {
        return `<col=1EFF00>${unk11054(DIVIDE_LONG(long0, 1000000n), 10)}M</col>`;
    };
    if (branch_lt_long[51](long0, 10000000000000n)) {
        return `<col=6698FF>${unk11054(DIVIDE_LONG(long0, 1000000000n), 10)}B</col>`;
    };
    if (branch_lt_long[65](long0, 10000000000000000n)) {
        return `<col=A335EE>${unk11054(DIVIDE_LONG(long0, 1000000000000n), 10)}T</col>`;
    };
    return `<col=FF8000>${unk11054(DIVIDE_LONG(long0, 1000000000000000n), 10)}Q</col>`;
}