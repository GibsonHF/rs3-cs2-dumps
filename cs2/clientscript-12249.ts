//
function script12249(): number {
    var int0 = 0;
    var int1 = -1;
    stack(int1);
    int1 = (int1 + 1);
    while (BRANCH_LESS_THAN(20)) {
        if ((script12250(int1) != -1)) {
            int0 = (int0 + 1);
        };
    };
    return int0;
}