//
function script17407(int0: number, long0: bigint): void {
    if (LONG_BRANCH_EQUALS(long0, 9223372036854775807n)) {
        IF_SETTEXT("Lots!", int0);
    } else if (LONG_BRANCH_GREATER_THAN(long0, 1n)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(long0, 1)} coins`, int0);
    } else if (LONG_BRANCH_EQUALS(long0, 1n)) {
        IF_SETTEXT("1 coin", int0);
    } else {
        IF_SETTEXT("Nothing", int0);
    };
    return;
}