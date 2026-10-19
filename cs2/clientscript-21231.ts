//
function script21231(): void {
    stack(int0);
    script21233();
    var int1 = [];
    if ((int1 <= 0)) {
        stack(0);
        return;
    };
    var int2 = 0;
    while ((int2 < int1)) {
        stack(int0);
        stack(int2);
        script21234();
        stack(150);
        stack(-1);
        unk11539();
        if (BRANCH_GREATER_THAN(0)) {
            stack(1);
            return;
        };
        int2 = (int2 + 1);
    };
    stack(0);
    return;
}