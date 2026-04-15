//
function script13075(int0: boolean): void {
    var int1 = 12145 as cs2enum;
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    var int3 = 0;
    while ((int3 < int2)) {
        IF_SETHIDE(int0, enum_getvalue(0, 9, int1, int3));
        int3 = (int3 + 1);
    };
    return;
}