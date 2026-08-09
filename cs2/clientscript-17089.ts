//
function script17089(long0: bigint): string {
    if (LONG_BRANCH_EQUALS(long0, 9223372036854775807n)) {
        return "Lots!";
    };
    if (LONG_BRANCH_LESS_THAN(long0, 0n)) {
        return `<col=00ff00>${script17372(long0, 9, 0)}`;
    };
    return script17372(long0, 9, 1);
}