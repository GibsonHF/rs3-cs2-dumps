//
function script21221(): void {
    stack(int0);
    stack(150);
    stack(-1);
    unk11539();
    if (BRANCH_GREATER_THAN(0)) {
        stack(1);
        return;
    } else {
        stack(int0);
        stack(151);
        stack(-1);
        unk11539();
        if (BRANCH_GREATER_THAN(0)) {
            stack(1);
            return;
        } else {
            stack(int0);
            script21231();
            if (BRANCH_EQUALS(1)) {
                stack(1);
                return;
            };
        };
    };
    stack(0);
    return;
}