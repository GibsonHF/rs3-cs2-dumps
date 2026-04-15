//
function script17371(long0: long): string {
    if (branch_lt_long[4](long0, 0n)) {
        return "";
    };
    if (branch_lt_long[11](long0, 100000n)) {
        return `<col=FFFF00>${TOSTRING_LOCALISED_LONG(long0, 1)}</col>`;
    };
    if (branch_lt_long[23](long0, 10000000n)) {
        return `<col=FFFFFF>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000n), 1)}K</col>`;
    };
    if (branch_lt_long[37](long0, 10000000000n)) {
        return `<col=1EFF00>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000n), 1)}M</col>`;
    };
    if (branch_lt_long[51](long0, 10000000000000n)) {
        return `<col=6698FF>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000n), 1)}B</col>`;
    };
    if (branch_lt_long[65](long0, 10000000000000000n)) {
        return `<col=A335EE>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000n), 1)}T</col>`;
    };
    return `<col=FF8000>${TOSTRING_LOCALISED_LONG(DIVIDE_LONG(long0, 1000000000000000n), 1)}Q</col>`;
}