//
function script6472(int0: boolean): void {
    var int1 = 5960 as cs2enum;
    var int2 = (ENUM_GETOUTPUTCOUNT(int1) - 1);
    var int3 = 5961 as cs2enum;
    while ((int2 >= 0)) {
        IF_SETHIDE(int0, enum_getvalue(0, 9, int1, int2));
        IF_SETHIDE(int0, enum_getvalue(0, 9, int3, int2));
        int2 = (int2 - 1);
    };
    return;
}