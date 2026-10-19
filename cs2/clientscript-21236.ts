//
function script21236(): void {
    stack(int0);
    stack(150);
    stack(-1);
    unk11539();
    var int1 = [];
    stack(int0);
    script21233();
    var int2 = [];
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    while ((int3 < int1)) {
        stack(int0);
        stack(152);
        stack(int3);
        unk11539();
        int5 = [];
        stack(int0);
        stack(int5);
        script21235();
        if (BRANCH_EQUALS(0)) {
            stack(0);
            return;
        };
        int3 = (int3 + 1);
    };
    while ((int4 < int2)) {
        stack(int0);
        stack(int4);
        script21234();
        int6 = [];
        stack(int6);
        script21236();
        if (BRANCH_EQUALS(0)) {
            stack(0);
            return;
        };
        int4 = (int4 + 1);
    };
    stack(1);
    return;
}