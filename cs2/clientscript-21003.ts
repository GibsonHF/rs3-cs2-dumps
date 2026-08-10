//
function script21003(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(13250 as cs2enum);
    var int2 = -1;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 33, 13250 as cs2enum, int0);
        stack(int2);
        script21002();
        if (BRANCH_GREATER_THAN(0)) {
            stack(1);
            return;
        };
        int0 = (int0 + 1);
    };
    stack(0);
    return;
}