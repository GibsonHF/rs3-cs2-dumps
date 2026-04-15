//
function script17089(long0: long): string {
    if (branch_eq_long[4](long0, 9223372036854775807n)) {
        return "Lots!";
    };
    if (branch_lt_long[10](long0, 0n)) {
        return `<col=00ff00>${script17372(long0, 9, 0)}`;
    };
    return script17372(long0, 9, 1);
}