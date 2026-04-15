//
function script17407(int0: component, long0: long): void {
    if (branch_eq_long[4](long0, 9223372036854775807n)) {
        IF_SETTEXT("Lots!", int0);
    } else if (branch_gt_long[12](long0, 1n)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(long0, 1)} coins`, int0);
    } else if (branch_eq_long[24](long0, 1n)) {
        IF_SETTEXT("1 coin", int0);
    } else {
        IF_SETTEXT("Nothing", int0);
    };
    return;
}