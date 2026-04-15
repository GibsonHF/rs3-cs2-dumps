//
function script6473(): void {
    var int0 = (ENUM_GETOUTPUTCOUNT(5960 as cs2enum) - 1);
    var int1 = -1;
    while ((int0 >= 0)) {
        CC_DELETEALL(enum_getvalue(0, 9, 5960 as cs2enum, int0));
        CC_DELETEALL(enum_getvalue(0, 9, 5961 as cs2enum, int0));
        int0 = (int0 - 1);
    };
    return;
}